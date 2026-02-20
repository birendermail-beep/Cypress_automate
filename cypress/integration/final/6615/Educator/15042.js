/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id: 10148
@story_id: 15042
@story_name: manifest_xml,basiclti_xml
@path: final/Educator
@test_case_name: manifest_xml,basiclti_xml.js
@description:
@test_steps: 
^test case Instructor area
-visit the website
-click on my library
-Select a course and click on manage
-select instructor tool for the selected course
-click on design
-click on deep-linking
-click on lms link
-click on export cartridge
@test_data: n/a
@result: export the cartridge
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
        cy.wait(3000);
        cy.get('[intro-id="design"] > [data-cy=educator_design]').contains("Design").click();
        cy.wait(3000);
        cy.get('.icomoon-handshake-sm').click()
        cy.wait(2000);
        cy.get('.pr-md > .float-left > .check_mark_custom').click()
        cy.get('#export_cartridge').click({ force: true });
    });
});