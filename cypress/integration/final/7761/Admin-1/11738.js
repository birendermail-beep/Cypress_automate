/*
@author: Ankit Kumar
@master_project_id: 7761
@phase_id: 
@story_id: 11738
@story_name: Change Permission
@path: final/7761
@test_case_name: Change Permission.js
@description: 
@test_steps: 
^1. Manage- section- Action feature- Change Permission
-Click on Manage
-Select section
-Select a Particular section
-Click on the action button and select change Permission

^2. Manage- section- Action feature- Change Permission
-Click on Manage
-Select section
-Select a Particular section
-Click on the action button and select Save As

@test_data: n/a
@result: Admin should be able to change Instructor for a particular section and assign Teaching Assistant to a section.
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea, CreateArea } from '../../../../page-objects/pages/index' 
describe('Roster Testing', () => {
    beforeEach('This is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        CreateArea.openLibrary()
        AdminArea.visitAdmin()
        AdminArea.visitEducatorManage()
        AdminArea.administratorSection()
    })
    it.only("Permission Option in Action Button.", function() {
        cy.get('[data-cy="enroll_td"]').eq(0).click();
        cy.get('[data-cy="enroll_td"]').eq(0).click();
        cy.get('[data-cy="action_sec_track"]').eq(0).click()
        cy.get('[data-cy="permission_opt"]').eq(0).click()
        cy.get('[data-cy="permission_modal_owner"]').should('be.visible')
    });
    it("Save As Option in Action Button.", function() {
        cy.get('[data-cy="enroll_td"]').eq(0).click();
        cy.get('[data-cy="enroll_td"]').eq(0).click();
        cy.get('[data-cy="action_sec_track"]').eq(0).click()
        cy.get('[data-cy="save_as_opt"]').eq(0).click()
        cy.get('[data-cy="save_as"]').should('be.visible')
    });
})