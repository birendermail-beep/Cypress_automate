/*
@author: Ankit Kumar
@master_project_id: 7761
@phase_id: 
@story_id: 11728
@story_name: Access Section List
@path: final/7761
@test_case_name: Access Section List.js
@description: 
@test_steps: 
^Manage- courses-Sections
-Click on Manage
-Select courses
-Select a Particular course
-Click on the action button and select Section List.

@test_data: n/a
@result: Administrator should be able to see the list of sections created for a particular course.
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea, CreateArea } from '../../../../page-objects/pages/index' 
describe('Roster Testing', () => {
    it("Section List Option", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        CreateArea.openLibrary()
        AdminArea.visitAdmin()
        AdminArea.visitEducatorManage()
        AdminArea.administratorInsAS()
        cy.get('[data-cy=section_list]').eq(0).click()
    });
})