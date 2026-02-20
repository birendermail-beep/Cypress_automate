/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id:
@story_id: 14866
@story_name: No access of test
@path: final/6607/Student
@test_case_name: No access of test
@description: Opening the not accessible page.
@test_steps:

^No access of test
-visit the website
-login into page
-Open the my library.
-Open the dashboard of any course.(url + /?func=load_course&course_code=02pzx&class_code=05RFQ).
-Click on the chapter and lesson.
-Open the quiz by following link.(url + /?func=start_test&test_type=-3&parent_guid=02nHq)
-Click on the test.

@test_data: n/a
@result: Opening the not accessible page.
*/
import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
describe('No access page', function() {

    it('Opening the no access page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/?func=load_course&course_code=02pzx&class_code=05RFQ");
            cy.get('[intro-id="chapters"]').click();
            cy.visit(data.url + "/?func=start_test&test_type=-3&parent_guid=02nHq").then(() => {
                cy.get("#test_mode").click();
            })
        })
    })
})