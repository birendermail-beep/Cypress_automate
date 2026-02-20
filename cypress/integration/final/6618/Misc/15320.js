/*
@author: Sundaram Tripathi
@project_group: 
@phase_id: 
@Story_Id: 15320
@story_name: video array
@path: final/Dump_Test_Automation
@Test_Case_Name: video array
@description: Go to the focus and open the My QQ
@test_steps: 
^Test case of video array statys 
- visit on website
- Go to the utils
- visit this link "/utils/videoarray_status.php"

@test_data: N/A
@result:
- Successfully open the video array status page
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('Video Array Status', function() {
    it('Video Array Status', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.wait(5000);
            cy.visit(data.url + "/utils/videoarray_status.php");
            cy.wait(10000);
        })
    })
})