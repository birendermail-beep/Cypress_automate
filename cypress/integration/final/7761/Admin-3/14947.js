/*
@author: irfan ahmad
@master_project_id: 7761
@phase_id: 10360
@story_id: 14947
@story_name: Inside_sales_opportunities_po_number
@path: final/7761
@test_case_name: Inside_sales_opportunities_po_number.js
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
- Update PO numbere
- Click on Save button

@result:
- Update PO number successfully.
 */

import { Navbar, login_username, login_password, LoginPage, AdminArea, CreateArea } from '../../../../page-objects/pages/index' 
describe('Inside sales opportunity, update PO number', function() {
    it('Inside sales opportunity, update PO number', function() {
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
            cy.get('[data-cy="po_textbox"]').clear().type('123456', {force: true})
            cy.get('[data-cy="save_oppo"]').click({force: true})
        })
    })
});