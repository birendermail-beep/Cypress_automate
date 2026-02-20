/*
@author: Anirudha Pratap
@master_project_id: 2444
@phase_id: 10148
@story_id: 14849
@story_name: instructor_portal
@path: final/Admin
@test_case_name: instructor_portal.js
@description: instructor portal area
@test_steps:
^show the record of user 1
-goto to the link: https://demo.ucertify.com:9040/admin/
-click on others tab.
-click on inside sales.
-enter the email.
-click on search Icon.

@test_data: n/a

@result: show the record of user
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea } from '../../../../page-objects/pages/index' 
describe("admin page testing", function() {
    it("show the record of user", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            AdminArea.visitAdminArea(data.url)
        })
        cy.get('#others_tab').click();
        cy.get(".chapter-link").contains("Inside Sales").click({ force: true });
        cy.get('#search_text').type(login_username);
        cy.get('#search_guid_basis').click();
    });
});