/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id:
@story_id: 14889
@story_name: Library demo
@path: final/6607/Student
@test_case_name: Library demo
@description:
@test_steps:
^Library demo from Utils
-Login as author.
-Open the utils page.(https://www.ucertify.com/utils)
-click on the Library Demo.

@test_data: n/a
@result: It will open the library demo page.
*/
import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index' 
describe('Utils', function() {

    it('It open the library demo page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/utils');
        })
        cy.get(':nth-child(16) > :nth-child(3) > [data-cy=utils_list]').click({ force: true })
    })
})