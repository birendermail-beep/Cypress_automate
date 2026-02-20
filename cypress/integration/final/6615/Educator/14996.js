/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id: 10148
@story_id: 14996
@story_name: educator_customize_tables_learn
@path: final/Educator
@test_case_name: educator_customize_tables_learn.js
@description: educator_customize_tables_learn
@test_steps:
^Design area in educator 1
-goto the link: https://demo.ucertify.com:9040/
-click on my library
-Select a course and click on manage
-select instructor tool for the selected course
-click on track
-click on gradebook
-click on define gradebook

@test_data: n/a
@result: show the tables
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
        cy.get('[data-cy=track]').click();
        cy.get('[data-cy=gradebook_track_cy]').click();
        cy.get('[data-cy=gradebook__dropdown_cy]').click()
        cy.get("#define_gb").contains("Define gradebook").click();
        cy.get('#fixheader').should('be.visible')
    });
});