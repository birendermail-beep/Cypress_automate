/*
@author: Sundaram Tripathi
@master_project_id: 7761
@phase_id: N/A
@story_id: 15198
@story_name: orderitem_product_list
@path: final/Dump_Test_Automation
@test_case_name: opportunity_report_list.js
@description: In orderbook and show the quick details
@test_steps: 
^test case of inside sales kpi report
-Visit to website
-Login to ucertify.com
-Visit the admin
-Click the Manage Orderbook
-Choose any one course and click on the setting icon in under to action.
-After that click on the Quick Details
@test_data: N/A
@result: Successfully show the details
*/

import { Navbar, login_username, login_password, LoginPage, InstructorPage, OrderbookPage, AdminArea } from '../../../../page-objects/pages/index' 
describe('Orderbook area', function() {

    it('Order Item List', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/admin");
        })
        cy.get(':nth-child(2) > [data-cy=start_button] > .btn').click({ force: true });
        cy.get('[data-cy=order_btn]').eq(0).click({ force: true });
        cy.get('[data-cy=quick_link]').eq(0).click({ force: true });
    })
})