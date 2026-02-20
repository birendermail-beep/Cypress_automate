/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id: 10148
@story_id: 15049
@story_name: reading_report
@path: final/Educator
@test_case_name: reading_report.js
@description:
@test_steps: 
^test case Instructor area
-visit the website
-click on my library
-Select a course and click on manage
-select instructor tool for the selected course
-click on track 
-click on lesson
-click on reading icon
@test_data: n/a
@result: open reading report
*/

import { Navbar, login_username, login_password, LoginPage, InstructorPage } from '../../../../page-objects/pages/index'
describe("educator page testing", function() {
    it("track area in educator", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            InstructorPage.visitEducatorDashboard(data.url)
        })
        cy.get('[data-cy=track]').click({ force: true })
        cy.get('[data-cy=chapterwise_performance_track_cy]').click({ force: true })
        cy.get(':nth-child(2) > .pointer > .peity > circle').click({ force: true })
    });
});