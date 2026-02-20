/*
@author: Sundaram Tripathi
@master_project_id: 2444
@phase_id: 
@story_id: 15267
@story_name: testEval
@Test_Case_Name: testEval.js
@description: Open testeval page in admin area
@test_steps: 
^Test case testeval page
- Visit the website
- Visit the admin area
- Go to this link "admin/test/test.php?testEval=1"
@test_data: N/A
@result: Successfully open the testEval page
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe('Admin area', function() {

    it('test Eval page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url+'/admin/test/test.php?testEval=1');
        })
    })
})