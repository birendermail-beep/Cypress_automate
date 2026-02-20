/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id: 10148
@story_id: 15051
@story_name: template_email_secret_key
@path: final/Educator
@test_case_name: template_email_secret_key.js
@description:
@test_steps:
^test case Instructor area
-visit the website
-click on select an option of D2L
-click on create a link to D2L
-click on NO
-select click here
-check both option
-click on send
@test_data: n/a
@result: open all tabs and export of educator page
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe("educator page testing", function() {
    it("lms configuration area", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.website[0])
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.website[0] + "/educator/lms-help/");
            cy.get("#lms_select").select('D2L', { force: true });
            cy.get(".toc_chapters").contains("3. Creating a link in D2L").click({ force: true });
            cy.get('#secret_no_btn').click();
            cy.get('#secret_req_btn > .outline1').click();
            cy.get('#org_url').type(data.website[0]);
        })
        cy.get(':nth-child(1) > .custom_checkbox_new > .check_mark_custom').click();
        cy.get(':nth-child(2) > .custom_checkbox_new > .check_mark_custom').click();
        cy.get('#comment_box').type("testing");
        cy.get('#ok_butn').click();
    });
});