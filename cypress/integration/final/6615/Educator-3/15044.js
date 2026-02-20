/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id: 10148
@story_id: 15044
@story_name: my_item_sidepane
@path: final/Educator
@test_case_name: my_item_sidepane.js
@description:
@test_steps: 
^test case Instructor area
-visit the website
-click on my library
-Select a course and click on manage
-select open for the selected course
-click on chapters & lessons
-click on any topics in toc
-click on side pane icon
@test_data: n/a
@result: open all tabs and export of educator page
*/

import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
describe("educator page testing", function() {
    it("side pane", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            StudentPage.visitLOAplusCompleteCourse(data)
        })
        cy.get('[data-cy=chapters]').click({ force: true });
        cy.get('[data-cy=toc_chapters]').eq(1).click({ force: true });
        cy.get('#btntxt').click({ force: true });
    });
});