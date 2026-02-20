/*
@author: Sundaram Tripathi
@master_project_id: 6618
@phase_id: 
@Story_Id: 15078
@story_name: btest
@path: final/Dump_Test_Automation
@Test_Case_Name: btest.js
@description: open image url
@test_steps: 
^Test case of is eval on search
- visit on the utils area
- visit on this link https://www.jigyaasa.info/utils/btest.php?action=test
- open the image url page
@test_data: N/A
@result: Successfully open the page
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('Website', function() {

    it('Image url page will be open', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.wait(3000);
            cy.visit(data.url + '/utils/btest.php?action=test')
        });
    })
})