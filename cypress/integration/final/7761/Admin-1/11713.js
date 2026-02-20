/*
@author: Ankit Kumar
@master_project_id: 7761
@phase_id: 
@story_id: 11713
@story_name: Create Tags
@path: final/7761
@test_case_name: Create Tags.js
@description: 
@test_steps: 
^To check if Admin can create Tags for the students
-Click on Action button under the Roster tab
-Select Set Tag

@test_data: n/a
@result: Admin should be able to set up tag for the students
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea, CreateArea } from '../../../../page-objects/pages/index' 
describe('Admin Area', () => {
    it("Tags for the students", function() {
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
        cy.get('[data-cy="set_tag"]').eq(0).click()
        cy.wait(2000)
        cy.get('[data-cy="tag_set"]').should('be.visible')
    });
})