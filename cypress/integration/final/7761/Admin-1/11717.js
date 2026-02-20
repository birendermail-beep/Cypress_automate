/*
@author: Ankit Kumar
@master_project_id: 7761
@phase_id: 
@story_id: 11717
@story_name: Set Section
@path: final/7761
@test_case_name: Set Section.js
@description: 
@test_steps: 
^To check if an Admin is able to set section for the student
-Click on Action button under the Roster tab
-Select Set Section"

@test_data: n/a
@result: Admin should be able to set section for the students
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea, CreateArea } from '../../../../page-objects/pages/index'
describe('Admin Area', () => {
    it("To set section for the student", function () {
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
        cy.fixture('global').then(data => {
            cy.get('[data-cy=roster_email]').clear().type(data.auditor_email[2]);
        })
        cy.get('[data-cy=custom_btn]').click()
        cy.wait(6000);
        cy.get('[data-cy=roster_table] > thead > tr > [data-cy=ins_head]').click();
        cy.get('[data-cy="admin_track_modal"]').eq(0).click()
        cy.get('[data-cy="set_sec"]').eq(0).click()
        cy.wait(2000)
        cy.get('[data-cy="sec_modal"]').should('be.visible')
    });
})