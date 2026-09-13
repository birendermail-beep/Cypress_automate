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
        cy.contains('Knowledge Check', { timeout: 30000 })
            .scrollIntoView().should('be.visible')

        // Reset this item through its UI so prior manual attempts cannot affect selection.
        clickPlayer('Reset')
        cy.document().should((doc) => {
            expect(documents(doc).some(d => exact(d.body, 'Reset Item').length), 'reset dialog').to.eq(true)
        }).then((doc) => {
            const dialogDoc = documents(doc).find(d => exact(d.body, 'Reset Item').length)
            const dialog = exact(dialogDoc.body, 'Reset Item').parents().filter((_, el) =>
                exact(el, 'OK').length > 0
            ).first()
            expect(dialog.length, 'Reset Item confirmation').to.eq(1)
            cy.wrap(exact(dialog, 'OK')).click()
        })
        inPlayer('Submit').should('be.visible')
        answers.forEach(answer => clickPlayer(answer))
        clickPlayer('Submit')
        // Exact text excludes both "Incorrect" and the "Correct Answer" tab.
        inPlayer('Correct').should('be.visible')
        inPlayer('Explanation').should('be.visible')
    })
})
