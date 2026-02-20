/*
@author: Ankit Kumar
@master_project_id: 7761
@phase_id: 
@story_id: 11714
@story_name: View Student Planner
@path: final/7761
@test_case_name: View Student Planner.js
@description: 
@test_steps: 
^To check if Admin can view the study planner of the student
-Click on Action button under the Roster tab
-Select Study Planner

@test_data: n/a
@result: Admin should be able to view the study planner of the students
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea, CreateArea } from '../../../../page-objects/pages/index' 
describe('Admin Area', () => {
    it("Study planner of the student", function() {
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
        cy.get('[data-cy="study_plan"]').eq(0).click()
        cy.wait(2000)
        cy.get('[data-cy="quote"]').should('be.visible',{force:true})
    });
})