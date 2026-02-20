/*
@author: Anirudha Pratap
@master_project_id: 2444
@phase_id: 10148
@story_id: 14814
@story_name: admin_mentoring_report
@path: final/Admin
@test_case_name: admin_mentoring_report.js
@description:
@test_steps:
^mentoring report area
1)goto the link
https://demo.ucertify.com:9040/admin/dashboard.php?userwise_mentoring=1

@test_data: 
-

@result: open mentoring report
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea } from '../../../../page-objects/pages/index' 
describe("admin page testing", function() {
    it("mentoring report in admin area", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/admin/dashboard.php?userwise_mentoring=1");
        })
    });
});