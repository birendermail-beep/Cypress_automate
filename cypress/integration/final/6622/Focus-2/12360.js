/*
@author: Anirudha Pratap
@master_project_id: 6622
@phase_id: 9828
@story_id: 12360
@story_name: QQ Form
@path: final/Focus
@test_case_name: QQ Form
@description: N/A
@test_steps:

^QQ form redesign
-Click on any bug's action which is QQ required.
-There will be Fill QQ option.
-Clicking that. QQ form will be opened.

@test_data: n/a
@result: QQ Form
*/
import { Navbar, login_username, login_password, LoginPage, FocusArea } from '../../../../page-objects/pages/index'
describe('Focus Area', function() {
    it('QQ Form', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/focus');
        })
        cy.get('[data-cy=goal_tab] > .nav-link').click({ force: true });
        cy.get('[data-cy=weekly_goal] > .changeURL').click({ force: true });
        cy.get('.bug_setting > .dropdown').eq(0).click({ force: true });
        cy.get('.fill_qq ').click({ force: true });
    })
})