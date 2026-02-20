/*
@author: Anirudha Pratap
@master_project_id: 2444
@phase_id: 10148
@story_id: 14818
@story_name: admin_orderbook_pivot
@path: final/Admin
@test_case_name: admin_orderbook_pivot.js
@description:
@test_steps:
^show the pivot report
-goto to the link: https://demo.ucertify.com:9040/admin/
-click on manage orderbook
-click on report
-click on advance search 
-click on report and select pivot report
-click on row and select course
-click on report type and select Monthly
-click on values and select instructor
-check create on
-enter the start date and end date
-click on search

@test_data: n/a

@result: show the pivot report
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea } from '../../../../page-objects/pages/index' 
describe("admin page testing", function() {
    it("show the pivot report", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            AdminArea.visitAdminArea(data.url)
        })
        cy.get(".chapter-link").contains("Manage OrderBook").click({ force: true });
        cy.get('#report_dropdown_btn').click();
        cy.get(".dropdown-item").contains("Advance Search").click();
        cy.get("#report_type").select('Pivot Report', { force: true });
        cy.get("#data_import_by").select('Course', { force: true });
        cy.get("#report_dur_type").select('Monthly', { force: true });
        cy.get("#pivot_value").select('Instructor', { force: true });
        cy.get('#created_on').click();
        cy.get('#start_date').click();
        cy.get('.datepicker-days > .table-condensed > tbody > :nth-child(1) > :nth-child(1)').click();
        cy.get('#end_date').click();
        cy.get('.table-condensed > tbody > :nth-child(2) > :nth-child(1)').click();
        cy.get('#advance_submit_btn').click();
    });
});