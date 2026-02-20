/*
@author: irfan ahmad
@master_project_id: 7761
@phase_id: 10306
@story_id: 14909
@story_name: Inside sales communication area call tab
@path: final/7761
@test_case_name: Inside_sales_communication_area_call_tab.js
@description:
@test_steps:

^test case Communication area
- Visit the Inside sales page with perticular record
- Click on Action button
- Click on Edit option
- Edit page will be open
- Click on Call tab
- Select call type
- Input test in comments
- Click on save comments
- Click on Save button to save the records

@result:
    - Calling app will be open & record will be added.
 */

import { Navbar, login_username, login_password, LoginPage, AdminArea, CreateArea } from '../../../../page-objects/pages/index'
describe('Communication area call tab', function () {
    it('Communication area call tab', function () {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/admin/inside_sales/instructor_portal.php?list_view=1&search_text=ashutosh.gupta@ucertify.com')
            cy.wait(10000);
            cy.get('#action_dropdown_btn').click()
            cy.get('[data-cy="edit_opt"]').click()
            cy.visit(data.url + '/admin/inside_sales/instructor_portal.php?grid=1&action=grid_view&page=1&search_user_guid=0488j')
            cy.get('[data-cy="call_btn"]').click()
            cy.get('[data-cy="call_detail_select"]').select('1', { force: true })
            cy.get('[data-cy="call_comment_txt"]').type('Testing Call', { force: true })
            cy.get('[data-cy="save_comnt_btn"]').click({ force: true })
            cy.get('[data-cy=save_comnt_btn]').click({ force: true })
        })
    })
});