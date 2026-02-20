/*
@author: irfan ahmad
@master_project_id: 7761
@phase_id: 10306
@story_id: 14918
@story_name: email_tab
@path: final/7761
@test_case_name: email_tab.js
@description:
@test_steps:

^test case Communication area
- Visit the Inside sales page with perticular record
- Click on Action button
- Click on Edit option
- Edit page will be open
- Click on Email tab in communication area
- Select email type
- Input test in comments
- Click on save comments
- Click on Save button to save the records

@result:
- Email will be open & comments will be saved.
 */

import { Navbar, login_username, login_password, LoginPage, AdminArea, CreateArea } from '../../../../page-objects/pages/index' 
describe('Communication area Email tab', function() {
    it('Communication area Email tab', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/admin/inside_sales/instructor_portal.php?list_view=1&search_text=irfan.ahmad@ucertify.com')
            cy.get('#action_dropdown_btn').click()
            cy.get('[data-cy="edit_opt"]').click()
            cy.visit(data.url + '/admin/inside_sales/instructor_portal.php?grid=1&action=grid_view&page=1&search_user_guid=04nOf')
            cy.get('[data-cy="email_modal_tab"]').click()
            cy.get('[data-cy="cancel_btn"]').click({force: true})
            cy.get('[data-cy="email_cmt_select"]').select('1', {force: true})
            cy.get('[data-cy="email_cmt_text"]').type('Testing Email 1st Followup', {force: true})
            cy.get('[data-cy="save_comnt_btn"]').click({force: true})
            cy.get('[data-cy=save_comnt_btn]').click({force: true})
        })
    })
});