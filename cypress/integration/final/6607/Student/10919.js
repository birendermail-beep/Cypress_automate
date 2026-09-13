// Knowledge Check visibility only; no answers or results are submitted.
import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'

describe('Knowledge Check visibility (read-only)', () => {
    beforeEach(() => {
        cy.visit('/')
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        StudentPage.visitLOAplusCompleteCourse()
        cy.get('[intro-id="chapters"]', { timeout: 30000 })
            .filter(':visible').first().click()
    })

    it('shows Knowledge Check in the configured chapter', () => {
        const chapter = Cypress.env('KNOWLEDGE_CHECK_CHAPTER') || 'Operating System Fundamentals'
        cy.contains('[data-cy="toc_chapters"]:visible', chapter, { timeout: 30000 })
            .click()
        cy.contains('Knowledge Check', { timeout: 30000 })
            .scrollIntoView().should('be.visible')
    })

    it('shows Knowledge Check in the second chapter', () => {
        cy.get('[data-cy="toc_chapters"]', { timeout: 30000 })
            .filter(':visible').should('have.length.at.least', 2).eq(1).click()
        cy.contains('Knowledge Check', { timeout: 30000 })
            .scrollIntoView().should('be.visible')
    })
})
