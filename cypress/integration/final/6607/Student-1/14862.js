/*
@author: anirudha Pratap
@master_project_id: 6607
@phase_id:
@story_id: 14862
@story_name: Test Result
@path: final/6607/Student
@test_case_name: Test Result
@description: Opening the test result page 
@test_steps:
^Test Result
-visit the website
-login into page
-Open the my library.
-Open the follwing url.(url +/educator/?func=report&action=student_prepengine&u_course_code=02pzx.04ehS).
-Click on any student name.
-Click on the sessions.

@test_data: n/a
@result: Opening the test result page
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('test help page', function() {

    it('Opening the test help page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/educator/?func=report&action=student_prepengine&u_course_code=02pzx.04ehS");
        })
        cy.get('.list-group.student_list > a:nth-child(1)').click().then(() => {
            cy.get('[intro-id="sessions"]').click({ force: true });
        })
    })

})