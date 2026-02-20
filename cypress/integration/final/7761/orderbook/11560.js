/*
@author: Anirudha Pratap
@master_project_id: 7761
@phase_id: 
@story_id: 11560
@story_name: Admin_orderbook_payment
@path: final/7761/orderbook
@test_case_name: Admin_orderbook_payment.js
@decription: 
@test_steps:
^Shows details of payemnt, creator and status of current user
-Select payment option from report dropdown
-In action column select Quick details from 1st row
-Click on + icon to expand details

^Click on save as and select payment status 
-Select payment option from report dropdown
-In action column select save as
-Click on Click on receive and continue

^To check current user invoice details
-Select payment option from report dropdown
-In action column select Show invoices

@test_data: 
-1- 016V3
-1- 3
-1-05csT,05n5e,06ngd

@result: record display of those user which login counter is = 3, record should be display of only 05csT,05n5e,06ngd users
*/
import { Navbar, login_username, login_password, LoginPage, InstructorPage, OrderbookPage, AdminArea } from '../../../../page-objects/pages/index'
describe('Admin Area', () => {
    beforeEach('This is login', function () {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        AdminArea.visitAdminPanel()
        AdminArea.visitOrderbook()
    })

    it("Shows details of payemnt, creator and status of current user", function () {
        cy.get('[data-cy="report_dropdown"]').click();
        cy.get('[data-cy="main_drop"]').eq(2).click();
        cy.get("#order_action").click();
        cy.get(".dropdown-item")
            .contains("Quick Detail")
            .click();
        cy.get("#accordion > div:nth-child(1)").click();
        cy.get("#accordion > div:nth-child(2)").click();
        cy.get("#accordion > div:nth-child(3)").click();
    });

    it("Click on save as and select payment status ", function () {
        cy.fixture('global').then(data => {
            cy.visit(data.url + "/admin/admin_orderbook_new.php");
            cy.get("#report_dropdown_btn").click();
            cy.get(".dropdown-item")
                .contains("Payment")
                .click();
            cy.wait(10000);
            cy.get("#order_action").click();
            cy.get(".dropdown-item")
                .contains("Save as..")
                .click({ force: true });
            cy.get("#payment_received_radio").click({ force: true });
            cy.get("#btn-update").click({ force: true });
            cy.visit(data.url + "/admin/admin_orderbook_new.php?transaction_type=n&dr_cr=1&action=clone_order&old_order=019P2&secondary_order=&from_transaction_modal=1");
        });
    });

    it("To check current user invoice details ", function () {
        cy.fixture('global').then(data => {
            cy.visit(data.url + "/admin/admin_orderbook_new.php");
        })
        cy.get("#report_dropdown_btn").click();
        cy.get(".dropdown-item")
            .contains("Payment")
            .click();
        cy.get(".dropdown-item")
            .contains("Show Invoices")
            .click({ force: true });
    });
});