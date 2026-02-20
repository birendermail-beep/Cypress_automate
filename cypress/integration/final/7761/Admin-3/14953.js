/*
    @author: irfan ahmad
    @master_project_id: 7761
    @phase_id: 10360
    @story_id: 14953
    @story_name: Inside_sales_split_view
    @path: final/7761
    @test_case_name: Inside_sales_split_view.js
    @description:
    @test_steps:

    ^test case Communication area
        - Visit the Inside sales page with perticular record
        - Click on Action button
        - Click on Edit option
        - Split view visible

    @result:
        - Split window open
 */

import { Navbar, login_username, login_password, LoginPage, AdminArea, CreateArea } from '../../../../page-objects/pages/index' 
describe('Inside sales Split view', function() {
    it('Inside sales Split view', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/admin/inside_sales/instructor_portal.php?list_view=1&search_text=irfan.ahmad@ucertify.com')
            cy.get('#action_dropdown_btn').click()
            cy.get('[data-cy="edit_opt"]').click()
            cy.visit(data.url + '/admin/inside_sales/instructor_portal.php?grid=1&action=grid_view&page=1&search_user_guid=04nOf')
        })
    })
});