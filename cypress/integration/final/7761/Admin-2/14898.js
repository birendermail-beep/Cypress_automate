/*
@author: irfan ahmad
@master_project_id: 7761
@phase_id: 10360
@story_id: 14898
@story_name: Inside_sales_advance_search_contacts
@path: final/7761
@test_case_name: Inside_sales_advance_search_contacts.js
@description:
@test_steps:

^test case Communication area
- Visit the Inside sales page with perticular record
- Click on My list button
- Select advnce search
- Advnce search modal open
- Select primary contact
- Choose next contact date
- Click on Search
- Result will open on the same page

@result:
- Follow Up email will be send.
 */

import { Navbar, login_username, login_password, LoginPage, AdminArea, CreateArea } from '../../../../page-objects/pages/index' 
describe('Inside sales, Send Follow Up Email', function() {
    it('Inside sales, Send Follow Up Email', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/admin/inside_sales/instructor_portal.php')
            cy.get('[data-cy="list_drop"]').click()
            cy.get('[data-cy="advance_search"]').click()
            cy.get('[data-cy="primary_contact_detail"]').select('03pFG', {force: true})
            cy.get('[data-cy=date_sdt_adv_srch]').click()
            cy.get('tbody > :nth-child(2) > :nth-child(5)').click({force: true})
            cy.get('[data-cy=submit_btn_tab]').click()
        })
    })
});