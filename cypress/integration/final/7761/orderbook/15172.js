/*
@author: Sundaram Tripathi
@master_project_id: 7761
@phase_id: 
@story_id: 15172
@story_name: invoice_print
@path: final/Dump_Test_Automation
@test_case_name: invoice_print.js
@description: In orderbook and open invoice with email
@test_steps: 
^test case of orderbook click button
-Visit to website
-Login to ucertify.com
-Visit the admin
-Click the Manage Orderbook.
-Successfully show the orderbook page
-And click on the "Report" button and select "Invoice" option
-Successfully show the invoice details
-Choose any one user and go to action and click on the setting icon
-Click on the "Send Email" option
^test case of orderbook visit page
-visit the invoice email page
@test_data: N/A
@result: Successfully show the invoice details with mail
*/

import { Navbar, login_username, login_password, LoginPage, InstructorPage, OrderbookPage, AdminArea } from '../../../../page-objects/pages/index' 
describe('Orderbook Area', function() {

    beforeEach('Invoice print in orderbook', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            AdminArea.visitAdminArea(data.url);
            OrderbookPage.manageOrderBook();
        })
    })

    it('Click Send Email Option', function() {
        cy.get('[data-cy=email_details]').eq(8).click({ force: true });
    })

    it('Visit Email Page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/admin/admin_orderbook_new.php?action=getinvoice&email=tm080@bncollege.com&transaction_guid=01GME&send_invoice=1&transaction_type=v');
        })
    })


})