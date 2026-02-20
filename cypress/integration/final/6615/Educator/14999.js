/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id: 10148
@story_id: 14999
@story_name: educator_customize
@path: final/Educator
@test_case_name: educator_customize.js
@description: educator_customize
@test_steps:
^open customize area
-goto the link: https://demo.ucertify.com:9040/
-click on my library
-Select a course and click on manage
-select instructor tool for the selected course
-click on design tab
-click on lecture plan

@test_data: n/a
@result: open lecture plan page to add lecture plan
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe("educator page testing", function() {
    it("open customize area", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        cy.get('[data-cy="mylibrary"]').click({ force: true })
        cy.get('[data-cy="searchbox"]').clear().type('ICT', { force: true })
        cy.get('[crn="ICT-word-processing-test"]').contains('Manage').click({ force: true })
        cy.get('.course_title').contains('ICT Word Processing Essentials Test').should('be.visible')
        cy.get('[data-cy=desk_copy] > .d-inline-block').click({ force: true })
        cy.get('[data-cy=manage_as_instructor]').click()
        cy.get('[data-cy=educator_design]').click()
        cy.get('[data-cy=lecture_plan]').click({ force: true });
    });
});