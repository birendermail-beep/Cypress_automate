/*
@author: irfan ahmad
@master_project_id: 7761
@phase_id: 10306
@story_id: 14910
@story_name: Inside sales communication area comment tab
@path: final/7761
@test_case_name: Inside_sales_communication_area_comment_tab.js
@description:
@test_steps:

^test case Communication area
- Visit the Inside sales page with perticular record
- Click on Action button
- Click on Edit option
- Edit page will be open
- Click on 3 dot
- Click on comment tab
- Select comment type
- Enter comment text
- Click on Save comment button to save the comment
- Click on Save to save the page

@result:
- Comments will be active & save comments.
 */

import { Navbar, login_username, login_password, LoginPage, AdminArea, CreateArea } from '../../../../page-objects/pages/index'
describe('Communication area comment tab', function () {
    it('Communication area comment tab', function () {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/admin/inside_sales/instructor_portal.php?list_view=1&search_text=ashutosh.gupta@ucertify.com')
            cy.get('#action_dropdown_btn').click()
            cy.get('[data-cy="edit_opt"]').click()
            cy.visit(data.url + '/admin/inside_sales/instructor_portal.php?grid=1&action=grid_view&page=1&search_user_guid=0488j')
            cy.wait(8000);
            cy.get('[data-cy="show_comment_dot"]').click({ force: true })
            cy.get('[data-cy="comnt_tab_dot"]').click({ force: true })
            cy.get('[data-cy="comnt_detail_select"]').select('m', { force: true })
            cy.get('[data-cy="comnt_txt_area"]').type('Testing 3 dot comment', { force: true })
            cy.get('[data-cy="save_comnt_btn"]').click({ force: true })
            cy.get('[data-cy=save_comnt_btn]').click({ force: true })
        })
    })
});