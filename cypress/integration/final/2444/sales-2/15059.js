/*
@author: Sundaram Tripathi
@master_project_id: 2444
@phase_id: 
@Story_Id: 15059
@story_name: account manager dashboard
@path: final/2444
@Test_Case_Name: account_manager_dashboard
@description: Open the inside sales and go to the account manager dashboard
@test_steps: 
^Test case of Account Manager Dashboard pag page
- visit admin area
-Successfully open the admin area
- Click on the "Others" tab
- Click on the "Start" button in the "Inside Sales" option.
- Successfully open inside sales page
- Click on the "KPI Report" dropdown button
- After that select the "Account Manager Dashboard"
- Successfully open Account Manager Dashboard page

@test_data: n/a
@result: Successfully open the account manager dashboard
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea } from '../../../../page-objects/pages/index' 
describe('Admin Area', function() {
    it('Inside Sales Account Manager Dashboard', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            AdminArea.visitAdminArea(data.url)
        })
        AdminArea.visitOrderbookOtherTab();
        cy.get('.marker > :nth-child(3) > [data-cy=other_start]').click({ force: true });
        cy.get('[data-cy=kpi_report]').click({ force: true });
        LoginPage.visitOnClick('[data-cy=account_manager_board]');
    })
})