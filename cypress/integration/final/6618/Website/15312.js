/*
@author: Sundaram Tripathi
@master_project_id: 6618
@phase_id: 
@story_id:15312
@story_name: keyboard shortcut model
@path: final/Dump_Test_Automation
@Test_Case_Name: keyboard shortcut model
@description: Open ? ang go to the keyboard shortcut
@test_steps: 
^Test case keyboard short key
- visit on website
-Click on this "?" options.
- Select the "keyboard shortcuts"

@test_data: N/A
@result: Successfully open the shortcut keys
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('Website', function() {
    it('Keyboard shortcut keys', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.get('[data-cy=previous_page]').click({ force: true })
        })
        cy.get('#get_shortcut_modal').click({ force: true });
    })
})