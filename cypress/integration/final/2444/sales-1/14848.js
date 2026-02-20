/*
@author: Anirudha Pratap
@master_project_id: 2444
@phase_id: 10148
@story_id: 14848
@story_name: inside_sales_org_new
@path: final/Admin
@test_case_name: inside_sales_org_new.js
@description: instructor portal area
@test_steps:
^show the detail of organisation
-goto to the link: https://demo.ucertify.com:9040/admin/
-click on others tab.
-click on inside sales.
-click on inside sales org
-click on setting icon
-click on search edit

@test_data: n/a

@result: show the detail of organisation
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea } from '../../../../page-objects/pages/index' 
describe("admin page testing", function() {
    it("show the detail of organisation", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            AdminArea.visitAdminArea(data.url)
            cy.get('#others_tab').click();
            cy.get(".chapter-link").contains("Inside Sales").click({ force: true });
            cy.visit(data.url + "/admin/inside_sales_org/inside_sales_org.php?action=list_view");
            cy.get('.selected > :nth-child(6) > .dropdown > .btn').click();
            cy.visit(data.url + "/admin/inside_sales_org/inside_sales_org.php?action=grid_view&org_id=00Wlf&page=1");
        })
    });
});