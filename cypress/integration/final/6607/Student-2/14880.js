/*
@author: Anirudh Pratap
@master_project_id: 6607
@phase_id: 
@story_id: 14880
@story_name: guarantee
@path: final/6607/Student
@test_case_name: guarantee
@description: N/A
@test_steps: 
^guarantee page
-Login to ucertify.com
-Open the following url.(https://www.ucertify.com/about/guarantee.html).

@test_data:N/A  
@result: It will open the guarantee page.
*/

import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index' 
describe('Checking footer area', function() {

    it('Opening the footer tpl page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/about/guarantee.html");
        })
    })
})