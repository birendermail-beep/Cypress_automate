/*
@author: Sundaram Tripathi
@master_project_id: 7761
@phase_id: 
@Story_Id: 15065
@story_name: admin_orderbook_pivot_export
@path: final/7761/Orderbook
@Test_Case_Name: admin_orderbook_pivot_export.js
@description: Search pivot data and export that
@test_steps: 
^Test case of pivot export
- visit on admin area.
- 2- successfully open the admin page
- Click on the "Manage orderbook"
- After that click on the "Report" button.
- After that click on the "Advance search" option.
- Go to report section and select "pivot report".
- Select dropdwon list according to your need. after that press the "search" button.
- Successfully show the details according to pivot.
- After that show the data then click on the "Export" button.

@test_data:
- Report : "pivot report"
- Type : "order
- Status : "pending/Draft
- Row : "Course"
- Report Type : "Yearly"
- Select the "created on" : ""This month"".
- press the search button.
-Click on the "Export" button"

@result: Successfully pivot data has exported
*/

import { Navbar, login_username, login_password, LoginPage, InstructorPage, OrderbookPage, AdminArea } from '../../../../page-objects/pages/index' 
describe('Orderbook Area', function() {

    it('Show the pivot record and exoprt data', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            AdminArea.visitAdminArea(data.url);
            cy.get(':nth-child(2) > [data-cy=start_button] > .btn').click({ force: true });
            cy.get('[data-cy=report_dropdown]').click({ force: true });
            cy.get('[data-cy=advance_search]').click({ force: true });
            cy.get('[data-cy=report_select]').select('Pivot Report', { force: true });
            cy.get('[data-cy=load_button]').click({ force: true });
            cy.get('[data-cy=transaction_select]').select('Order', { force: true });
            cy.get('[data-cy=transaction_status]').select('Pending/Draft', { force: true });
            cy.get('[data-cy=data_import_select]').select('Course', { force: true });
            cy.get('[data-cy=report_dur_select]').select('Yearly', { force: true });
            cy.get('#enrollment_dur_type').select('This Month', { force: true });
            cy.get('[data-cy=advance_sbt_btn]').click({ force: true });
            cy.get('#download_list_dropdown').click({ force: true });
            cy.get('#xls_menu').click({ force: true });
            cy.get('[data-cy=download_list_dropdown]').click({ force: true });
            cy.get('#xls_menu').click({ force: true });
            cy.get('#download_report_link_csv').click({ force: true });
        })
    })
})