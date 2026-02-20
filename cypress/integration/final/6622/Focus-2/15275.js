/*
@author: Sundaram Tripathi
@master_project_id: 6622
@phase_id: 
@story_id: 15275
@story_name: user_dashboard
@path: final/Dump_Test_Automation
@Test_Case_Name: user_dashboard.js
@description: Open Remote Usability Test page
@test_steps: 
^Test case of user dashboard
- Visit the website
- visit the link "/ext/ux_review/?action=cover"
@test_data: N/A
@result: Successfully open the Usability test page
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe('Focus', function() {

    it('Open Remote Usability Test page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url+'/ext/ux_review/?action=cover');
        })
        
    }) 
})