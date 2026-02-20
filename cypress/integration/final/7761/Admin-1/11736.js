/*
@author: Ankit Kumar
@master_project_id: 7761
@phase_id: 
@story_id: 11736
@story_name:Access Roaster of Student
@path: final/7761
@test_case_name:Access Roaster of Student.js
@description: 
@test_steps: 
^Manage- section- Action feature- Roster
-Click on Manage
-Select section
-Select a Particular section
-Click on the action button and select Roster"

@test_data: n/a
@result: Admin should be able to see the roster for a particular section
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea, CreateArea } from '../../../../page-objects/pages/index' 
describe('Roster Testing', () => {
    it("Action button and select Roster.", function() {
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
        cy.get('[data-cy="roster_action_opt"]').eq(0)
            .should('have.attr', 'href')
            .then((href) => {
            cy.visit(href)
        })
        cy.get('[data-cy=roster_table]').should('be.visible')
    });
})