/*
@author: Ankit Kumar
@master_project_id: 7761
@phase_id: 
@story_id: 11730
@story_name: View Dashboard of Course
@path: final/7761
@test_case_name: View Dashboard of Course.js
@description: 
@test_steps: 
^Manage- courses-Student View
-Click on Manage
-Select courses
-Select a Particular course
-Click on the action button and select student view.

@test_data: n/a
@result: Admin should be able to open the course in student view 
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea, CreateArea } from '../../../../page-objects/pages/index' 
describe('Roster Testing', () => {
    it("Student View Option", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        CreateArea.openLibrary()
        AdminArea.visitAdmin()
        AdminArea.visitEducatorManage()
        AdminArea.administratorInsAS()
        cy.get('[data-cy=student_view]').eq(0)
            .should('have.attr', 'href')
            .then((href) => {
            cy.visit(href)
        })
        Cypress.on('uncaught:exception', (error, runnable) => {
            return false;
        })
        cy.get('[data-cy=studyplanner]').should('be.visible')
    });
})