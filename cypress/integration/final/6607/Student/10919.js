// Counts rendered Knowledge Check occurrences across every readable lesson.
// No answer selection, reset, submission, or course-editing commands are used.
import { Navbar, LoginPage, login_username, login_password, StudentPage } from '../../../../page-objects/pages/index'

describe('Course-wide Knowledge Check count', () => {
    const text = value => String(value || '').replace(/\s+/g, ' ').trim()
    const visible = el => Cypress.$(el).is(':visible') &&
        !el.closest('.visually-hidden, .sr-only, [aria-hidden="true"], [hidden]')
    const isKnowledgeCheck = value => /^knowledge\s*check\s*:?$/i.test(text(value))

    const lessonNumber = doc => {
        const matches = Array.from(doc.body.querySelectorAll('*'))
            .filter(el => visible(el) && /^Lesson\s+\d+$/i.test(text(el.textContent)) &&
                !Array.from(el.children).some(child =>
                    /^Lesson\s+\d+$/i.test(text(child.textContent))))
            .map(el => Number(text(el.textContent).match(/\d+$/)[0]))
        return new Set(matches).size === 1 ? matches[0] : null
    }

    const readerContainer = doc => {
        const viewportHeight = doc.defaultView.innerHeight
        const viewportWidth = doc.defaultView.innerWidth
        const candidates = [doc.scrollingElement,
            ...Array.from(doc.querySelectorAll('*')).filter(el =>
                visible(el) && el.clientHeight >= viewportHeight * 0.55 &&
                el.clientWidth >= viewportWidth * 0.55 &&
                el.scrollHeight > el.clientHeight + 5 &&
                /auto|scroll/.test(doc.defaultView.getComputedStyle(el).overflowY))]
            .filter(Boolean)
        return candidates.sort((a, b) =>
            (b.scrollHeight - b.clientHeight) - (a.scrollHeight - a.clientHeight))[0] || null
    }

    const countMarkers = doc => {
        if (!doc.body) return 0
        const markers = Array.from(doc.body.querySelectorAll('*')).filter(el =>
            isKnowledgeCheck(el.textContent) && visible(el) &&
            !Array.from(el.children).some(child =>
                isKnowledgeCheck(child.textContent) && visible(child)))
        let count = markers.length
        for (const frame of doc.querySelectorAll('iframe')) {
            if (!visible(frame)) continue
            let child = null
            try { child = frame.contentDocument } catch (_) {}
            if (child && child.body) count += countMarkers(child)
        }
        return count
    }

    const scanLesson = (peak = 0, previousHeight = -1, attempts = 0) => {
        if (attempts >= 6) return cy.wrap(peak, { log: false })
        return cy.document({ timeout: 30000, log: false }).then(doc => {
            const found = Math.max(peak, countMarkers(doc))
            const container = readerContainer(doc)
            if (!container) return found
            const height = container.scrollHeight
            const atBottom = container.scrollTop + container.clientHeight >= height - 5
            if (atBottom && height === previousHeight) return found
            container.scrollTo({ top: height, behavior: 'instant' })
            return cy.wait(150, { log: false }).then(() =>
                scanLesson(found, height, attempts + 1))
        })
    }

    const lessonUrls = doc => {
        const urls = []
        const add = value => {
            if (!value) return
            const url = new URL(value, doc.location.href)
            const chapter = url.searchParams.get('chapter_no')
            if (url.searchParams.get('func') === 'ebook' && /^[1-9]\d*$/.test(chapter)) {
                url.hash = 'top'
                if (!urls.includes(url.href)) urls.push(url.href)
            }
        }

        Array.from(doc.querySelectorAll('a[href]')).forEach(link => add(link.href))

        // Some course builds render Read as a button. Resolve its lesson row number.
        const readLabels = Array.from(doc.body.querySelectorAll('*')).filter(el =>
            visible(el) && /^Read$/i.test(text(el.textContent)) &&
            !Array.from(el.children).some(child => /^Read$/i.test(text(child.textContent))))
        readLabels.forEach(label => {
            const direct = label.closest('a[href]')
            if (direct) return add(direct.href)
            let row = label.parentElement
            for (let depth = 0; row && row !== doc.body && depth < 8; depth += 1) {
                const linked = row.querySelector('a[href*="func=ebook"][href*="chapter_no="]')
                if (linked) return add(linked.href)
                const match = text(row.textContent).match(/^(\d+)\s+.+?\bRead\b/i)
                if (match) {
                    return add('/app/?func=ebook&chapter_no=' + Number(match[1]))
                }
                row = row.parentElement
            }
        })
        return urls
    }

    let rows = []
    let completed = false

    afterEach(() => {
        cy.writeFile('cypress/results/knowledge-check-count.json', {
            complete: completed,
            lessonsScanned: rows.length,
            knowledgeChecks: rows.reduce((sum, row) => sum + row.knowledgeChecks, 0),
            lessons: rows,
        }, { log: false })
    })

    it('scans every readable lesson and reports Knowledge Check totals', { retries: 0 }, () => {
        rows = []
        completed = false
        const startedAt = Date.now()

        cy.visit('/')
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        StudentPage.visitLOAplusCompleteCourse()
        cy.get('[intro-id="chapters"]', { timeout: 30000 }).filter(':visible').first().click()
        cy.location('search', { timeout: 30000 }).should('include', 'func=ebook')

        // Always discover the complete Read list before opening lesson content.
        cy.visit('/app/?func=ebook&chapter_no=0')
        cy.contains(':visible', /^\s*Read\s*$/i, { timeout: 30000 }).should('exist')
        cy.document().then(doc => {
            const container = readerContainer(doc)
            if (container) container.scrollTo({ top: container.scrollHeight, behavior: 'instant' })
        })
        cy.wait(300, { log: false })

        cy.document().then(doc => {
            const urls = lessonUrls(doc)
            expect(urls.length, 'readable lessons discovered').to.be.greaterThan(0)
            cy.log('Discovered ' + urls.length + ' readable lessons')

            const scanAt = index => {
                if (index >= urls.length) {
                    completed = true
                    const total = rows.reduce((sum, row) => sum + row.knowledgeChecks, 0)
                    Cypress.log({
                        name: 'COURSE TOTAL',
                        message: total + ' Knowledge Checks across ' + rows.length +
                            ' lessons in ' + Math.round((Date.now() - startedAt) / 1000) + 's',
                        consoleProps: () => ({ total, lessons: rows }),
                    })
                    console.table(rows)
                    console.info('COURSE KNOWLEDGE CHECK TOTAL:', total)
                    return
                }

                const expected = Number(new URL(urls[index]).searchParams.get('chapter_no'))
                cy.visit(urls[index])
                cy.document({ timeout: 30000 }).should(lessonDoc => {
                    expect(lessonNumber(lessonDoc), 'rendered lesson').to.eq(expected)
                })
                cy.document().then(lessonDoc => {
                    const container = readerContainer(lessonDoc)
                    if (container) container.scrollTo({ top: 0, behavior: 'instant' })
                })
                scanLesson().then(count => {
                    rows.push({
                        lesson: expected,
                        knowledgeChecks: count,
                        url: urls[index],
                    })
                    cy.log('Lesson ' + expected + ': ' + count + ' Knowledge Checks')
                    scanAt(index + 1)
                })
            }

            scanAt(0)
        })
    })
})
