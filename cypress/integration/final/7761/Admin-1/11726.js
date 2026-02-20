/*
@author: Ankit Kumar
@master_project_id: 7761
@phase_id: 
@story_id: 11726
@story_name:Access Instructor List
@path: final/7761
@test_case_name:Access Instructor List.js
@description: 
@test_steps: 
^Manage- courses-Instructor list
-Click on Manage
-Select a particular course
-Click on the action button and select Instructor list.

@test_data: n/a
@result: Administrator should be able to view the list of Instructors for a particular course.
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea, CreateArea } from '../../../../page-objects/pages/index' 
describe('Roster Testing', () => {
    it("List of Instructors in a Particular course.", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        CreateArea.openLibrary()
        AdminArea.visitAdmin()
        AdminArea.visitEducatorManage()
        AdminArea.administratorInsAS()
        cy.get('[data-cy=instruct_list]').eq(0).click()
    });
})