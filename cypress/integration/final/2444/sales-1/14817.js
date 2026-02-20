/*
@author: Anirudha Pratap
@master_project_id: 2444
@phase_id: 10148
@story_id: 14817
@story_name: admin_orderbook_edit_new
@path: final/Admin
@test_case_name: admin_orderbook_edit_new.js
@description:
@test_steps:
^order book edit page open
-goto to the link: https://demo.ucertify.com:9040/admin/
-click on manage orderbook
-click on report and select Quotation
-click on settings button 
-click on edit

^order book edit page open 2
-goto to the link: https://demo.ucertify.com:9040/admin/
-click on manage orderbook
-click on settings button 
- click on edit

^order book edit page open 3
-goto to the link: https://demo.ucertify.com:9040/admin/
-click on manage orderbook
-click on report and select invoice
-click on settings button 
-click on edit

@test_data: n/a

@result: order book edit page open
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea } from '../../../../page-objects/pages/index' 
describe("admin page testing", function() {
    beforeEach('This is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            AdminArea.visitAdminArea(data.url)
        })
    })
    it("order book edit page open 1", function() {
        cy.get(".chapter-link").contains("Manage OrderBook").click({ force: true });
        cy.get('#report_dropdown_btn').click();
        cy.get(".dropdown-item").contains("Quotation").click();
        cy.fixture('global').then(data => {
            cy.visit(data.url + "/admin/admin_orderbook_new.php?action=edit&transaction_guid=01Dji");
        })
    });
    it("order book edit page open 2", function() {
        cy.get(".chapter-link").contains("Manage OrderBook").click({ force: true });
        cy.fixture('global').then(data => {
            cy.visit(data.url + "/admin/admin_orderbook_new.php?action=edit&transaction_guid=01Djy");
        });
    });
    it("order book edit page open 3", function() {
        cy.get(".chapter-link").contains("Manage OrderBook").click({ force: true });
        cy.get('#report_dropdown_btn').click();
        cy.get(".dropdown-item").contains("Invoice").click();
        cy.fixture('global').then(data => {
            cy.visit(data.url + "/admin/admin_orderbook_new.php?action=edit&transaction_guid=01Dj4");
        });
    });
});