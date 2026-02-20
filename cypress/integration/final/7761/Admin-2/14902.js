/*
    @author: irfan ahmad
    @master_project_id: 7761
    @phase_id: 10360
    @story_id: 14902
    @story_name: Inside sales change decision maker
    @path: final/7761
    @test_case_name: Inside_sales_change_decision_maker.js
    @description:
    @test_steps:

    ^test case Communication area
        - Visit the Inside sales page with perticular record
        - Click on Action button
        - Click on Edit option
        - Edit page open
        - Change Decision maker
        - Click save button to save the page

    @result:
        - Decision maker has been updated.
 */

import { Navbar, login_username, login_password, LoginPage, AdminArea, CreateArea } from '../../../../page-objects/pages/index'
describe('Inside sales Decision maker', function () {
    it('Inside sales Decision maker', function () {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/admin/inside_sales/instructor_portal.php?list_view=1&search_text=irfan.ahmad@ucertify.com')
            cy.wait(10000);
            cy.get('#action_dropdown_btn').click()
            cy.get('[data-cy="edit_opt"]').click()
            cy.visit(data.url + '/admin/inside_sales/instructor_portal.php?grid=1&action=grid_view&page=1&search_user_guid=04nOf')
            cy.get('[data-cy="desc_maker_select"]').select('y', { force: true })
            cy.get('[data-cy=save_comnt_btn]').click({ force: true })
        })
    })
});