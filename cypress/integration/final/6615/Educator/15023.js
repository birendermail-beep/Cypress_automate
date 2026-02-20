/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id: 10148
@story_id: 15023
@story_name: educator_students_study_planner
@path: final/Educator
@test_case_name: educator_students_study_planner.js
@description:
@test_steps:
^show the study planner details
-goto the link https://demo.ucertify.com:9040/
-click on my library
-Select a course and click on manage
-select instructor tool for the selected course
-click on track
-click on more
-click on study plan

@test_data: n/a
@result: show the test mode data
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe("educator page testing", function() {
    it("track area in educator", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/educator/?func=class_edit&u_course_code=02sBw.03yJU");
        })
        cy.get(".nav-item").contains("Track").click();
        cy.get(':nth-child(9) > .dropdown-toggle').click();
        cy.get('.dropdown-item').contains("Study Plan").click({ force: true });
        cy.get('[user_guid="05DK4"]').click();
    });
});