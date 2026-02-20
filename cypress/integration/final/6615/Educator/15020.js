/*
@author: Avinash pandey
@master_project_id: 6615
@phase_id: 10148
@story_id: 15020
@story_name: educator_start_analysis
@path: final/Educator
@test_case_name: educator_start_analysis.js
@description:
@test_steps:
^test case Instructor area
-visit the website
-Visit the url.
-Enter the email and click on submit button.
@test_data: n/a
@result: User detail will open for analysis.
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe("test session user analysis", function() {
    it("start analysis report", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.get('[data-cy="mylibrary"]').click()
            cy.get('[data-cy="searchbox"]').clear({ force: true }).type('APP-Training', { force: true })
            cy.get('[data-cy="manage"]').eq(0).click()
            cy.visit(data.url + "/educator/test_session.php?func=analyse");
            cy.get('#user_emails').clear({ force: true }).type(data.auditor_email[9], { force: true })
            cy.get('.check_validation').click({ force: true })
        })
    });
});