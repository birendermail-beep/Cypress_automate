/*
@author: Ankit Kumar
@master_project_id: 7761
@phase_id: 
@story_id: 11743
@story_name: Archive Section
@path: final/7761
@test_case_name: Archive Section.js
@description: 
@test_steps: 
^Manage- section- Action feature- Archive Section
-Click on Manage
-Select section
-Select a Particular section
-Click on the action button and select Move to Archive 

@test_data: n/a
@result: Admin should be able to Archive a section.
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea, CreateArea } from '../../../../page-objects/pages/index' 
describe('Roster Testing', () => {
    it("Move to Archive Option in Action Button.", function() {
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
        cy.get('[data-cy="move_to_arc"]').eq(0).click()
        cy.get('[data-cy=confirmmodal]').should('be.visible')
    });
})