/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id: 10148
@story_id: 15031
@story_name: educator_test_session_side
@path: final/Educator
@test_case_name: educator_test_session_side.js
@description:
@test_steps:
^test case Instructor area
-visit the website
-click on my library
-Select a course and click on manage
-select instructor tool for the selected course
-click on track
-click on more
-click on analytics
-click on test analytics
-click on test type and select Lab
-click on any heading
-click on side pane

^download the best score report
-goto the link: https://demo.ucertify.com:9040/
-click on my library
-Select a course and click on manage
-select instructor tool for the selected course
-click on track
-click on more
-click on analytics
-click on test analytics
-click on export 

@test_data: n/a
@result: show side pane, download report.
*/

import { Navbar, login_username, login_password, LoginPage, InstructorPage } from '../../../../page-objects/pages/index'
describe("educator page testing", function() {
    beforeEach('This is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            InstructorPage.visitEducatorDashboard(data.url)
        })
    })
    it("track area in educator", function() {
        cy.get(".nav-item").contains("Track").click();
        cy.get('[aria-label="Analytics"]').contains("Analytics").click();
        cy.get(".dropdown-item").contains("Test Analytics").click();
        cy.get("#test_type").select("Lab", { force: true });
        cy.get('tbody > :nth-child(1) > :nth-child(2) > a').click();
        cy.get('#btntxt').click();
    });
    it("download report", function() {
        cy.get(".nav-item").contains("Track").click();
        cy.get('[aria-label="Analytics"]').contains("Analytics").click();
        cy.get(".dropdown-item").contains("Test Analytics").click({ force: true });
        cy.get('[id="test_type"]').select('Lab',{force:true});
        cy.get('#download_report').click();
    });
});