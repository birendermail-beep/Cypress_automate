/*
@author: Anirudha Pratap
@master_project_id: 2444
@phase_id: 10148
@story_id: 14846
@story_name: inside_sales_comment
@path: final/Admin
@test_case_name: inside_sales_comment.js
@description: instructor portal area
@test_steps:
^comment on meeting scheduling
-goto to the link: https://demo.ucertify.com:9040/admin/
-click on others tab.
-click on inside sales.
-enter the email id and click search icon.
-click on setting icon. 
-click on edit option.
-click on meetings/extra tab
-select an option
-write meeting comment
-click on save comment

@test_data:
-email: testbot@ucertify.com

@result: comment on meeting scheduling
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea } from '../../../../page-objects/pages/index' 
describe("admin page testing", function() {
    it("inside sales in admin area", function() {
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
        cy.get('[data-cy="action_sales"]').click()
        LoginPage.visitOnClick('[data-cy="edit_opt"]');
        cy.wait(2000);
        cy.get("#meetings").check({ force: true });
        cy.get("#meetings_details").select('15 Min', { force: true });
        cy.get('#meetings_div > .mt-1 > .comment_module_text').type("testing");
        cy.get('#save_new_comment').click();
    });
});