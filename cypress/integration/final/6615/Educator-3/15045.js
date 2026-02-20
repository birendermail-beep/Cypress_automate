/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id: 10148
@story_id: 15045
@story_name: pe-educator_test_history
@path: final/Educator
@test_case_name: pe-educator_test_history.js
@description:
@test_steps: 
^test history show
-goto the link: https://demo.ucertify.com:9040/
-click on my library
-Select a course and click on manage
-select instructor tool for the selected course
-click on track
-click on practice
-click on score of pre 

@test_data: n/a
@result: show the history of performance 
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe("educator page testing", function() {
    it("track area in educator", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/educator/?func=class_edit&u_course_code=03Hy5.05SZh");
        })
        cy.get('[data-cy=track]').click()
        cy.get('[aria-label="Practice"]').contains("Practice").click();
        cy.get('[guid_stud="0"] > [test_name="Pre Assessment"]').click();
    });
});