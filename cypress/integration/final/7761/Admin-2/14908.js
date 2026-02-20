/*
@author: irfan ahmad
@master_project_id: 7761
@phase_id: 10603
@story_id: 14908
@story_name: Inside sales checklist data verification
@path: final/7761
@test_case_name: Inside_sales_checklist_data_verification.js
@description:
@test_steps:

^test case Inside sales area
- Visit the Checklist data page
- Click on the team member to select any
- Click on Submit
- Click on any number to see the details
- See the records according to the number.

@result:
- Records will be visible as per data.
 */

import { Navbar, login_username, login_password, LoginPage, AdminArea, CreateArea } from '../../../../page-objects/pages/index' 
describe('Check list data verification', function() {
    it('Check list data verification', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/admin/inside_sales/kpi.php?action=checklist_report')
            cy.get('#team_mem').select('03pFG', {force: true})
            cy.get('#activity_report_btn').click()
            cy.get(':nth-child(1) > :nth-child(2) > [data-cy=check_list_contact]').click()
            cy.visit(data.url + '/admin/inside_sales/instructor_portal.php?primary_contact[]=03pFG&stage[]=0&advance_search=inside_sale&search_tab=Inside+Sale')
        })
    })
});