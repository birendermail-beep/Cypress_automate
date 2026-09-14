// Counts rendered Knowledge Check occurrences across the selected course.
// No answer selection, reset, or submission commands are used.
import { Navbar, LoginPage, login_username, login_password, StudentPage } from '../../../../page-objects/pages/index'

describe('Course-wide Knowledge Check count', () => {
    const text = value => String(value || '').replace(/\s+/g, ' ').trim()
    const label = value => /^knowledge\s*check\s*:?$/i.test(text(value))
    const visible = el => Cypress.$(el).is(':visible') &&
        !el.closest('.visually-hidden, .sr-only, [aria-hidden="true"], [hidden]')
    const readerFooter = doc => {
        const candidates = Array.from(doc.body.querySelectorAll('*')).filter(el => {
            const value = text(el.textContent).replace(/[«»‹›]/g, '')
            return visible(el) && /\b\d+\s+of\s+\d+\b/i.test(value) &&
                /\bprevious\b/i.test(value) && /\bnext\b/i.test(value) &&
                /\bgo back\b/i.test(value)
        })
        // Use the smallest matching container around the fixed ebook toolbar.
        return candidates.find(el => !Array.from(el.children).some(child => {
            const value = text(child.textContent).replace(/[«»‹›]/g, '')
            return visible(child) && /\b\d+\s+of\s+\d+\b/i.test(value) &&
                /\bprevious\b/i.test(value) && /\bnext\b/i.test(value) &&
                /\bgo back\b/i.test(value)
        })) || null
    }
    const readerNavigation = (doc, direction) => {
        const footer = readerFooter(doc)
        if (!footer) return Cypress.$()
        const exact = new RegExp('^' + direction + '$', 'i')
        const labels = Array.from(footer.querySelectorAll('*')).filter(el =>
            visible(el) && exact.test(text(el.textContent).replace(/[«»‹›]/g, '').trim()) &&
            !Array.from(el.children).some(child =>
                exact.test(text(child.textContent).replace(/[«»‹›]/g, '').trim())))
        const controls = labels.map(el =>
            el.closest('a, button, [role="button"], [onclick]') || el)
            .filter(el => footer.contains(el) && !el.disabled &&
                el.getAttribute('aria-disabled') !== 'true')
        return Cypress.$([...new Set(controls)])
    }
    const position = doc => {
        const footer = readerFooter(doc)
        if (!footer) throw new Error('Cannot locate the ebook footer')
        const match = text(footer.textContent).match(/\b(\d+)\s+of\s+(\d+)\b/i)
        if (!match) throw new Error('Cannot read ebook page counter')
        return { current: Number(match[1]), total: Number(match[2]) }
    }
    const scrollContainers = doc => [...new Set([
        doc.scrollingElement,
        ...Array.from(doc.querySelectorAll('*')).filter(el =>
            el.scrollHeight > el.clientHeight + 5 && visible(el) &&
            /auto|scroll/.test(doc.defaultView.getComputedStyle(el).overflowY)),
    ].filter(Boolean))]
    const countMarkers = doc => {
        if (!doc.body) return 0
        const markers = Array.from(doc.body.querySelectorAll('*')).filter(el =>
            label(el.textContent) && visible(el) &&
            !Array.from(el.children).some(child => label(child.textContent) && visible(child)))
        let count = markers.length
        for (const frame of doc.querySelectorAll('iframe')) {
            if (!visible(frame)) continue
            let child
            try { child = frame.contentDocument } catch (_) { child = null }
            if (!child || !child.body) {
                throw new Error('An ebook iframe is not readable yet; cannot guarantee a complete Knowledge Check count')
            }
            count += countMarkers(child)
        }
        return count
    }
    const lessonKey = doc => {
        // The reader changes content before its URL/counter necessarily settles.
        // Use the rendered lesson label consistently for navigation and deduplication.
        const chapters = new Set(Array.from(doc.body.querySelectorAll('*'))
            .filter(el => visible(el) && /^Lesson\s+\d+$/i.test(text(el.textContent)) &&
                !Array.from(el.children).some(child =>
                    /^Lesson\s+\d+$/i.test(text(child.textContent))))
            .map(el => Number(text(el.textContent).match(/\d+$/)[0])))
        return chapters.size === 1 ? 'lesson:' + [...chapters][0] : null
    }
    const waitForReader = (previous = null, started = Date.now(), candidate = null, stable = 0) =>
        cy.get('body', { log: false }).then($body => {
            const doc = $body[0].ownerDocument
            const key = lessonKey(doc)
            const valid = key && key !== previous
            if (valid && candidate === key && stable >= 2) return key
            if (Date.now() - started > 45000) {
                throw new Error('Reader did not settle. Previous: ' + previous +
                    '; rendered lesson: ' + key + '. Course count is incomplete.')
            }
            // Reissue the DOM query on each poll; never retain an old Document.
            return cy.wait(200, { log: false }).then(() =>
                waitForReader(previous, started, valid ? key : null,
                    valid && candidate === key ? stable + 1 : 0))
        })
    const nextLessonControl = doc => {
        // Scope Open to the next-lesson row, excluding flashcard/quiz/lab actions.
        const prompt = /^Proceed to the next lesson\.?$/i
        const labels = Array.from(doc.body.querySelectorAll('*')).filter(el =>
            visible(el) && prompt.test(text(el.textContent)) &&
            !Array.from(el.children).some(child => prompt.test(text(child.textContent))))
        if (!labels.length) return readerNavigation(doc, 'next')
        let row = labels[0].parentElement
        while (row && row !== doc.body) {
            const opens = Array.from(row.querySelectorAll('*')).filter(el =>
                visible(el) && /^Open$/i.test(text(el.textContent)) &&
                !Array.from(el.children).some(child => /^Open$/i.test(text(child.textContent))))
            if (opens.length > 1) break
            if (opens.length === 1) {
                const control = opens[0].closest('a, button, [role="button"], [onclick]') || opens[0]
                if (!row.contains(control) || control.disabled ||
                    control.getAttribute('aria-disabled') === 'true') break
                return Cypress.$(control)
            }
            row = row.parentElement
        }
        throw new Error('Cannot identify Open for Proceed to the next lesson')
    }
    const advanceLesson = () => cy.get('body').then($body => {
        const doc = $body[0].ownerDocument
        const before = lessonKey(doc)
        expect(before, 'current rendered lesson').to.be.a('string')
        const control = nextLessonControl(doc)
        expect(control.length, 'Next lesson control').to.eq(1)
        return cy.wrap(control).click({ scrollBehavior: false })
            .then(() => waitForReader(before))
    })
    const scanPage = (peak = 0, steps = 0, stable = 0) => {
        if (steps > 1000) throw new Error('Page did not finish scrolling; count is incomplete')
        let measured = 0
        return cy.document({ timeout: 30000, log: false }).should(doc => {
            measured = countMarkers(doc) // Retry while iframe documents initialize.
        }).then(doc => {
            const found = Math.max(peak, measured)
            const movable = scrollContainers(doc).filter(el =>
                el.scrollTop + el.clientHeight < el.scrollHeight - 5)
            if (!movable.length && stable >= 2) return found
            movable.forEach(el => el.scrollBy({ top: Math.max(1, el.clientHeight * 0.95), behavior: 'instant' }))
            // Scroll-driven ebook content/iframes load asynchronously.
            return cy.wait(movable.length ? 80 : 500, { log: false }).then(() =>
                scanPage(found, steps + 1, movable.length || found !== peak ? 0 : stable + 1))
        })
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

    it('scrolls every ebook page and reports Knowledge Check totals', { retries: 0 }, () => {
        rows = []
        completed = false
        const startedAt = Date.now()
        cy.visit('/')
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        // Uses STUDENT_COURSE_CRN / STUDENT_COURSE_SEARCH; defaults to Platform Demo.
        StudentPage.visitLOAplusCompleteCourse()
        cy.get('[intro-id="chapters"]', { timeout: 30000 }).filter(':visible').first().click()
        cy.location('search', { timeout: 30000 }).should('include', 'func=ebook')
        // chapter_no=0 is the Lessons list, not the reader.
        cy.location('search').then(search => {
            if (new URLSearchParams(search).get('chapter_no') === '0') {
                // Read is already visible on the Lessons list. Do not scroll this page.
                cy.contains(':visible', /^\s*Read\s*$/i, { timeout: 30000 })
                    .should('be.visible')
                    .click({ scrollBehavior: false })
                cy.location('search', { timeout: 30000 }).should(search => {
                    expect(new URLSearchParams(search).get('chapter_no'), 'lesson opened').not.to.eq('0')
                })
            }
        })
        cy.document({ timeout: 30000 }).should(doc => {
            const page = position(doc)
            expect(page.current, 'reader page number').to.be.greaterThan(0)
            expect(page.total, 'ebook page count').to.be.at.least(page.current)
        })
        // The first Read control opens the first available lesson.

        const visited = new Set()
        const scanCourse = () => waitForReader().then(() => cy.get('body')).then($body => {
            const doc = $body[0].ownerDocument
            const key = lessonKey(doc)
            if (visited.has(key)) throw new Error('Repeated lesson URL; refusing to double-count: ' + key)
            if (visited.size >= 2000) throw new Error('Course scan limit reached; count incomplete')
            visited.add(key)
            scrollContainers(doc).forEach(el => el.scrollTo(0, 0))
            const chapter = key.replace('lesson:', '')
            return scanPage().then(count => {
                rows.push({ lesson: rows.length + 1, chapter, knowledgeChecks: count })
                cy.log('Lesson ' + chapter + ': ' + count + ' Knowledge Checks')
                return cy.document().then(bottomDoc => {
                    const bottom = position(bottomDoc)
                    if (bottom.current < bottom.total) {
                        return advanceLesson().then(scanCourse)
                    }
                    completed = true
                    const total = rows.reduce((sum, row) => sum + row.knowledgeChecks, 0)
                    Cypress.log({
                        name: 'COURSE TOTAL',
                        message: total + ' Knowledge Checks across ' + rows.length + ' lessons in ' + Math.round((Date.now() - startedAt) / 1000) + 's',
                        consoleProps: () => ({ total, elapsedSeconds: Math.round((Date.now() - startedAt) / 1000), lessonsScanned: rows.length, breakdown: rows }),
                    })
                    console.table(rows)
                    console.info('COURSE KNOWLEDGE CHECK TOTAL:', total)
                })
            })
        })
        cy.then(scanCourse)
    })
})
