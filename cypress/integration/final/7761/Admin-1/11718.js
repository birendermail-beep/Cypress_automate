/*
@author: Ankit Kumar
@master_project_id: 7761
@phase_id: 
@story_id: 11718
@story_name: Track Performance
@path: final/7761
@test_case_name: Track Performance.js
@description: 
@test_steps: 
^To check if an Admin is able to Track Performace of the students
-Click on Action button under the Roster tab
-Select track report

@test_data: n/a
@result: Admin should be able to Track Performace of the students
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea, CreateArea } from '../../../../page-objects/pages/index' 
describe('Admin Area', () => {
    it("To Track Performace of the students", function() {
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
        cy.get('[data-cy="admin_track_modal"]').eq(5).click()
        cy.get('[data-cy="track_rpt_link"]').eq(0)
            .should('have.attr', 'href')
            .then((href) => {
            cy.visit(href)
        })
        cy.get('[data-cy="roster_track_cy"]').should('be.visible')
    });
})