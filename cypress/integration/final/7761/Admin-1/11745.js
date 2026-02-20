/*
@author: Ankit kumar
@master_project_id: 7761
@phase_id: 
@story_id: 11745
@story_name: Manage Section List
@path: final/7761
@test_case_name: Manage Section List.js
@description: 
@test_steps: 
^Manage- User Action feature- Section  List
-Click on Manage
-Select user
-Select a Particular user
-Click on the action button and select section list

@test_data: n/a
@result:Admin should be able to see the list of sections of a particular user  
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea, CreateArea } from '../../../../page-objects/pages/index' 
describe('Roster Testing', () => {
    it("View section list of a particular user.", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        CreateArea.openLibrary()
        AdminArea.visitAdmin()
        AdminArea.visitEducatorManage()
        AdminArea.administratorInsLink()
        cy.wait(2000)
        cy.get('[data-cy="section_list_action"]').eq(0).click()
    });
})