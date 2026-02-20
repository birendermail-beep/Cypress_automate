/*
@author: Anirudha Pratap
@master_project_id: 2444
@phase_id: 10148
@story_id: 14831
@story_name: assessments_reports_search_content
@path: final/Admin
@test_case_name: assessments_reports_search_content.js
@description:
@test_steps:
^new assessment report area
-goto to the link https://demo.ucertify.com:9040/admin/
-click on reports
-click on new assessment area
-click on standard report
-enter the search
-click on advance search

@test_data: n/a

@result: open a dialog box for advance search
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea } from '../../../../page-objects/pages/index' 
describe("admin page testing", function() {
    it("assessment report in admin area", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            AdminArea.visitAdminArea(data.url)
        })
        cy.get('#reports_tab').click();
        cy.get(".chapter-link").contains("New Assessment Report").click();
        cy.get('.input-group-append > .dropdown-toggle').click();
        cy.get('#assessment_advance_search').click();
    });
});