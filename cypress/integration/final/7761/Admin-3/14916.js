/*
@author: irfan ahmad
@master_project_id: 7761
@phase_id: 10306
@story_id: 14916
@story_name: demo tab
@path: final/7761
@test_case_name: demo tab.js
@description:
@test_steps:

^test case Communication area
- Visit the Inside sales page with perticular record
- Click on Action button
- Click on Edit option
- Edit page will be open
- Click on Demo tab in communication area
- Select demo type deliverd
- Enter text in demo comment box
- Click to Save Comment
- Click on Save to save the page

@result:
- Demo will be set deliverd & comment saved.
 */

import { Navbar, login_username, login_password, LoginPage, AdminArea, CreateArea } from '../../../../page-objects/pages/index' 
describe('Communication area demo tab', function() {
    it('Communication area demo tab', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/admin/inside_sales/instructor_portal.php?list_view=1&search_text=ashutosh.gupta@ucertify.com')
            cy.get('#action_dropdown_btn').click()
            cy.get('[data-cy="edit_opt"]').click()
            cy.visit(data.url + '/admin/inside_sales/instructor_portal.php?grid=1&action=grid_view&page=1&search_user_guid=0488j')
            cy.get('[data-cy="demo_tab_btn"]').click()
            cy.get('[data-cy="demo_select_box"]').select('2', {force: true})
            cy.get('[data-cy="demo_cmnt_area"]').type('Testing Demo Delivered', {force: true})
            cy.get('[data-cy="save_comnt_btn"]').click({force: true})
            cy.get('[data-cy=save_comnt_btn]').click({force: true})

        })
    })
});