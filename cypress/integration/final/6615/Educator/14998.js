/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id: 10148
@story_id: 14998
@story_name: educator_customize_tables_virtual-lab
@path: final/Educator
@test_case_name: educator_customize_tables_virtual-lab.js
@description: educator_customize_tables_virtual-lab
@test_steps:
^show the data of virtual lab
-goto the link: https://demo.ucertify.com:9040/
-click on my library
-Select a course and click on manage
-select instructor tool for the selected course
-click on design dropdown
-choose option design
-click on virtual tab

@test_data: n/a
@result: show the data of virtual lab
*/

import { Navbar, login_username, login_password, LoginPage, InstructorPage } from '../../../../page-objects/pages/index'
describe("educator page testing", function() {
    it("Design area in educator", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            InstructorPage.visitEducatorDashboard(data.url)
        })
        cy.wait(2000);
        cy.get('[data-cy=educator_design]').click();
        cy.wait(2000);
        cy.get('[href="#virtual_lab_settings"]').click();
        cy.get('#virtual_lab_settings').should('be.visible')
    });
});