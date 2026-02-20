/*
@author: Anirudha Pratap
@master_project_id: 2444
@phase_id: 10148
@story_id: 14798
@story_name: admin_assessment_standard_eval
@path: final/Admin
@test_case_name: admin_assessment_standard_eval.js
@description:
@test_steps:
^show the standard report
-visit the website
-Click on reports.
-Click on new assessment area.
-click on standard report
-enter the email id
-Click on search icon.

@test_data:
-email: pradeep.yadav@ucertify.com

@result: show the standard reports
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
        cy.fixture('global').then(data => {
            cy.get('#std_email').type(data.author_email[0]);
        })
        cy.get('#search_assessmnt').click();
    });
});