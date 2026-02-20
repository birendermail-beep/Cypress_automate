/*
@author: Anirudha Pratap
@master_project_id: 2444
@phase_id: 10148
@story_id: 14832
@story_name: audit_log_list
@path: final/Admin
@test_case_name: audit_log_list.js
@description:
@test_steps:
^audit log list
-goto to the link https://demo.ucertify.com:9040/admin/audit_log.php

@test_data: n/a

@result: show the details of audit log list 
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea } from '../../../../page-objects/pages/index' 
describe("admin page testing", function() {
    it("audit_log_list in educator", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/admin/audit_log.php");
        })
        cy.get(':nth-child(1) > .span0 > .dropdown > .btn').click();
        cy.get(':nth-child(1) > .span0 > .dropdown > .dropdown-menu > .ui-draggable > .dropdown-item').click();
    });
});