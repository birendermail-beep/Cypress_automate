// Submits the recorded detection-methods Knowledge Check using its verified answer set.
import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'

describe('Knowledge Check correct submission', () => {

    const prompt = 'Click to select the methods in which the detection process is involved.'
    const answers = [
        'A software client that talks to a NAC server when connected',
        'A DHCP proxy that listens for traffic like DHCP requests',
        'A broadcast listener that looks for broadcast traffic like ARP queries',
    ]
    const normalize = (text) => text.replace(/\s+/g, ' ').trim()
    const documents = (doc) => {
        const result = [doc]
        for (const frame of doc.querySelectorAll('iframe')) {
            try {
                if (frame.contentDocument) result.push(...documents(frame.contentDocument))
            } catch (_) {
                // Cross-origin players need a separate supported navigation flow.
            }
        }
        return result
    }
    const exact = (root, text) => Cypress.$(root).find('*').filter((_, element) =>
        Cypress.$(element).is(':visible') &&
        normalize(element.textContent).toLowerCase() === text.toLowerCase()
    ).last()
    const player = (doc) => {
        for (const candidate of documents(doc)) {
            const label = exact(candidate.body, prompt)
            if (!label.length) continue
            const root = label.parents().filter((_, element) =>
                answers.every(answer => element.textContent.includes(answer)) &&
                exact(element, 'Reset').length > 0
            ).first()
            if (root.length) return root
        }
        return Cypress.$()
    }
    const inPlayer = (text) => cy.document().should((doc) => {
        expect(player(doc).length, 'recorded Knowledge Check player').to.eq(1)
        expect(exact(player(doc), text).length, text).to.eq(1)
    }).then(doc => cy.wrap(exact(player(doc), text)))
    const clickPlayer = (text) => inPlayer(text).click()


    const searchKnowledgeCheck = (page = 0, step = 0) => cy.document().then(doc => {
        if (player(doc).length) return cy.wrap(player(doc)).scrollIntoView()
        if (page >= 160) throw new Error('Recorded Knowledge Check not found within 160 ebook pages')
        const containers = Array.from(doc.querySelectorAll('*')).filter(el =>
            Cypress.$(el).is(':visible') && /auto|scroll/.test(doc.defaultView.getComputedStyle(el).overflowY))
        if (doc.scrollingElement) containers.push(doc.scrollingElement)
        const movable = [...new Set(containers)].filter(el => el.scrollTop + el.clientHeight < el.scrollHeight - 5)
        if (movable.length && step < 40) {
            movable.forEach(el => el.scrollBy(0, Math.max(250, el.clientHeight * 0.7)))
            return cy.wait(700, { log: false }).then(() => searchKnowledgeCheck(page, step + 1))
        }
        return cy.wait(1500, { log: false }).then(() => cy.document()).then(current => {
            if (player(current).length) return cy.wrap(player(current)).scrollIntoView()
            const counter = d => normalize(d.body.innerText).match(/\b\d+\s+of\s+\d+\b/g)?.pop() || ''
            const before = current.location.href + counter(current)
            const next = Cypress.$(current.body).find('a, button, [role="button"], [onclick]').filter((_, el) =>
                Cypress.$(el).is(':visible') && /^next\s*[»›]*$/i.test(normalize(el.textContent)) &&
                !el.disabled && el.getAttribute('aria-disabled') !== 'true').last()
            if (!next.length) throw new Error('End of ebook: recorded Knowledge Check not found')
            cy.wrap(next).click()
            return cy.document({ timeout: 30000 }).should(d => {
                expect(d.location.href + counter(d), 'ebook advances').not.to.eq(before)
            }).then(() => cy.wait(700, { log: false })).then(() => searchKnowledgeCheck(page + 1))
        })
    })
    const resetConfirmation = doc => {
        for (const d of documents(doc)) {
            const title = exact(d.body, 'Reset Item')
            if (!title.length) continue
            const modal = title.closest('[role="dialog"], .modal, .bootbox')
            const scope = modal.length ? modal : title.parents().filter((_, el) =>
                Cypress.$(el).find('button, input[type="button"]').length >= 2).first()
            const buttons = Cypress.$(scope).find('button, a, [role="button"], input[type="button"]')
                .filter((_, el) => Cypress.$(el).is(':visible') && !el.disabled &&
                    /^(ok|yes|reset)$/i.test(normalize(el.textContent || el.value || '')))
            if (buttons.length === 1) return buttons
        }
        return Cypress.$()
    }

    beforeEach(() => {
        cy.visit('/')
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        StudentPage.visitLOAplusCompleteCourse()
        cy.get('[intro-id="chapters"]', { timeout: 30000 })
            .filter(':visible').first().click()
    })

    // The second chapter was verified in Platform Demo; override by name for other courses.
    it('submits the recorded Knowledge Check and receives Correct', () => {
        const chapter = Cypress.env('KNOWLEDGE_CHECK_CHAPTER')
        if (chapter) {
            cy.contains('[data-cy="toc_chapters"]:visible', chapter, { timeout: 30000 }).click()
        } else {
            cy.get('[data-cy="toc_chapters"]', { timeout: 30000 })
                .filter(':visible').should('have.length.at.least', 2).eq(1).click()
        }
        cy.location('search', { timeout: 30000 }).should('include', 'func=ebook')
        searchKnowledgeCheck()

        // Reset this item through its UI so prior manual attempts cannot affect selection.
        clickPlayer('Reset')
        cy.document({ timeout: 30000 }).should(doc => {
            expect(resetConfirmation(doc).length, 'visible Reset Item confirmation button').to.eq(1)
        }).then(doc => cy.wrap(resetConfirmation(doc)).click())
        inPlayer('Submit').should('be.visible')
        answers.forEach(answer => clickPlayer(answer))
        clickPlayer('Submit')
        // Exact text excludes both "Incorrect" and the "Correct Answer" tab.
        inPlayer('Correct').should('be.visible')
        inPlayer('Explanation').should('be.visible')
    })
})
