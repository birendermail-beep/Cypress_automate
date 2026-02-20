/*
@author: Anirudha Pratap
@master_project_id: 2444
@phase_id: 10148
@story_id: 14833
@story_name: communique_report
@path: final/Admin
@test_case_name: communique_report.js
@description:
@test_steps:
^show the communique report
-goto to the link https://demo.ucertify.com:9040/admin/communique_report.php

@test_data: n/a

@result: show the communique report
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea } from '../../../../page-objects/pages/index' 
describe("admin page testing", function() {
    it("communique_report in educator", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/admin/communique_report.php");
        })
    });
});