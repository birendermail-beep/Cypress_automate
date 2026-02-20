/*
@author: Ankit Kumar
@master_project_id: 7761
@phase_id: 
@story_id: 11727
@story_name: Access Roaster
@path: final/7761
@test_case_name: Access Roaster.js
@description: 
@test_steps: 
^Manage- courses-Roster
-Click on Manage
-Select courses
-Select a Particular course
-Click on the action button and select Roster.

@test_data: n/a
@result: Administrator should be able to see the Roster of the students
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea, CreateArea } from '../../../../page-objects/pages/index' 
describe('Roster Testing', () => {
    it("Roster for a particular course.", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        CreateArea.openLibrary()
        AdminArea.visitAdmin()
        AdminArea.visitEducatorManage()
        AdminArea.administratorInsAS()
        cy.get('[data-cy=roster_menu]').eq(0).click()
        cy.get('[data-cy=roster_table]').should('be.visible')
    });
})