/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id: 10148
@story_id: 15047
@story_name: pe-review-test
@path: final/Educator
@test_case_name: pe-review-test.js
@description:
@test_steps: 
^show the learn, test, review mode
-goto the link: https://demo.ucertify.com:9040/
-click on my library
-Select a course and click on manage
-select instructor tool for the selected course
-click on student view
-click on practice test
-click on custom test
-set the duration and click on create custom test

@test_data: n/a
@result: show the todo list
*/

import { Navbar, login_username, login_password, LoginPage, InstructorPage } from '../../../../page-objects/pages/index'
describe("educator page testing", function() {
    it("student view in educator", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            InstructorPage.visitEducatorDashboard(data.url);
            cy.get('[data-cy="student_view"]').contains("Student View").visit(data.url + "/?func=load_course&course_code=02pzx&class_code=05qrv");
        })
        cy.get('[data-cy="practice_tests"]').click();
        cy.get('.customIcon').click();
        cy.get('#total_time_allowed').clear();
        cy.get('#total_time_allowed').type("10");
        cy.get('#item02nHQ').type("2");
        cy.get('#item02nHq').type("2");
        cy.get('#create_custom_test').click();
    });
});