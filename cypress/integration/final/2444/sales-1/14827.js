/*
@author: Anirudha Pratap
@master_project_id: 2444
@phase_id: 10148
@story_id: 14827
@story_name: assessment-order_report
@path: final/Admin
@test_case_name: assessment-order_report.js
@description:
@test_steps:
^admin order report 2
-goto to the link: https://demo.ucertify.com:9040/admin/admin-order-report.php

@test_data: n/a

@result: admin order report
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea } from '../../../../page-objects/pages/index' 
describe("admin page testing", function() {
    it("assessment area in admin", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/admin/admin-order-report.php");
        })
    });
});