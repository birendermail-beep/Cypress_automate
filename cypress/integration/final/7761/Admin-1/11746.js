/*
@author: Ankit Kumar
@master_project_id: 7761
@phase_id: 
@story_id: 11746
@story_name: Suspend Account of Student
@path: final/7761
@test_case_name: Suspend Account of Student.js
@description: 
@test_steps: 
^Manage- User Action feature- Suspend account
"1) Click on Manage
2) Select user
3) Select a Particular user
3) Click on the action button and select suspend account "

@test_data: n/a
@result: Admin should be able to suspend account of a particular user  
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea, CreateArea } from '../../../../page-objects/pages/index' 
describe('Roster Testing', () => {
    it("Suspend a particular user.", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        CreateArea.openLibrary()
        AdminArea.visitAdmin()
        AdminArea.visitEducatorManage()
        AdminArea.administratorInsLink()
        cy.get('[data-cy="suspend_user_action"]').eq(0).click()
        cy.wait(2000)
        cy.get('[data-cy=confirmmodal]').should('be.visible')
    });
})