/*
@author: Anirudha Pratap
@master_project_id: 2444
@phase_id: 10148
@story_id: 
@story_name: admin_order_diagonastic_help
@path: final/Admin
@test_case_name: admin_order_diagonastic_help.js
@description:
@test_steps:
^open a diagonastic help page
-goto to the link: https://demo.ucertify.com:9040/admin/
- click on manage orderbook
- click on report and select advance search
- click on report option
- select diagonastic report
- click on search
- click on help icon"

@test_data: n/a

@result: open a diagonastic help page
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea } from '../../../../page-objects/pages/index' 
describe("admin page testing", function() {
    it("open a diagonastic help page", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            AdminArea.visitAdminArea(data.url)
            cy.get(".chapter-link").contains("Manage OrderBook").click({ force: true });
            cy.get('#report_dropdown_btn').click();
            cy.get(".dropdown-item").contains("Advance Search").click();
            cy.get("#report_type").select('Diagnostic Report', { force: true });
            cy.get('#advance_submit_btn').click();
            cy.wait(2000);
            cy.visit(data.url + "/admin/admin_orderbook_new.php?diagnostic_help=1");
        })
    });
});