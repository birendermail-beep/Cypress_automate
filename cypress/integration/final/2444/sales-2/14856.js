/*
@author: Anirudha Pratap
@master_project_id: 2444
@phase_id: 10148
@story_id: 14856
@story_name: survey_track_full
@path: final/Admin
@test_case_name: survey_track_full.js
@description: survey track report
@test_steps:
^show the survey track report
-goto to the link: http://ucertify.com/admin/admin-survey-report.php

@test_data: n/a

@result: show the survey track report
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea } from '../../../../page-objects/pages/index' 
describe("admin page testing", function() {
    it("show the survey track report", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            AdminArea.visitAdminArea(data.url)
            cy.visit(data.url + "/admin/admin-survey-report.php");
        })
    });
});