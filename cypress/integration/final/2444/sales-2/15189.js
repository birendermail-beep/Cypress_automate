/*
@author: Sundaram Tripathi
@master_project_id: 2444
@phase_id: 
@story_id: 15189
@story_name: order_enrollment_report
@path: final/Dump_Test_Automation
@test_case_name: order_enrollment_report.js
@description: 
@test steps: 
^open orderbook
-Click on this link: https://www.jigyaasa.info/admin/admin_orderbook_new.php
-Go to the action area and click on the setting icon.
-Click on the ""Action"" dropdown button. 
-After that select the ""voucher Report"" option.
-Show the ""Transaction Id"" page.

@test_data: 

@result: Transaction id page should be show
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea } from '../../../../page-objects/pages/index'
describe('Admin Area', function() {

    it('Smart Search in inside sales', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            AdminArea.visitAdminArea(data.url);
            cy.get(':nth-child(2) > [data-cy=start_button] > .btn').click({ force: true });
            cy.get(' [data-cy=order_btn]').eq(0).click({ force: true });
            cy.visit(data.url + '/admin/admin_orderbook_new.php?action=get_enrollment_report&transaction_guid=01gUi');
        });
    })
})