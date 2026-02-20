/*
@author: Ankit Kumar
@master_project_id: 7761
@phase_id: 
@story_id: 11720
@story_name: Remove Instructor
@path: final/7761
@test_case_name: Remove Instructor.js
@description: 
@test_steps: 
^To check if an Administrator can remove Instructor of the students
-Click on Action button under the Roster tab
-Select Remove Instructor"

@test_data: n/a
@result: Admin should be able to remove Instructor for the students.
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea, CreateArea } from '../../../../page-objects/pages/index'
describe('Admin Area', () => {
    it("To Reset course of the students", function () {
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
        cy.wait(5000);
        cy.get('[data-cy=roster_table] > thead > tr > [data-cy=ins_head]').click();
        cy.get('[data-cy="admin_track_modal"]').eq(0).click()
        cy.get('[data-cy="remove_ins"]').eq(0).click()
        cy.wait(2000)
        cy.get('[data-cy=confirmmodal]').should('be.visible')
    });
})