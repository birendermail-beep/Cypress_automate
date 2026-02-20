/*
@author: Anirudha Pratap
@master_project_id: 7761
@phase_id: 10418
@story_id: 
@story_name: Invoice Management
@path: final/7761/orderbook
@test_case_name: Invoice Management
@description: 
@test_steps:
^Load Invoice Management
-Use the below URL https://www.ucertify.com/admin/invoice_report.php

^Load invoice data
-Click the Advance Search button

^Put worng data
-Put wrong data in correct format
-Click the search button

^Put correct data
-Put correct data in correct format
-Click the search button

^Load aggregate report
-Click the Action button and Aggregate Report option will be shown
-Click the Aggreate Report option 

^Load Create Invoice page
-Select or unslect the rows, on your requirement 
-Click the Action button and Create Invoice option will be shown
-Click the Create Invoice option

^Create Invoice
-Fill other details of the invoice
-Click the Submit Order button

^Diagnostic
-Click the Action button and you will see a Diagnostic option
-Click the Diagnostic option

^Edit Invoice if invoice is created
-Click the sub Action button on rows and you will see a Edit Invoice option
-Click the Edit Invoice option

^Export
-Click on Export button
-You will see two options 
-Click on both options one by one 

@test_data: 
-02Cij , 03oiL
-03Yfv , 05tzy
-03Yfv , 05tzy
-02Cij , 03oiL

@result: Orderbook Invoice will open.
*/
import { Navbar, login_username, login_password, LoginPage, InstructorPage, OrderbookPage, AdminArea } from '../../../../page-objects/pages/index' 
describe("orderbook page testing", function() {
    beforeEach("This will run before each", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/admin/invoice_report.php");
        })
    });
    //TC_IM_05, TC_IM_06, TC_IM_07
    it("Invoice Management", function() {
            cy.get('[data-cy=adv_search]').click({ force: true })
            cy.get('[data-cy=get_invoice_cy]').type('06OEg,02C7j', { force: true })
            cy.get('[data-cy=submit_form_cy]').click({ force: true })
        })
        //TC_IM_08, TC_IM_09,TC_IM_12, TC_IM_13, TC_IM_14
    it("Invoice Management 2", function() {
            cy.get('[data-cy=adv_search]').click({ force: true })
            cy.get('[data-cy=get_invoice_cy]').type('06OEg,02pzx', { force: true })
            cy.get('[data-cy=submit_form_cy]').click({ force: true })
            cy.get('[data-cy=top_action_btn_cy]').click({ force: true })
            cy.get('[data-cy=aggregate_report_cy]').click({ force: true })
            cy.get('[data-cy=top_action_btn_cy]').click({ force: true })
            cy.get('[data-cy=diagnostic_cy]').click({ force: true })
            cy.get('[data-cy=create_invoice_cy]').click({ force: true })
            cy.get('[data-cy=export_cy]').click({ force: true })
            cy.get('[data-cy=export_xls_cy]').click({ force: true })
            cy.get('[data-cy=export_as_csv_cy]').click({ force: true })
        })
        //TC_IM_10, TC_IM_11
    it("Invoice Management 3", function() {
        cy.get('[data-cy=adv_search]').click({ force: true })
        cy.get('[data-cy=get_invoice_cy]').type('06OEg,02pzx', { force: true })
        cy.get('[data-cy=submit_form_cy]').click({ force: true })
        cy.wait(5000)
        cy.get('[data-cy=top_action_btn_cy]').click({ force: true })
        cy.get('[data-cy=aggregate_report_cy]').click({ force: true })
        cy.get('[data-cy=top_action_btn_cy]').click({ force: true })
        cy.get('[data-cy=create_invoice_cy]').click({ force: true })
    })
})