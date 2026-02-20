/*
@author: Ankit Kumar
@master_project_id: 7761
@phase_id: 
@story_id: 11721
@story_name: Sending Activation Link
@path: final/7761
@test_case_name: Sending Activation Link.js
@description: 
@test_steps: 
^To check if an Administrator can send the Re- activation link to the students
-Click on Action button under the Roster tab
-Select Send Activation.

@test_data: n/a
@result: Admin should be able to send activation link to the student. There should not be any grammatical error
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea, CreateArea } from '../../../../page-objects/pages/index' 
describe('Admin Area', () => {
    it("To Re-activation link to the students", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        CreateArea.openLibrary()
        AdminArea.visitAdmin()
        AdminArea.setOrg()
        AdminArea.visitEducatorRoster()
        cy.wait(6000)
        AdminArea.emailRosterAction()
        cy.get('[data-cy="resend_act"]').eq(0).click()
        cy.wait(2000)
        cy.get('[data-cy="sec_modal"]').should('be.visible')
    });
})