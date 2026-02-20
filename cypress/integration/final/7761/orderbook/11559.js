/*
@author: Anirudha Pratap
@master_project_id: 7761
@phase_id: 
@story_id: 11559
@story_name: Admin_orderbook_invoice
@path: final/7761/orderbook
@test_case_name: Admin_orderbook_invoice.js
@decription: 
@test_steps:
^To check given/received payment click on paymnet recevied/given option
-In Payment Reference Number  select check
-Enter Correct Payment Reference Number 
-Select Payment date  and in option list select recevied 
-Select payment time period
-Enter USD amount and deduction and select full option
-Enter Additional Payment Reference Number
-Enter first and last name
-Enter email address
-Enter comment and reason for deduction
-Click on add invoice

^To check payment details 
-Click on payment details

^To check last email  and details of mail sent by manager to user / customer
-Click on View last email
-A modal will be opne
-Click on plus icon to read  mail content
-Click on follow up date to check date 

^Send invoice details to customer
-enter user email(in case of testing otherwise it takes current by defaults)
-Choose template
-Select invoice  from option
-It takes subject after you select option by default
-Write comment if you want to attach any comment
-Click on check box
-Click on send

@test_data: n/a

@result: -Record of current date should be display -Invoice details of customers will be display
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
    it("Invoice search modal will be open", function () {
        cy.get('[data-cy="report_dropdown"]').click();
        cy.get('[data-cy="main_drop"]').eq(1).click();
        cy.wait(10000);
        cy.get('[data-cy="order_btn"]').eq(0).click();
        cy.wait(5000)
        cy.get('[data-cy="payment_rcd"]').eq(0).click();
        cy.wait(15000)
        cy.get("#payment_processor").select("Check", { force: true });
        cy.get("#processor_transaction_number").type("00J39488YA462834z");
        cy.get("#child_transaction_guid").type("00J39488YA462834C");
        cy.get("#comments").type("testing");
        cy.get("#internal_comments").type("testing");
        cy.get("#payment_add_invoice").click();
    });

    it("Payment details display if exist", function () {
        cy.get('[data-cy="report_dropdown"]').click();
        cy.get('[data-cy="main_drop"]').eq(1).click();
        cy.wait(10000);
        cy.get('[data-cy="order_btn"]').eq(0).click();
        cy.wait(5000);
        cy.get('[data-cy="payment_det"]').eq(0).click();
    });

    it("Email details will be found", function () {
        cy.get('[data-cy="report_dropdown"]').click();
        cy.get('[data-cy="main_drop"]').eq(1).click();
        cy.wait(10000);
        cy.get('[data-cy="order_btn"]').eq(0).click();
        cy.wait(5000);
        cy.get('[data-cy="last_snd_email"]').eq(0).click();
    });

    it("Email will be send to users mail ", function () {
        cy.get('[data-cy="report_dropdown"]').click();
        cy.get('[data-cy="main_drop"]').eq(1).click();
        cy.wait(10000);
        cy.get('[data-cy="order_btn"]').eq(0).click();
        cy.wait(5000);
        cy.get('[data-cy="email_details"]').eq(0).contains("Send Email");
    });
});