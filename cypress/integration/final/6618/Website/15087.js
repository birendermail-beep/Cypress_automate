/*
@author: Sundaram Tripathi
@master_project_id: 6618
@phase_id: N/A
@story_id: 15087
@story_name: Codelab
@path: final/Dump_Test_Automation
@test_case_name: Codelab.js
@description: Open the code labpage
@test_steps: 
^test case of codelab
-Visit to website
-Login to ucertify.com
-Visit the vmadmin
-Visit the codelab page
@test_data: N/A
@result: Successfully show codelab page
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('Code Lab', function() {
    it('Display Code Page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
                //discuss with rashmi ma'am 
                //cy.visit(data.url + "/custom/codelab/index.php");

        })
    })
})