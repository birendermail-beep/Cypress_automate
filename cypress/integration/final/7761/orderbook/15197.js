/*
@author: Sundaram Tripathi
@master_project_id: 7761
@phase_id: N/A
@story_id: 15197
@story_name: orderbook_pivot
@path: final/Dump_Test_Automation
@test_case_name: orderbook_pivot.js
@description: Go to orderbook in advance search and search according to pivot type
@test_steps: 
^test case of inside sales kpi report
-Visit to website
-Login to ucertify.com
-Visit the admin
-Click on the Manage orderbook
-After that click on the "Report" button.
-After that click on the "Advance search" option.
-Go to report section and select "pivot report".
-Select dropdwon list according to your need 
-After that press the search button.
-Successfully show the details according to pivot
-Click on the Export button.
@test_data: 
-Report: pivot report
-Type: order
-Status: pending/Draft
-Row: Course
-Report Type: Yearly
-Select the created on :This month
-press the search button.
-Click on the Export button
@result: Successfully open the report
*/

import { Navbar, login_username, login_password, LoginPage, InstructorPage, OrderbookPage, AdminArea } from '../../../../page-objects/pages/index' 
describe('Orderbook Area', function() {

    it('Show the data type with pivot', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/admin');
        })
        cy.get(':nth-child(2) > [data-cy=start_button] > .btn').click({ force: true });
        cy.get('[data-cy=report_dropdown]').click({ force: true });
        cy.get('[data-cy=advance_search]').click({ force: true })
        cy.get('[data-cy=report_select]').select('Pivot Report', { force: true });
        cy.get('[data-cy=load_button]').click({ force: true });
        cy.get('[data-cy=data_import_select]').select('Course', { force: true });
        cy.get('[data-cy=report_dur_select]').select('Yearly', { force: true });
        cy.get('#enrollment_dur_type').select('This Month', { force: true });
        cy.get('[data-cy=advance_sbt_btn]').click({ force: true });
    })
})