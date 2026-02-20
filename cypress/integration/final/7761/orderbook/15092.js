/*
@author: Sundaram Tripathi
@master_project_id: 7761
@phase_id: 
@story_id: 15092
@story_name: dashboard_new_advance
@path: final/Dump_Test_Automation
@Test_Case_Name: dashboard_new_advance.js
@description: 
@test_steps: 
^Test case of dashboard_new_advance.js
-Click on this link: https://www.jigyaasa.info/admin
- After that click on the ""Manage Orderbook"".
- Click on the setting icon any record after that click on the ""Billing Mangement"".
- Successfully show the billing details.
- Click on the ""Search"" button an choose advance search option.

@test_data: N/A

@result: successfully show the advance search option.
*/

import { Navbar, login_username, login_password, LoginPage, InstructorPage, OrderbookPage, AdminArea } from '../../../../page-objects/pages/index' 
describe('Orderbook Area', function() {
    beforeEach('this is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/admin");

        })
    })
    it('Orderbook Advance Search Box', function() {
        cy.get(':nth-child(2) > [data-cy=start_button] > .btn').click({ force: true })
        cy.get('[data-cy="order_btn"]').eq(0).click({ force: true });
        cy.get('[data-cy=billing_management_cy]').eq(0).click({ force: true });
    })
    it('Orderbook Advance Search Box2', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/admin/dashboard_new.php');
        })
    })
})