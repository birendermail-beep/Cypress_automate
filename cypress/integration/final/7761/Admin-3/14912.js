/*
    @author: irfan ahmad
    @master_project_id: 7761
    @phase_id: 10360
    @story_id: 14912
    @story_name: Inside sales communication area demo invite save
    @path: final/7761
    @test_case_name: Inside_sales_communication_area_demo_invite_save.js
    @description:
    @test_steps:

    ^test case Communication area
        - Visit the Inside sales page with perticular record
        - Click on Action button
        - Click on Edit option
        - Edit page will be open
        - Click on Demo tab in communication area
        - Click on Invite meeting button
        - Invite meeting modal will be open
        - Click on Authorize button to save the meeting
    
    @result:
        - Invite meeting has been scheduled.
 */

import { Navbar, login_username, login_password, LoginPage, AdminArea, CreateArea } from '../../../../page-objects/pages/index' 
describe('Communication area demo invite save', function() {
    it('Communication area demo invite save', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/admin/inside_sales/instructor_portal.php?list_view=1&search_text=ashutosh.gupta@ucertify.com')
            cy.get('#action_dropdown_btn').click()
            cy.get('[data-cy="edit_opt"]').click()
            cy.visit(data.url + '/admin/inside_sales/instructor_portal.php?grid=1&action=grid_view&page=1&search_user_guid=0488j')
            cy.get('[data-cy="demo_tab_btn"]').click()
            cy.get('[data-cy="invite_btn"]').click()
            cy.get('#authorize_button').click({force: true})

        })
    })
});