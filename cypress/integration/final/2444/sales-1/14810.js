/*
@author: Anirudha Pratap
@master_project_id: 2444
@phase_id: 10148
@story_id: 14810
@story_name: admin_invoice_list
@path: final/Admin
@test_case_name: admin_invoice_list.js
@description:
@test_steps:
^open a modal box for invoice
-goto to the link: https://demo.ucertify.com:9040/admin/
-click on manage orderbook
-click on report and select payment
-click on settings button and select edit
-click on add invoice"

@test_data: n/a

@result: open a modal box for invoice and show the invoice list
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea } from '../../../../page-objects/pages/index' 
describe("admin page testing", function() {
    it("order book in admin area", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            AdminArea.visitAdminArea(data.url)
            cy.get(".chapter-link").contains("Manage OrderBook").click({ force: true });
            cy.get('#report_dropdown_btn').click();
            cy.get(".dropdown-item").contains("Payment").click();
            cy.visit(data.url + "/admin/admin_orderbook_new.php?action=edit&transaction_guid=01cE2");
            cy.get('#payment_add_invoice').click();
        })
    });
});