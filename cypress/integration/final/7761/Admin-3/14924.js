/*
@author: irfan ahmad
@master_project_id: 7761
@phase_id: 10306
@story_id: 14924
@story_name: stage_tab
@path: final/7761
@test_case_name: stage_tab.js
@description:
@test_steps:

^test case Communication area
- Visit the Inside sales page with perticular record
- Click on Action button
- Click on Edit option
- Edit page will be open
- Click on Stage tab
- Select S3 option stage list
- Enter Stage comment in comment box
- Click on Save comment button
- Click on Save button to save the page

@result:
- Stage tab will be active & comment will be saved.
 */

import { Navbar, login_username, login_password, LoginPage, AdminArea, CreateArea } from '../../../../page-objects/pages/index'
describe('Communication area stage tab', function () {
    it('Communication area stage tab', function () {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/admin/inside_sales/instructor_portal.php?list_view=1&search_text=ashutosh.gupta@ucertify.com')
            cy.get('#action_dropdown_btn').click()
            cy.get('[data-cy="edit_opt"]').click()
            cy.visit(data.url + '/admin/inside_sales/instructor_portal.php?grid=1&action=grid_view&page=1&search_user_guid=0488j')
            cy.get('[data-cy="stage_tab_btn"]').click()
            cy.wait(10000);
            cy.get('[data-cy="stage_detail_select"]').select('3', { force: true })
            cy.get('[data-cy="stage_cnmt_box"]').type('Testing Stage S3', { force: true })
            cy.get('[data-cy="save_comnt_btn"]').click({ force: true })
            cy.get('[data-cy=save_comnt_btn]').click({ force: true })
        })
    })
});