/*
@author: Ankit Kumar
@master_project_id: 7761
@phase_id: 
@story_id: 11719
@story_name: Reset Course
@path: final/7761
@test_case_name: Reset Course.js
@description: 
@test_steps: 
^To check if an Administrator can reset course of the students 1
-Click on Action button under the Roster tab
-Select Reset Course"

^To check if an Administrator can reset course of the students 2
-Click on Action button under the Roster tab
-Select Reset course"

@test_data: n/a
@result: Admin should be able to reset the course for the students.
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea, CreateArea } from '../../../../page-objects/pages/index' 
describe('Admin Area', () => {
    it("To Reset course of the students", function() {
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
        cy.get('[data-cy="reset_course"]').eq(0).click()
        cy.wait(2000)
        cy.get('[data-cy=user_guid_place]').should('be.visible')
    });
})