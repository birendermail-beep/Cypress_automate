/*
@author: Sundaram Tripathi
@project_group: 
@phase_id: 
@Story_Id: test_assignment_list
@Test_Case_Name: test_assignment_list.js
@description: Show the ux buzz list
@test_steps: 
^Test case of test assignment list
- Visit the website
- Go to the uc buzz list and click on tis link "/ext/uc_buzz/index.php?func=list"

@test_data: N/A
@result: Successfully open the uc buzz list
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe('Admin Area', function() {

    it('Show the ux buzz list', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/ext/uc_buzz/index.php?func=list');
        })
    })
})