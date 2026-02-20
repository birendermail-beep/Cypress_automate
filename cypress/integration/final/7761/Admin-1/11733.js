/*
@author: Ankit Kumar
@master_project_id: 7761
@phase_id: 
@story_id: 11733
@story_name: Assign Master Section
@path: final/7761
@test_case_name: Assign Master Section.js
@description: 
@test_steps: 
^Manage- courses-Master section
-Click on Manage
-Select courses
-Select a Particular course
-Click on the action button and Assign Master Section

@test_data: n/a
@result: Admin should be able to assign a particular Instructor a Master section.
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea, CreateArea } from '../../../../page-objects/pages/index' 
describe('Roster Testing', () => {
    it("Mater Section Option", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        CreateArea.openLibrary()
        AdminArea.visitAdmin()
        AdminArea.visitEducatorManage()
        AdminArea.administratorInsAS()
        cy.get('[data-cy=assign_master]').eq(0).click()
        // cy.get('[data-cy="master_sec_modal"]').should('be.visible')s
    });
})
