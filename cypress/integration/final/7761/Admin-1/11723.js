/*
@author: Ankit Kumar
@master_project_id: 7761
@phase_id: 
@story_id: 
@story_name:Disable Course
@path: final/7761
@test_case_name:Disable Course.js
@description: 
@test_steps: 
^To check if Admin can disable the course
-Click on Action button under the Roster tab
-Select Disable course.

@test_data: n/a
@result: Admin should be able to Archive the course
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea, CreateArea } from '../../../../page-objects/pages/index' 
describe('Admin Area', () => {
    it("To Disable the course", function() {
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
        cy.get('[data-cy="disable_course"]').eq(0).click()
        cy.wait(2000)
        cy.get('[data-cy=confirmmodal]').should('be.visible')
    });
})