/*
@author: Ankit Kumar
@master_project_id: 7761
@phase_id: 
@story_id: 11744
@story_name: Manage Course List
@path: final/7761
@test_case_name: Manage Course List.js
@description: 
@test_steps: 
^Manage- User Action feature- course List
-Click on Manage
-Select user
-Select a Particular user
-Click on the action button and select course list 

@test_data: n/a
@result: Admin should be able to see the list of courses of a particular user  
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea, CreateArea } from '../../../../page-objects/pages/index' 
describe('Roster Testing', () => {
    it("View course list of a particular user.", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        CreateArea.openLibrary()
        AdminArea.visitAdmin()
        AdminArea.visitEducatorManage()
        AdminArea.administratorInsLink()
        cy.get('[data-cy="course_list_action"]').eq(0).click()
    });
})