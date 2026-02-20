/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id: 10148
@story_id: 15048
@story_name: project_property
@path: final/Educator
@test_case_name: project_property.js
@description:
@test_steps: 
^test case Instructor area
-visit the website
-click on my library
-click on my projects
-choose a course and click on author
-click on project setup
@test_data:n/a
@result: show the properties of project
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe("educator page testing", function() {
    it("my projects area in educator", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.get('[data-cy=mylibrary]').click({ force: true })
            cy.get('[data-cy=project]').click({ force: true })
            cy.get('[data-cy=author]').eq(0).click({ force: true })
        })
        cy.get('[data-original-title="Item Bank"]').click();
    });
});