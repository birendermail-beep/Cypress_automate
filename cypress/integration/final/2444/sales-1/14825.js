/*
@author: Anirudha Pratap
@master_project_id: 2444
@phase_id: 10148
@story_id: 14825
@story_name: assessment_order_report_download
@path: final/Admin
@test_case_name: assessment_order_report_download.js
@description:
@test_steps:
^admin order report
-goto to the link: https://demo.ucertify.com:9040/admin/admin-order-report.php
-click on download

@test_data: n/a

@result: admin order report
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea } from '../../../../page-objects/pages/index' 
describe("admin page testing", function() {
    it("admin order report", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/admin/admin-order-report.php");
            cy.get('.ml-2 > .btn').click();
        })
    });
});