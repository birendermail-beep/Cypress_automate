/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id:
@story_id: 14895
@story_name: Performance lab
@path: final/6607/Student
@test_case_name: Performance lab
@description: N/A   
@test_steps:
^Performance lab
-Login account on uCertify.
-Open the my library.
-Open any course.(https://www.ucertify.com/?func=load_course&course_code=02pzx&class_code=04ehS).
-Click on the Performace lab.
-Open any lab. (Installing Memory Modules).

^Performance lab2
-Login account on uCertify.
-Open the my library.
-Open any course.(https://www.ucertify.com/?func=load_course&course_code=02pzx&class_code=04ehS).
-Click on the Performace lab.
-Open any lab. (Identifying network types).

^pe-test-task-window
-Login account on uCertify.
-Open the my library.
-Open course LO-Aplus-Complete.
-Click on the Performace lab.
-Open any lab. (Viewing the iOS version).
-Click on the close test icon.


@test_data: n/a
@result: It will open the performance labs.
*/
import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
describe('Performance lab', function() {
    beforeEach('this is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
        })
    })
    it('Opening the performance lab page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + "/?func=load_course&course_code=02pzx&class_code=04ehS");
            cy.get('[data-type="l"]').click();
            cy.contains("Identifying network types").click({ force: true });
        })
    })
    it('Opening the performance lab page 2', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + "/?func=load_course&course_code=02pzx&class_code=04ehS");
            cy.get('[data-type="l"]').click();
            cy.contains("Installing Memory Modules").click({ force: true });
        })
    })
    it('pe-test-task-window', function() {
        cy.fixture('global').then(data => {
            StudentPage.visitLOAplusCompleteCourse(data)
        })
        cy.get('[data-type="l"]').click()
        cy.contains('Viewing the iOS version').click({ force: true })
        cy.wait(5000)
        cy.get('.close-test').click({ force: true })
    })
})