/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id: 10148
@story_id: 14994
@story_name: educator_customize_tables_assessment
@path: final/Educator
@test_case_name: educator_customize_tables_assessment.js
@description: educator_customize_tables_assessment
@test_steps:
^Design area in educator 1
-goto the link: https://demo.ucertify.com:9040/
-click on my library
-Select a course and click on manage
-select instructor tool for the selected course
-click on track
-click on gradebook
-click on define gradebook

^Design area in educator 2
-goto the link: https://demo.ucertify.com:9040/
-click on my library
-Select a course and click on manage
-select instructor tool for the selected course
-click on track
-click on gradebook
-click on define gradebook

@test_data: n/a
@result: open customize table assessment page
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
    it("Design area in educator", function() {
        cy.get('[data-cy=track]').click();
        cy.get('[data-cy=gradebook_track_cy]').click();
        cy.get('[data-cy=gradebook__dropdown_cy]').click()
        cy.get("#define_gb").contains("Define gradebook").click();
    });
    it("Design area in educator", function() {
        cy.get('[data-cy=track]').click();
        cy.get('[data-cy=gradebook_track_cy]').click();
        cy.get('[data-cy=gradebook__dropdown_cy]').click()
        cy.get("#define_gb").contains("Define gradebook").click();
        cy.fixture('global').then(data => {
            cy.visit(data.url + "/educator/?func=customize_course&u_course_code=02sBw.03yJU&class_code=03yJU&new_design=1");
        })
        cy.get('#fixheader').should('be.visible')
    });
});