// Counts rendered Knowledge Check occurrences across the selected course.
// No answer selection, reset, or submission commands are used.
import { Navbar, LoginPage, login_username, login_password, StudentPage } from '../../../../page-objects/pages/index'

describe('Course-wide Knowledge Check count', () => {
    const text = value => String(value || '').replace(/\s+/g, ' ').trim()
    const label = value => /^knowledge\s*check\s*:?$/i.test(text(value))
    const visible = el => Cypress.$(el).is(':visible') &&
        !el.closest('.visually-hidden, .sr-only, [aria-hidden="true"], [hidden]')
    const navigation = (doc, direction) => Cypress.$(doc.body)
        .find('a, button, [role="button"], [onclick]')
        .filter((_, el) => visible(el) &&
            new RegExp('^' + direction + '$', 'i').test(text(el.textContent).replace(/[«»‹›]/g, '').trim()) &&
            !el.disabled && el.getAttribute('aria-disabled') !== 'true').last()
    const position = doc => {
        // Read the counter beside the ebook Next/Previous controls, not question text.
        const control = navigation(doc, 'next').length ? navigation(doc, 'next') : navigation(doc, 'previous')
        let element = control[0]
        while (element && element !== doc.body) {
            const match = text(element.textContent).match(/\b(\d+)\s+of\s+(\d+)\b/i)
            if (match) return { current: Number(match[1]), total: Number(match[2]) }
            element = element.parentElement
        }
        throw new Error('Cannot read ebook page counter; refusing to report an incomplete course count')
    }
    const scrollContainers = doc => [...new Set([
        doc.scrollingElement,
        ...Array.from(doc.querySelectorAll('*')).filter(el => visible(el) &&
            /auto|scroll/.test(doc.defaultView.getComputedStyle(el).overflowY) &&
            el.scrollHeight > el.clientHeight + 5),
    ].filter(Boolean))]
    const countMarkers = doc => {
        if (!doc.body) return 0
        const markers = Array.from(doc.body.querySelectorAll('*')).filter(el =>
            visible(el) && label(el.textContent) &&
            !Array.from(el.children).some(child => visible(child) && label(child.textContent)))
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
        const url = new URL(doc.location.href)
        return url.pathname + '?' + url.searchParams.toString()
    }
    const advanceLesson = () => cy.document().then(doc => {
        const before = lessonKey(doc)
        const control = navigation(doc, 'next')
        expect(control.length, 'Next lesson control').to.eq(1)
        cy.wrap(control).click({ scrollBehavior: false })
        return cy.document({ timeout: 30000 }).should(updated => {
            expect(lessonKey(updated), 'next lesson URL').not.to.eq(before)
            expect(new URL(updated.location.href).searchParams.get('chapter_no'),
                'reader remains in a lesson').not.to.eq('0')
        })
    })
    const scanPage = (peak = 0, steps = 0, stable = 0) => {
        if (steps > 200) throw new Error('Page did not finish scrolling; count is incomplete')
        return cy.document({ timeout: 30000 }).should(doc => {
            countMarkers(doc) // Retry while iframe documents initialize.
        }).then(doc => {
            const found = Math.max(peak, countMarkers(doc))
            const movable = scrollContainers(doc).filter(el =>
                el.scrollTop + el.clientHeight < el.scrollHeight - 5)
            if (!movable.length && stable >= 3) return found
            movable.forEach(el => el.scrollBy(0, Math.max(400, el.clientHeight * 0.9)))
            // Scroll-driven ebook content/iframes load asynchronously.
            return cy.wait(movable.length ? 250 : 600, { log: false }).then(() =>
                scanPage(found, steps + 1, movable.length || found !== peak ? 0 : stable + 1))
        })
    }

    it('scrolls every ebook page and reports Knowledge Check totals', { retries: 0 }, () => {
        const rows = []
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
        const scanCourse = () => cy.document().then(doc => {
            const key = lessonKey(doc)
            if (visited.has(key)) throw new Error('Repeated lesson URL; refusing to double-count: ' + key)
            if (visited.size >= 2000) throw new Error('Course scan limit reached; count incomplete')
            visited.add(key)
            scrollContainers(doc).forEach(el => el.scrollTo(0, 0))
            const chapter = new URL(doc.location.href).searchParams.get('chapter_no')
            return cy.wait(500, { log: false }).then(() => scanPage()).then(count => {
                rows.push({ lesson: rows.length + 1, chapter, knowledgeChecks: count })
                cy.log('Lesson ' + chapter + ': ' + count + ' Knowledge Checks')
                return cy.document().then(bottomDoc => {
                    const bottom = position(bottomDoc)
                    if (bottom.current < bottom.total) {
                        return advanceLesson().then(scanCourse)
                    }
                    const total = rows.reduce((sum, row) => sum + row.knowledgeChecks, 0)
                    Cypress.log({
                        name: 'COURSE TOTAL',
                        message: total + ' Knowledge Checks across ' + rows.length + ' lessons',
                        consoleProps: () => ({ total, lessonsScanned: rows.length, breakdown: rows }),
                    })
                    console.table(rows)
                    console.info('COURSE KNOWLEDGE CHECK TOTAL:', total)
                })
            })
        })
        cy.then(scanCourse)
    })
})
