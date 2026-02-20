/*
@author: irfan ahmad
@master_project_id: 7761
@phase_id: 10306
@story_id: 14919
@story_name: Inside sales communication area givenup tab
@path: final/7761
@test_case_name: Inside_sales_communication_area_givenup_tab.js
@description:
@test_steps:

^test case Communication area
- Visit the Inside sales page with perticular record
- Click on Action button
- Click on Edit option
- Edit page will be open
- Click on 3 dot button
- Click on Givenup tab
- Select add as givenup option from the Relevancy list
- Enter message in comment box
- Click on save comments button
- Click on Save button to save the records

@result:
- Givenup tab will be active & comment will be saved.
 */

import { Navbar, login_username, login_password, LoginPage, AdminArea, CreateArea } from '../../../../page-objects/pages/index' 
describe('Communication area Givenup tab', function() {
    it('Communication area Givenup Status tab', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/admin/inside_sales/instructor_portal.php?list_view=1&search_text=ashutosh.gupta@ucertify.com')
            cy.get('#action_dropdown_btn').click()
            cy.get('[data-cy="edit_opt"]').click()
            cy.visit(data.url + '/admin/inside_sales/instructor_portal.php?grid=1&action=grid_view&page=1&search_user_guid=0488j')
            cy.get('[data-cy="show_comment_dot"]').click({force: true})
            cy.get('[data-cy="quote_type_btn"]').click({force: true})
            cy.get('[data-cy="givenup_details_select"]').select('1', {force: true})
            cy.get('[data-cy="givenup_comment_txt"]').type('Testing 3 dot Givenup add as givenup', {force: true})
            cy.get('[data-cy="save_comnt_btn"]').click({force: true})
            cy.get('[data-cy=save_comnt_btn]').click({force: true})
        })
    })
});