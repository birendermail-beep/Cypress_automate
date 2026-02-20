/*
@author: Anirudha Pratap
@master_project_id: 2444
@phase_id: 10148
@story_id: 14820
@story_name: admin_orderbook_voucher_detail
@path: final/Admin
@test_case_name: admin_orderbook_voucher_detail.js
@description:
@test_steps:
^open a order book page and edit the page 2
-goto to the link: https://demo.ucertify.com:9040/admin/
-click on manage orderbook
-click on settings button 
-click on edit

@test_data: n/a

@result: show the voucher detail
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea } from '../../../../page-objects/pages/index' 
describe("admin page testing", function() {
    it("open a order book page and edit the page", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            AdminArea.visitAdminArea(data.url)
            cy.get(".chapter-link").contains("Manage OrderBook").click({ force: true });
            cy.visit(data.url + "/admin/admin_orderbook_new.php?action=edit&transaction_guid=01Djy");
        })
    });
});