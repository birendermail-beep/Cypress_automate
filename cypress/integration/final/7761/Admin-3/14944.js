/*
@author: irfan ahmad
@master_project_id: 7761
@phase_id: 10360
@story_id: 14944
@story_name: Inside_sales_new_kpi_report
@path: final/7761
@test_case_name: Inside_sales_new_kpi_report.js
@description:
@test_steps:

^test case Communication area
- Visit the Inside sales area
- Click on the New KPI report tab
- Click Search dropdown button
- Click Advance Search button
- Select Team as a Sales
- Select Custom option in Date
- Choose Start Date
- Choose End Date
- Click on Search button
- Result will be visible on the page

@result:
- Search result will be show on the page.
 */

import { Navbar, login_username, login_password, LoginPage, AdminArea, CreateArea } from '../../../../page-objects/pages/index' 
describe('Inside sales, New Kpi report', function() {
    it('Inside sales, New Kpi report', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/admin/inside_sales/kpi.php')
            cy.get('[data-cy="kpi_report"]').click()
            cy.get('[data-cy="new_kpi_report"]').click()
            cy.get('#kpi_find_search + .btn').click()
            cy.get('[data-target="#advance_search_modal"]').click()
            cy.get('#search_team').select('2', {force: true})
            cy.get('#date_interval_list').select('custom', {force: true})
            cy.get('#search_sdt').click()
            cy.get('tbody > :nth-child(1) > :nth-child(3)').click({force: true})
            cy.get('#search_edt').click()
            cy.get('tbody > :nth-child(2) > :nth-child(5)').click({force: true})
            cy.get('#search_kpi_detail').click()
        })
    })
});