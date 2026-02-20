/*
@author: Anirudh Pratap
@master_project_id: 7761
@phase_id: 
@story_id: 11705
@story_name: Set Accomodation
@path: final/Admin
@test_case_name: Set Accomodation.js
@description: 
@test_steps: 
^To check if Admin is able to set Accomodation for Students
-Click on Action button under the Roster tab
-Select Set Accomodation"

@test_data: n/a
@result: Roaster Action tab - Set Accomaodation will open.
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea, CreateArea } from '../../../../page-objects/pages/index' 
describe('Admin Area', () => {
    it("To set Accomodation for Students", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            CreateArea.openLibrary()
            AdminArea.visitAdmin()
            AdminArea.setOrg()
            AdminArea.visitEducatorRoster()
            cy.wait(3000)
            cy.get('[data-cy=roster_email]').clear().type(data.auditor_email[2]);
            cy.get('[data-cy=custom_btn]').click()
            cy.get('[data-cy="roster_table"]').should('be.visible')
            cy.get('[data-cy=admin_track_modal]').eq(0).click()
            cy.get('[data-cy=set_accom]').eq(0).click()
            cy.wait(2000)
            cy.get('#new_modal_ada').should('be.visible')
            cy.get('#submit_button').should('be.disabled')
        })
    });
})