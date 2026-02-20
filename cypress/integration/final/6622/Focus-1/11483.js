/*
@author: Anirudha Pratap
@master_project_id: 6622
@phase_id: 9828
@story_id: 11483
@story_name: EQ Form
@path: final/Focus
@test_case_name: EQ Form
@description: N/A
@test_steps:

^Change eq questions and form template
-Click My projects page
-In right side, click settings icon,
-Click EQ request
-New Form template with questions will be opened"

^New EQ page opened
-Bug module page
-particular bug, click settings icon whose eta is not blank,
-Click Fill EQ
-New Form template with questions will be opened"

@test_data: n/a
@result: New EQ page opened
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

    it('Change eq questions and form template', () => {
        cy.get('[data-cy="goal_tab"]').click()
        cy.get('[data-cy="my_project"]').click()
        cy.wait(8000)
        cy.get('[data-cy="action_project"]').click()
        cy.get('[data-cy="eq_request"]').click()
        cy.wait(8000)
        cy.get('[data-cy="modal_eta"]').should('be.visible')
    })
    it('New EQ page opened', () => {
        cy.get('[data-cy="more_tab"]').click()
        cy.get('[data-cy="bug_list_data"]').click()
        cy.wait(10000)
        cy.get('[data-cy="setting_icon"]').eq(0).click()
        cy.get('[data-cy="fill_eta_opt"]').eq(0).click({ force: true })
        cy.wait(10000)
        cy.get('[data-cy="modal_eta"]').should('be.visible')
    })
})