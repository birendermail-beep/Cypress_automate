/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id: 10150
@story_id: 10829
@story_name: Access Practice Test
@path: final/6607/Student
@description: Verify core Practice Test flows in Learn and Test modes.
*/
import {
    Navbar,
    login_username,
    login_password,
    LoginPage,
    StudentPage,
} from '../../../../page-objects/pages/index'

describe('Student Practice Tests', () => {
    beforeEach(() => {
        cy.visit('/')
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        StudentPage.openurl()
        cy.get('[intro-id="practice_tests"] > .menu-item').should('be.visible').click({ force: true })
        cy.get('[data-cy="test_tests"]').first().should('be.visible').click({ force: true })
    })

    it('opens Learn Mode and supports question navigation and test completion', () => {
        cy.get('#learn_mode').should('be.visible').click({ force: true })
        cy.get('#learn').should('be.visible').click({ force: true })
        cy.get('#learn').should('be.visible').click({ force: true })

        cy.questionNavigation()

        cy.get('.icomoon-new-24px-gear-1').should('be.visible').click({ force: true })
        cy.get('.icomoon-new-24px-expand-2').should('be.visible').click({ force: true })

        cy.get('[data-cy="tripple_dot"]').first().should('be.visible').click({ force: true })
        cy.get('.popover-body > :nth-child(4) > .dot').should('be.visible').click({ force: true })
        cy.get('.popover-body > .mb-md > .float-left').should('be.visible').click({ force: true })

        StudentPage.endTest()
    })

    it('opens the item list and exposes attempted/unattempted filters', () => {
        cy.get('#learn_mode').should('be.visible').click({ force: true })
        cy.get('#learn').should('be.visible').click({ force: true })
        cy.get('#learn').should('be.visible').click({ force: true })

        cy.get('#btntxt').should('be.visible').click({ force: true })
        cy.contains('Attempted').should('be.visible')
        cy.contains('Unattempted').should('be.visible')
        cy.get('#btntxt').click({ force: true })

        StudentPage.endTest()
    })

    it('opens Practice Test in Test Mode and completes the test', () => {
        cy.get('#test_mode').should('be.visible').click({ force: true })
        StudentPage.endTest()
    })
})
