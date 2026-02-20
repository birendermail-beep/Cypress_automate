/*
@author: Ankit Kumar
@master_project_id: 7761
@phase_id: 
@story_id: 14881
@story_name: Open Study Planner
@path: final/7761
@test_case_name: Open Study Planner.js
@description: 
@test_steps: 
^Study planner 
-Go to Admin tool
-Click on readiness to open study planner"

@test_data: n/a
@result: Study planner should open from the Start for every student
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea, CreateArea } from '../../../../page-objects/pages/index' 
describe('Admin Area', () => {
    it("Study planner of the student", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
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
            cy.get('[data-cy="quote"]').should('be.visible')
        });
    });
});