/*
@author: Ankit Kumar
@master_project_id: 7761
@phase_id: 
@story_id: 11715
@story_name: Link Student with Instructor
@path: final/7761
@test_case_name: Link Student with Instructor.js
@description: 
@test_steps: 
^To check if Admin will be able to link a student with the Instructor
-Click on Action button under the Roster tab
-Select Link with Instructor

^To verify Grammatical Error
-Click on Action button under the Roster tab
-Select Link with Instructor

@test_data: n/a
@result: Admin should be able to Link a student with an Instructor
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea, CreateArea } from '../../../../page-objects/pages/index'
describe('Admin Area', () => {
    it("To link a student with the Instructor", function () {
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
        cy.contains('Link with Instructor').click()
        cy.wait(2000)
        cy.get('[data-cy="ins_modal"]').should('be.visible')
    });
})