/*
@author: Anirudha Pratap
@master_project_id: 2444
@phase_id: 10148
@story_id: 
@story_name: admin_wgu_assessments_advance_search
@path: final/Admin
@test_case_name: admin_wgu_assessments_advance_search.js
@description:
@test_steps:
^show the wgu report
-goto to the link: https://demo.ucertify.com:9040/custom/wgu_engagement.php
-enter the email
- click on search

@test_data: 
-email: sachin.yadav@ucertify.com

@result: show the wgu report
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea } from '../../../../page-objects/pages/index' 
describe("admin page testing", function() {
    it("show the wgu report", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/custom/wgu_engagement.php");
        })
        cy.fixture('global').then(data => {
            cy.get('#email').type(data.author_email[2]);
        })
        cy.get('#track_wgu_student').click();
    });
});