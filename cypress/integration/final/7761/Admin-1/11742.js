/*
@author: Ankit Kumar
@master_project_id: 7761
@phase_id: 
@story_id: 11742
@story_name: Modify Section
@path: final/7761
@test_case_name: Modify Section.js
@description: 
@test_steps: 
^Manage- section- Action feature- Modify Section
-Click on Manage
-Select section
-Select a Particular section
-Click on the action button and select Modify section"

@test_data: n/a
@result: Admin should be able to Modify a section.
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea, CreateArea } from '../../../../page-objects/pages/index' 
describe('Roster Testing', () => {
    it("Modify Option in Action Button.", function() {
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
        cy.get('[data-cy="modify_sec"]').eq(0).click()
        cy.wait(6000)
        cy.get('[data-cy="modify_section_modal"]').should('be.visible')
    });
})