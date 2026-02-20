/*
@author: Anirudha Pratap
@master_project_id: 2444
@phase_id: 10148
@story_id: 14800
@story_name: admin_certification_modal
@path: final/Admin
@test_case_name: admin_certification_modal.js
@description:
@test_steps:
^open a certificate modal box
-goto to the link :https://demo.ucertify.com:9040/admin/
-click on others tab.
-click on inside sales.
-enter the email id and click search icon.
-click on setting icon. 
-click on edit option.
-click on research tab.
-click on pencil icon.

@test_data:
-email: testbot@ucertify.com

@result: open a certificate modal box
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
        cy.get('#research_eval_tab').click();
        cy.get(':nth-child(3) > .float-right').click({ force: true });
    });
});