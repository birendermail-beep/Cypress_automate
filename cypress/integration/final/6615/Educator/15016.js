/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id: n/a
@story_id: 15016
@story_name: educator_proctor_list
@path: final/Educator
@test_case_name: educator_proctor_list.js
@description:
@test_steps:
^test case Instructor area
-visit the website
-click on my library
-Select a course and click on manage
-select instructor tool for the selected course
-click on design
-click on post assessment
-click on setting icon
-check proctor and click on email
-give the email
@test_data: n/a
@result: open all tabs and export of educator page
*/

import { Navbar, login_username, login_password, LoginPage, InstructorPage } from '../../../../page-objects/pages/index'
describe("educator page testing", function() {
    it("design area in educator", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            InstructorPage.visitEducatorDashboard(data.url)
        })
        cy.get('[data-cy=educator_design]').click();
        cy.wait(4000);
        cy.get('#settting_t_-4').click();
        cy.wait(2000);
        cy.get('.float-left > .form-check > .ios-switch-label > .switchery').click();
        cy.wait(2000);
        cy.get('#proctor_password').click();
        cy.fixture('global').then(data => {
            cy.get('#password').type(data.author_email[2]);
        })
        cy.get('#settings-tab').click();
    });
});