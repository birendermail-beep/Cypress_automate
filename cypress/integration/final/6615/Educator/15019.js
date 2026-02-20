/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id: 10148
@story_id: 15019
@story_name: educator_show_test_mode_data
@path: final/Educator
@test_case_name: educator_show_test_mode_data.js
@description:
@test_steps:
^test mode data
-goto the link: https://demo.ucertify.com:9040/custom/wgu_engagement.php
-write email
-click on submit

@test_data: n/a
@result: show the test mode data
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe("educator page testing", function() {
    it("wgu area in educator", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/custom/wgu_engagement.php");
            cy.get("#email").type(data.author_email[0]);
        })
        cy.get('#track_wgu_student').click();
    });
});