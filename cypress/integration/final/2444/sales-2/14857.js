/*
@author: Anirudha Pratap
@master_project_id: 2444
@phase_id: 10148
@story_id: 14857
@story_name: test_track_full
@path: final/Admin
@test_case_name: test_track_full.js
@description: test item report
@test_steps:
^show the test item report
-Goto to the link https://demo.ucertify.com:9040/admin/
-Click on reports
-Click on Test Item Report"

@test_data: n/a

@result: show the test item report
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea } from '../../../../page-objects/pages/index' 
describe("admin page testing", function() {
    it("item report in admin area", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            AdminArea.visitAdminArea(data.url)
        })
        cy.get('[data-cy="reports_tab"]').click();
        cy.get('[data-cy="report_start"]').eq(2).click();
    });
});