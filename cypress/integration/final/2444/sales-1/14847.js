/*
@author: Anirudha Pratap
@master_project_id: 2444
@phase_id: 10148
@story_id: 14847
@story_name: inside_sales_org_merge_table
@path: final/Admin
@test_case_name: inside_sales_org_merge_table.js
@description: instructor portal area
@test_steps:
^show the compare of two organisation
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

@result: show the compare of two organisation
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea } from '../../../../page-objects/pages/index' 
describe("admin page testing", function() {
    it("show the compare of two organisation", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            AdminArea.visitAdminArea(data.url)
            cy.get('#others_tab').click();
            cy.get(".chapter-link").contains("Inside Sales").click({ force: true });
            cy.visit(data.url + "/admin/inside_sales_org/inside_sales_org.php?action=list_view");
            cy.get('.selected > :nth-child(6) > .dropdown > .btn').click();
            cy.visit(data.url + "/admin/inside_sales_org/inside_sales_org.php?action=merge_org&org_id=00Wlf");
        })
        cy.get('#secondary_org_id_open').click();
        cy.wait(2000);
        cy.get('.org-details > .org-type > :nth-child(1) > [data-original-title="org name"]').contains("uCertify").click({ force: true });
        cy.get('#select_org_btn').click();
        cy.get('#compare_org_button').click();
    });
});