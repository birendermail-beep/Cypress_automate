/*
@author: Sundaram Tripathi
@project_group: 
@phase_id: 
@Story_Id:
@story_name: save_content
@path: final/Dump_Test_Automation
@Test_Case_Name: save_content.js
@description: Go to the focus and open the My QQ
@test_steps: 
^Test case save content
- visit on website
- Go to the utils area
- Visit on this link "/utils/btest.php?save_content=1"

@test_data: N/A
@result:
- Successfully open the save content page
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('utils Area', function() {

    it('Open save content', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.wait(3000);
            cy.visit(data.url + '/utils/btest.php?save_content=1')
        });
    })
})