/*
@author: Anirudha Pratap
@master_project_id: 2444
@phase_id: 10148
@story_id: 14822
@story_name: admin_search_section_key
@path: final/Admin
@test_case_name: admin_search_section_key.js
@description:
@test_steps:
^show the section key record
-goto to the link: https://demo.ucertify.com:9040/admin/admin_search_section_key.php
-enter the email
- click on search

@test_data: 
-email: sachin.yadav@ucertify.com

@result: show the section key record
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea } from '../../../../page-objects/pages/index' 
describe("admin page testing", function() {
    it("show the section key record", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/admin/admin_search_section_key.php");
            cy.get('#s_email').type(data.author_email[0]);
        })
        cy.get('#get_key').click();
    });
});