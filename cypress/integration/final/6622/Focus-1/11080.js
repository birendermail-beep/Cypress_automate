/*
@author: Anirudha Pratap
@master_project_id: 6622
@phase_id: 9828
@story_id: 11080
@story_name: Focus Demo
@path: final/Focus
@test_case_name: Focus Demo
@description: N/A
@test_steps:

^Open demo tab
-Click on demo tab

^Click start demo
-click start demo btn
-Click on start demo 

^Click question panel
-Click on LHS question panel

^Click on view link
-Click on view link

^Done button click
-When click on done button

^End demo functionality
-When click on last done button
-Click on End demo button

@test_data: n/a
@result: Confirmation box action will decide what will be next step.
*/
import { Navbar, login_username, login_password, LoginPage, FocusArea } from '../../../../page-objects/pages/index' 
describe('Focus Area', () => {
    beforeEach('This is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        FocusArea.myFocus()
    })
    it('Demo Page', () => {
        cy.get('[data-cy="more_tab"]').click()
        cy.get('[data-cy="report_opt_more"]').click()
        cy.get('[data-cy="start_demo_link"]')
            .should('have.attr', 'href')
            .then((href) => {
                cy.visit(href)
            })
    })

    it('Start Demo', () => {
        cy.get('[data-cy="more_tab"]').click()
        cy.get('[data-cy="report_opt_more"]').click()
        cy.get('[data-cy="start_demo_link"]')
            .should('have.attr', 'href')
            .then((href) => {
                cy.visit(href)
            })
        cy.get('[data-cy="play_btn"]').click()
        cy.get('.sweet-alert').should('be.visible')
    })

    it('Start Demo by not choosing the data', () => {
        cy.get('[data-cy="more_tab"]').click()
        cy.get('[data-cy="report_opt_more"]').click()
        cy.get('[data-cy="start_demo_link"]')
            .should('have.attr', 'href')
            .then((href) => {
                cy.visit(href)
            })
        cy.get('[data-cy="play_btn"]').click()
        cy.get('.sweet-alert').should('be.visible')
        cy.get('.confirm').click({ force: true })
    })

    it('Start Demo by choosing the data', () => {
        cy.get('[data-cy="more_tab"]').click()
        cy.get('[data-cy="report_opt_more"]').click()
        cy.get('[data-cy="start_demo_link"]')
            .should('have.attr', 'href')
            .then((href) => {
                cy.visit(href)
            })
        cy.fixture('global').then(data => {
            cy.get('[data-cy="main_select"]').select(data.auditor_name[2], { force: true })
            cy.get('[data-cy="audit_select"]').select(data.auditor_name[2], { force: true })
            cy.get('[data-cy="additional_auditor_select"]').select(data.auditor_name[2], { force: true })
        })
        cy.get('[data-cy=circle_cy]').click({ force: true })
        cy.wait(2000)
        cy.get('.sweet-alert').should('be.visible')
        cy.get('.confirm').contains('Yes, Continue').click({ force: true })
        cy.wait(2000)
        cy.get('[data-cy="end_demo_btn"]').click()
        cy.get('.confirm').click()
        cy.get('[data-cy="end_demo_btn"]').click()
        cy.get('.confirm').click()
    })
})