/*
@author: irfan ahmad
@master_project_id: 7761
@phase_id: 10627
@story_id: 14949
@story_name: Inside_sales_prevent_repeated_contact
@path: final/7761
@test_case_name: Inside_sales_prevent_repeated_contact.js
@description:
@test_steps:

^test case Communication area
- Visit the Inside sales page with perticular record
- Click on Action button
- Click on Edit option
- Visit Edit page
- Click on Add phone button
- Input repeated number in Other No.
- Error message will be shown on the alert.

@result:
- Error message will be shown on the alert.
 */

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('Inside sales, Prevent Repeated Contact', function() {
    it('Inside sales, Prevent Repeated Contact', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/admin/inside_sales/instructor_portal.php?list_view=1&search_text=ashutosh.gupta@ucertify.com')
            cy.get('#action_dropdown_btn').click()
            cy.visit(data.url + '/admin/inside_sales/instructor_portal.php?grid=1&action=grid_view&page=1&search_user_guid=0488j')
            cy.wait(5000)
            cy.get('[data-cy="add_phone_number"]').click({ force: true })
            cy.get('#office_number').type('7860964137', { force: true }).blur()
            cy.get('#add_contact_num_modal').should('exist')
        })
    })
});