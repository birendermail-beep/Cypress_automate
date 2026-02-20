/*
@author: Ankit Kumar
@master_project_id: 7761
@phase_id: 
@story_id: 11716
@story_name: Set Instructor
@path: final/7761
@test_case_name: Set Instructor.js
@description: 
@test_steps: 
^To check if an Admin is able to set Instructor for the student
-Click on Action button under the Roster tab
-Select Set Instructor"

@test_data: n/a
@result: Admin should be able to set Instructor for the students
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea, CreateArea } from '../../../../page-objects/pages/index' 
describe('Admin Area', () => {
    
    it("To set Instructor for the student", function() {
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
        cy.get('[data-cy="set_ins"]').eq(0).click()
        cy.wait(2000)
        cy.get('[data-cy="new_ins"]').should('be.visible')
    });
})