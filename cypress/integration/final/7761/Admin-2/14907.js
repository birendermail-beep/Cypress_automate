/*
    @author: irfan ahmad
    @master_project_id: 7761
    @phase_id: 10360
    @story_id: 14907
    @story_name: Inside sales change zip
    @path: final/7761
    @test_case_name: Inside_sales_change_zip.js
    @description:
    @test_steps:

    ^test case Communication area
        - Visit the Inside sales page with perticular record
        - Click on Action button
        - Click on Edit option
        - Edit page open
        - Change zip
        - Click save button to save the page

    @result:
        - Zip has been updated.
 */

import { Navbar, login_username, login_password, LoginPage, AdminArea, CreateArea } from '../../../../page-objects/pages/index'
describe('Inside sales update zip', function () {
    it('Inside sales update zip', function () {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/admin/inside_sales/instructor_portal.php?list_view=1&search_text=irfan.ahmad@ucertify.com')
            cy.get('#action_dropdown_btn').click()
            cy.get('[data-cy="edit_opt"]')
                .should('have.attr', 'href')
                .then((href) => {
                    cy.visit(href)
                })
            //cy.visit(data.url + '/admin/inside_sales/instructor_portal.php?grid=1&action=grid_view&page=1&search_user_guid=04nOf')
            cy.wait(7000);
            cy.get('[data-cy="user_zip_text"]').clear().type('123456', { force: true })
            cy.get('[data-cy=save_comnt_btn]').click({ force: true })
        })
    })
});