/*
@author:Anirudha Pratap
@master_project_id: 6607
@phase_id:
@story_id: 14860
@story_name: test help
@path: final/6607/Student
@test_case_name: test help
@description: Opening the test help page
@test_steps:

^test case of of Student pre assessment
-visit the website
-login into page
-Open the my library.
-Open any course.(url + /?func=load_course&course_code=02pzx&class_code=05O8Y).
-click on the Pre assessment

@test_data:n/a
@result:Opening the test help page
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('test help page', function() {
    it('Opening the test help page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/?func=load_course&course_code=02pzx&class_code=05O8Y");
        })
        cy.get('[intro-id="pre_asssement"]').click();
    })
})