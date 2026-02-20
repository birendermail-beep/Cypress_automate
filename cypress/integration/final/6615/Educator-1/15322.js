/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id: 10148
@story_id: 
@story_name: report_tab
@path: final/Educator
@test_case_name: report_tab.js
@description: all report tabs showing
@test_steps: 
^all report tabs showing
-visit the website
-click on my library
-Select a course and click on manage
-select instructor tool for the selected course
-click on track 
-click on Analytics

@test_data: n/a
@result: open track area
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe("educator page testing", function() {
    it("track area", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.get('[data-cy="mylibrary"]').click({ force: true })
            cy.get('[data-cy="searchbox"]').clear().type('ICT', { force: true })
            cy.get('[crn="ICT-word-processing-test"]').contains('Manage').click({ force: true })
            cy.get('.course_title').contains('ICT Word Processing Essentials Test').should('be.visible')
            cy.get('[data-cy=desk_copy] > .d-inline-block').click({ force: true })
            cy.get('[data-cy=manage_as_instructor]').click()
        })
        cy.get('[data-cy=track]').contains("Track").click();
        cy.get('[data-cy=analytics_track_cy]').contains("Analytics").click();
    });
});