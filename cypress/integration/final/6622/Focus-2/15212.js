/*
@author: Sundaram Tripathi
@master_project_id: 6622
@phase_id: 
@story_id: 15212
@story_name: qq_rightpane
@path: final/Dump_Test_Automation
@Test_Case_Name: qq_rightpane.js
@description: Go to the focus and open the rightpane
@test_steps: 
^Test case qq rightpane
- visit on website
- Go to the focus
- visit this link "/focus/index.php?func=focus_qq&action=list&type=myqq&user_guid="
- After that open the product page
@test_data: N/A
@result:
- Successfully open the qq listing page 
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe('Focus', function() {

    it('Show the qq rightpane', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url+'/focus/index.php?func=focus_qq&action=list&type=myqq&user_guid=');
        })
        
    })
})