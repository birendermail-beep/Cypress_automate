/*
@author: irfan ahmad
@master_project_id: 7761
@phase_id: 10603
@story_id: 14921
@story_name: meetings_extra
@path: final/7761
@test_case_name: meetings_extra.js
@description:
@test_steps:

^test case Communication area
- Visit the Inside sales page with perticular record
- Click on Action button
- Click on Edit option
- Edit page will be open
- Click on Meetings/Extra tab
- Select S9 [Lost] option stage list
- Enter Stage comment in comment box
- Click on Save comment button
- Click on Save button to save the page

@result:
- Meetings/Extra tab will be active & comment will be saved.
 */

import { Navbar, login_username, login_password, LoginPage, AdminArea, CreateArea } from '../../../../page-objects/pages/index' 
describe('Communication area Meetings/Extra tab', function() {
    it('Communication area Meetings/Extra tab', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/admin/inside_sales/instructor_portal.php?list_view=1&search_text=ashutosh.gupta@ucertify.com')
            cy.get('#action_dropdown_btn').click()
            cy.get('[data-cy="edit_opt"]').click()
            cy.visit(data.url + '/admin/inside_sales/instructor_portal.php?grid=1&action=grid_view&page=1&search_user_guid=0488j')
            cy.get('#royality_type').click()
            cy.get('#meetings_details').select('1', {force: true})
            cy.get('[name="meetings_comment"]').type('Testing Meetings/Extra tab', {force: true})
            cy.get('[data-cy="save_comnt_btn"]').click({force: true})
            cy.get('[data-cy=save_comnt_btn]').click({force: true})
        })
    })
});