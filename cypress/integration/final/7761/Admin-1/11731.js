/*
@author: Ankit Kumar
@master_project_id: 7761
@phase_id: 
@story_id: 11731
@story_name: LTI Settings
@path: final/7761
@test_case_name: LTI Settings.js
@description: 
@test_steps: 
^Manage- courses-LTI Settings
-Click on Manage
-Select courses
-Select a Particular course
-Click on the action button and select LTI settings.

@test_data: n/a
@result: Admin Should be able to open the LTI settings for their LMS
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea, CreateArea } from '../../../../page-objects/pages/index' 
describe('Roster Testing', () => {
    it("LTI setting Option", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        CreateArea.openLibrary()
        AdminArea.visitAdmin()
        AdminArea.visitEducatorManage()
        AdminArea.administratorInsAS()
        cy.contains('Section List').click();
        cy.get('.dropdown > [data-cy=action_sec_track]').eq(0).click();
        cy.contains('LTI settings').click();
    });

})
