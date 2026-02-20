/*
@author: irfan ahmad
@master_project_id: 7761
@phase_id: 10490
@story_id: 14942
@story_name: Inside_sales_manager_activity_report
@path: final/7761
@test_case_name: Inside_sales_manager_activity_report.js
@description:
@test_steps:

^test case Activity report area
- Visit the Inside sales area
- Click on the KPI report tab
- Select activity report option
- Check activity report page
- Select team type
- Choose manager name
- Record will be shown on the apge

@result:
- Manger activity report visible.
 */

import { Navbar, login_username, login_password, LoginPage, AdminArea, CreateArea } from '../../../../page-objects/pages/index' 
describe('Inside sales, Manager activity report', function() {
    it('Inside sales, Manager activity report', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/admin/inside_sales/instructor_portal.php')
            cy.get('[data-cy="kpi_report"]').click()
            cy.get('#groups_list > li > a').contains('Sales Activity Report', {force: true})
            cy.visit(data.url + '/admin/inside_sales/sales_leaderboard.php?action=activity_report&search_team=2&nav_by=1')
            cy.get('#team').select('5', {force: true})
            cy.get('[data-cy="mem_select"]').select('03pFG', {force: true})
            cy.get('#activity_report_btn').click()
        })
    })
});