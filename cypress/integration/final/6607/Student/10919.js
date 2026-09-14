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
    const advance = direction => cy.document().then(doc => {
        const before = position(doc)
        const control = navigation(doc, direction)
        expect(control.length, direction + ' control').to.eq(1)
        cy.wrap(control).click()
        return cy.document({ timeout: 30000 }).should(updated => {
            const after = position(updated)
            expect(after.current).to.eq(before.current + (direction === 'next' ? 1 : -1))
            expect(after.total).to.eq(before.total)
        })
    })
    const rewind = (remaining = 2000) => cy.document().then(doc => {
        if (position(doc).current === 1) return
        if (!remaining) throw new Error('Could not reach the first ebook page')
        return advance('previous').then(() => rewind(remaining - 1))
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
            movable.forEach(el => el.scrollBy(0, Math.max(250, el.clientHeight * 0.65)))
            // Scroll-driven ebook content/iframes load asynchronously.
            return cy.wait(750, { log: false }).then(() =>
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
                cy.get('body', { timeout: 30000 }).find('*', { timeout: 30000 })
                    .filter((_, el) => visible(el) && /^read$/i.test(text(el.textContent)) &&
                        !Array.from(el.children).some(child =>
                            visible(child) && /^read$/i.test(text(child.textContent))))
                    .should('have.length.at.least', 1)
                    .first().scrollIntoView().click()
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
        rewind()

        const scanCourse = () => cy.document().then(doc => {
            const page = position(doc)
            expect(page.current, 'consecutive ebook page').to.eq(rows.length + 1)
            scrollContainers(doc).forEach(el => el.scrollTo(0, 0))
            const chapter = new URL(doc.location.href).searchParams.get('chapter_no')
            return cy.wait(750, { log: false }).then(() => scanPage()).then(count => {
                rows.push({ page: page.current, chapter, knowledgeChecks: count })
                cy.log('Page ' + page.current + '/' + page.total + ': ' + count + ' Knowledge Checks')
                if (page.current < page.total) return advance('next').then(scanCourse)
                expect(rows.length, 'all ebook pages scanned').to.eq(page.total)
                const total = rows.reduce((sum, row) => sum + row.knowledgeChecks, 0)
                Cypress.log({
                    name: 'COURSE TOTAL',
                    message: total + ' Knowledge Checks across ' + rows.length + ' pages',
                    consoleProps: () => ({ total, pagesScanned: rows.length, breakdown: rows }),
                })
                console.table(rows)
                console.info('COURSE KNOWLEDGE CHECK TOTAL:', total)
            })
        })
        cy.then(scanCourse)
    })
})
