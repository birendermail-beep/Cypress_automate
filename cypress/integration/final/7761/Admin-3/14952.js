/*
    @author: irfan ahmad
    @master_project_id: 7761
    @phase_id: 10360
    @story_id: 14952
    @story_name: Inside_sales_send_followup_email
    @path: final/7761
    @test_case_name: Inside_sales_send_followup_email.js
    @description:
    @test_steps:

    ^test case Communication area
        - Visit the Inside sales page with perticular record
        - Click on Action button
        - Click on Send followup email option
        - Compose mail modal open
        - Click on send button

    @result:
        - Follow Up email will be send.
 */

import { Navbar, login_username, login_password, LoginPage, AdminArea, CreateArea } from '../../../../page-objects/pages/index' 
describe('Inside sales, Send Follow Up Email', function() {
    it('Inside sales, Send Follow Up Email', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/admin/inside_sales/instructor_portal.php?list_view=1&search_text=ashutosh.gupta@ucertify.com')
            cy.get('#action_dropdown_btn').click()
            cy.get('[data-cy="send_followup_email"]').click()
            cy.get('#send_preview_email').click({force: true})
        })
    })
});