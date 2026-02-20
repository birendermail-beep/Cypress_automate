/*
@author: Ankit kumar
@master_project_id: 7761
@phase_id: 
@story_id: 11711
@story_name: Download Excel
@path: final/7761
@test_case_name: Download Excel.js
@description: 
@test_steps: 
^download student list in Excel
-Click on Export
-Choose Roster"

@test_data: n/a
@result: Should be able to get the list of students selected in an Excel sheet
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea, CreateArea } from '../../../../page-objects/pages/index'
describe('Orderbook Area', () => {
    it("Download student list in Excel", function () {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        CreateArea.openLibrary()
        AdminArea.visitAdmin()
        AdminArea.visitEducatorRoster()
        cy.fixture('global').then(data => {
            cy.get('[data-cy=roster_email]').clear().type(data.auditor_email[2]);
        })
        cy.get('[data-cy=custom_btn]').click()
        cy.wait(6000);
        cy.get('[data-cy="roster_table"]').should('be.visible')
        cy.get('[data-cy=roster_table] > thead > tr > .span1 > .custom_checkbox_new > .check_mark_custom').click()
        cy.get('#export_track_form').click()
        cy.wait(1000);
        cy.get(':nth-child(3) > .export_track_check').click()
        cy.get('.export_track').click()
        cy.wait(100000)
        cy.get('#download_file_link').click()
    });
})