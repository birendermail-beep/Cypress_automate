/*
@author: Anirudha Pratap
@master_project_id: 6622
@phase_id: 9828
@story_id: 11476
@story_name: EQ Report
@path: final/Focus
@test_case_name: EQ Report
@description: N/A
@test_steps:

^EQ section LHS will be same as project master RHS
-Click on EQ row from any given EQ.

@test_data: n/a
@result: EQ Report
*/

import { Navbar, login_username, login_password, LoginPage, FocusArea } from '../../../../page-objects/pages/index' 
describe('Focus Area', () => {
    it('EQ Report', () => {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        FocusArea.myFocus()
        cy.get('[data-cy="goal_tab"]').click()
        cy.get('[data-cy="weekly_goal"]').click()
        cy.wait(10000)
        cy.get('[data-cy="eta_tbl"]').should('be.visible')
    })
})