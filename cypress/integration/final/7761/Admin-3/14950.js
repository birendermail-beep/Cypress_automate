/*
@author: irfan ahmad
@master_project_id: 7761
@phase_id: 10603
@story_id: 14950
@story_name: Inside_sales_quarterly_report_goals
@path: final/7761
@test_case_name: Inside_sales_quarterly_report_goals.js
@description:
@test_steps:

^test case Inside sales area
- Visit the Inside sales page
- Click on the KPI report tab
- Click on Quarterly Report
- Quarterly Report page will open
- Click on goal to update them
- Blur the goal field
- Changes will be reflect on the table

@result:
- Records will be updated.
 */

import { Navbar, login_username, login_password, LoginPage, AdminArea, CreateArea } from '../../../../page-objects/pages/index' 
describe('Quarterly report page goal update', function() {
    it('Quarterly report page goal update', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/admin/inside_sales/instructor_portal.php')
            cy.get('[data-cy="kpi_report"]').click()
            cy.get('[data-cy="kpi_report"] + ul > li > a').contains('Quarterly Report').click()
            cy.get('#goal').clear().type('20', {force: true}).blur()
        })
    })
});