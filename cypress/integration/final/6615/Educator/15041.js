/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id: 10148
@story_id: 15041
@story_name: lti_help_page
@path: final/Educator
@test_case_name: lti_help_page.js
@description: show the help video
@test_steps: 
^test case Instructor area
-visit the website
-click on my library
-Select a course and click on manage
-select instructor tool for the selected course
-click on design
-click on deep-linking
-click on lti help
-click on my LMS and select one
@test_data: n/a
@result: show the help video
*/
import { Navbar, login_username, login_password, LoginPage, InstructorPage } from '../../../../page-objects/pages/index'
describe("educator page testing", function() {
    it("design area in educator", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            InstructorPage.visitEducatorDashboard(data.url);
        })
        cy.get('[intro-id="design"] > [data-cy=educator_design]').contains("Design").click();
        cy.get('.icomoon-handshake-sm').click();
        cy.wait(2000);
        cy.contains('LTI Help').click({ force: true })
        cy.get("#lms_select").select('Canvas', { force: true });
    });
});