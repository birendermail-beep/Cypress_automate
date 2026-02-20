/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id:
@story_id:15010
@story_name: Calculator Test
@path: final/6607/Student
@test_case_name:Calculator Test
@description: N/A
@test_steps:
^Calculator on test
-Login as administrator on uCertify.
-Open the following link.(https://www.ucertify.com/admin/admin_course_config.php?course_code=02pzx&action=edit_course_config&msg=Config%20added%20successfully).
-Set Calculator as Normal.
-Open any course.(https://www.ucertify.com/?func=load_course&course_code=02pzx&class_code=05Rf3).
-Click on the practice test.
-Start any practice test(A).
-Click on the Test.

@test_data: n/a
@result: It will open the Calulator, on bottom toolbar.
*/
import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index' 
describe('Calculator in test', function() {
    it('Opening the calculator in test page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/admin/admin_course_config.php?course_code=02pzx&action=edit_course_config&msg=Config%20added%20successfully");
            cy.get("#calculator").select("Normal", { force: true });
            cy.get("#save_config").click();
            cy.visit(data.url + "/?func=load_course&course_code=02pzx&class_code=05Rf3");
        })
        cy.get('[intro-id="practice_tests"]').click();
        cy.get('#test1').click();
        cy.get('#test_mode').click();
        StudentPage.endTest()
    })
})