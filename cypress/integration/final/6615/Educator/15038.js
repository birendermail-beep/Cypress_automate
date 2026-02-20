/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id: 10148
@story_id: 15038
@story_name: educator-advance-filter
@path: final/Educator
@test_case_name: educator-advance-filter.js
@description:
@test_steps:
^test case Instructor area
-visit the website
-click on my library
-Select a course and click on manage
-click on open for the selected course
-click on manage as instructor
-click on track
-click on advance search
@test_data: n/a
@result: show the advance search dialog box
*/

import { Navbar, login_username, login_password, LoginPage, InstructorPage } from '../../../../page-objects/pages/index'
describe("educator page testing", function() {
    it("advance search", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            InstructorPage.visitEducatorDashboard(data.url)
        })
        cy.get('[data-cy=track]').click({ force: true });
        cy.wait(2000)
        cy.get('#advance-search').click({ force: true });
    });
});