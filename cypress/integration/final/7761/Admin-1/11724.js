/*
@author: Ankit Kumar
@master_project_id: 7761
@phase_id: 
@story_id: 11724
@story_name: Access Administrator List
@path: final/7761
@test_case_name:Access Administrator List.js
@description: 
@test_steps: 
^Manage Administrator list
-Click on Manage
-Select Administrator
-Click on Manage Profile 
-Click on send message 

@test_data: n/a
@result: Administrator should be able to view other administrator Profile or send message within same org
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea, CreateArea } from '../../../../page-objects/pages/index' 
describe('Roster Testing', () => {
    it("Manage Administrator list", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        CreateArea.openLibrary()
        AdminArea.visitAdmin()
        AdminArea.visitEducatorManage()
        cy.get('[data-cy="administrators_sub"]').click()
        cy.get('[data-cy=advance_srch]').click()
        cy.get('[data-cy=custom_btn]').click()
        cy.get('[data-cy="admin_track_modal"]').eq(0).click()
        cy.get('[data-cy=manage_profile_modal]').eq(0).click()
        cy.wait(5000)
        cy.get('[data-cy="profile_modal_sec"]').should('be.visible')
        cy.get('[data-cy="cross_btn"]').click()
        cy.get('[data-cy="admin_track_modal"]').eq(0).click()
        cy.get('[data-cy=message_modal]').eq(0).click()
        cy.wait(5000)
        cy.get('[data-cy="email_subject_element"]').should('be.visible')
    });
})