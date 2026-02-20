/*
@author: irfan ahmad
@master_project_id: 7761
@phase_id: 10360
@story_id: 14946
@story_name: Inside_sales_opportunities_fill_doc_link
@path: final/7761
@test_case_name: Inside_sales_opportunities_fill_doc_link.js
@description:
@test_steps:

^test case Communication area
- Visit the Inside sales page with perticular record
- Click on Action button
- Click on Edit option
- Edit page open
- Click on Opportunities tab
- Click on Action button
- Click on Edit
- Fill doc link in link
- Click on Save button

@result:
- Filled doc link successfully.
 */

import { Navbar, login_username, login_password, LoginPage, AdminArea, CreateArea } from '../../../../page-objects/pages/index' 
describe('Inside sales opportunity, update doc link', function() {
    it('Inside sales opportunity, update doc link', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/admin/inside_sales/instructor_portal.php?list_view=1&search_text=irfan.ahmad@ucertify.com')
            cy.get('#action_dropdown_btn').click()
            cy.get('[data-cy="edit_opt"]').click()
            cy.visit(data.url + '/admin/inside_sales/instructor_portal.php?grid=1&action=grid_view&page=1&search_user_guid=04nOf')
            cy.get('[data-cy="opportunity_tab_upper"]').click()
            cy.get('[data-cy="oppo_action"]').click()
            cy.get('[data-cy="edit_tab_connect"]').click()
            cy.get('[data-cy="doc_link_textbox"]').clear().type('docs.google.com', {force: true})
            cy.get('[data-cy="save_oppo"]').click({force: true})
        })
    })
});