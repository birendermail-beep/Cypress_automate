/*
@author: Sundaram Tripathi
@master_project_id: 6618
@phase_id: 
@Story_Id: 15209
@story_name: pe-term
@path: final/Dump_Test_Automation
@Test_Case_Name: pe-term.js
@description: Open the terms and licence agreement
@test_steps: 
^Test case of paysheet
-visit on this link 'https://www.jigyaasa.info/terms/index.php'
- Successfully open the ucertify licence agreement page

@test_data: N/A
@result: Successfully open the licence agreement page
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('terms', function() {

    it('User license agreement', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/terms/index.php');
        })

    })
})