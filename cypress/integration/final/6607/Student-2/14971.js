/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id: 
@story_id: 14971
@story_name: custom test    
@path: final/6607/Student
@test_case_name: custom test
@description: N/A   
@test_steps:
^test error
-Login to the uCertify.com
-Open the my library.
-Open the any course.(https://www.ucertify.com/?func=load_course&course_code=02pzx&class_code=05qrv).
-Click on the chapter and lesson
-Open this course.(https://www.ucertify.com/?func=load_course&course=TECH-CIS-105)
-Open the following url.(https://www.ucertify.com/?func=custom_test&parent_guid=02nHQ)
-Perform the test in test mode.
-End the test.
@test_data: n/a
@result: It will show the result page.
*/
import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
describe('Test error', function() {

    it('Opening the test error page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            StudentPage.visitLOAplusCompleteCourse(data)
            cy.get('[intro-id="chapters"]').click({ force: true });
            cy.visit(data.url + "/?func=load_course&course=TECH-CIS-105");
            cy.visit(data.url + "/?func=custom_test&parent_guid=" + data.parent_guid[1]);
        })
        cy.get('#test_mode').click({ force: true });
        StudentPage.endTest()
    })
})