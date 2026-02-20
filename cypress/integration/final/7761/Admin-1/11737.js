/*
@author: Ankit Kumar
@master_project_id: 7761
@phase_id: 
@story_id: 11737
@story_name: Send Message
@path: final/7761
@test_case_name: Send Message.js
@description: 
@test_steps: 
^Manage- section- Action feature- Send Message
-Click on Manage
-Select section
-Select a Particular section
-Click on the action button and select send message

@test_data: n/a
@result: Admin should be able to send message to the Instructor of a particular section
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea, CreateArea } from '../../../../page-objects/pages/index' 
describe('Roster Testing', () => {
    it("Message Option in Action Button.", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        CreateArea.openLibrary()
        AdminArea.visitAdmin()
        AdminArea.visitEducatorManage()
        AdminArea.administratorSection()
        cy.get('[data-cy="enroll_td"]').eq(0).click();
        cy.get('[data-cy="enroll_td"]').eq(0).click();
        cy.get('[data-cy="action_sec_track"]').eq(0).click()
        cy.get('[data-cy="message_modal_opt"]').eq(0).click()
        cy.get('[data-cy="email_subject_element"]').should('be.visible')
    });
})