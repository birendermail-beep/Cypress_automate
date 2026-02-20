/*
@author: Anirudha Pratap
@master_project_id: 2444
@phase_id: 10148
@story_id: 14821
@story_name: admin_report_item_wise_new
@path: final/Admin
@test_case_name: admin_report_item_wise_new.js
@description:
@test_steps:
^show the wgu python report
-goto to the link:https://www.ucertify.com/admin/wgu_python_report.php

@test_data: n/a

@result: show the wgu python report
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea } from '../../../../page-objects/pages/index' 
describe("admin page testing", function() {
    it("show the wgu python report", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/admin/wgu_python_report.php");
        })
    });
});