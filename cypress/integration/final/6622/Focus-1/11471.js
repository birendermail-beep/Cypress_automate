/*
@author: Anirudha Pratap
@master_project_id: 6622
@phase_id: 10858
@story_id: 11471
@story_name: QQ Feautre in Bug
@path: final/Focus
@test_case_name: QQ Feautre in Bug
@test_steps:

^Give QQ permission to 3 team members 
-Open any bug's edit window.
-Here QQ required select will be enabled in all cases to specific persons.

^If priority is High/Critical then bug should be QQ required
-Open any bug edit window.
-Change its priority to High/Critical.
-Its QQ field will be changed to QQ required

@test_data: n/a
@result: QQ required select box will be enabled
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
    })
})