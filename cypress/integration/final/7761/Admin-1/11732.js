/*
@author: Ankit Kumar
@master_project_id: 7761
@phase_id: 
@story_id: 11732
@story_name: Manage Course
@path: final/7761
@test_case_name: Manage Course.js
@description: 
@test_steps: 
^Manage- courses-Webpage
-Click on Manage
-Select courses
-Select a Particular course
-Click on the action button and select Webpage.

@test_data: n/a
@result: Admin should be able to view the course on webpage directly from Admin tool.
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea, CreateArea } from '../../../../page-objects/pages/index' 
describe('Roster Testing', () => {
    it("Webpage Option", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        CreateArea.openLibrary()
        AdminArea.visitAdmin()
        AdminArea.visitEducatorManage()
        AdminArea.administratorInsAS()
        cy.get('[data-cy=webpage_menu]').eq(0)
            .should('have.attr', 'href')
            .then((href) => {
            cy.visit(href)
        })
        cy.get('#list').should('be.visible')
    });
})