/*
@author: Ankit Kumar
@master_project_id: 7761
@phase_id: 
@story_id: 11710
@story_name: Download Attendance Report
@path: final/7761
@test_case_name: Download Attendance Report.js
@description: 
@test_steps: 
^To be able to download Attendance report
-Click on Export
-Choose Attendance

@test_data: n/a
@result: Should be able to download Attendance report according to various fields on daily, weekly, monthly and yearly basis
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea, CreateArea } from '../../../../page-objects/pages/index'
describe('Orderbook Area', () => {
    it("To be able to download Attendance report", function () {
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
        cy.get('[data-cy="roster_table"]').should('be.visible')
        cy.get('[data-cy=roster_table] > thead > tr > .span1 > .custom_checkbox_new > .check_mark_custom').click()
        cy.get('#export_track_form').click()
        cy.get('#export_track_form > .dropdown-menu > :nth-child(2) > .export_track_check').click()
        cy.get('#enrollment_dur_type').select('This Year', { force: true })
        cy.get('.export_track').click()
        cy.wait(100000)
        cy.get('#download_file_link').click()
    });
})