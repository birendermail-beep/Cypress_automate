/*
@author: Anirudha Pratap
@master_project_id: 6622
@phase_id: 9828
@story_id: 11474
@story_name: Last 5 Demo Meeting
@path: final/Focus
@test_case_name: Last 5 Demo Meeting
@description: N/A
@test_steps:

^Demo meetings
-Click on Score menu.

@test_data: n/a
@result: Last 5 Demo Meeting
*/

import { Navbar, login_username, login_password, LoginPage, FocusArea } from '../../../../page-objects/pages/index' 
describe('Focus Area', () => {
    it('Last Five demo Meetings', () => {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        FocusArea.myFocus()
        cy.get('[data-cy="last_demo"]').should('be.visible')
    })
})