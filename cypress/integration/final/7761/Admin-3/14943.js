/*
@author: irfan ahmad
@master_project_id: 7761
@phase_id: 10360
@story_id: 14943
@story_name: Inside_sales_new_activity_report
@path: final/7761
@test_case_name: Inside_sales_new_activity_report.js
@description:
@test_steps:

^test case Acitvity report area
- Visit the Inside sales area
- Click on the KPI report tab
- Select activity report option
- Check activity report page for details

@result:
- Activity report details.
 */

import { Navbar, login_username, login_password, LoginPage, AdminArea, CreateArea } from '../../../../page-objects/pages/index' 
describe('Inside sales, New activity report', function() {
    it('Inside sales, New activity report', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/admin/inside_sales/instructor_portal.php')
            cy.get('[data-cy="kpi_report"]').click()
            cy.get('#groups_list > li > a').contains('Sales Activity Report', {force: true})
            cy.visit(data.url + '/admin/inside_sales/sales_leaderboard.php?action=activity_report&search_team=2&nav_by=1')
        })
    })
});