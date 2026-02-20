/*
@author: Sundaram Tripathi
@master_project_id: 6607
@phase_id: 
@Story_Id: 15447
@story_name: amazon_login
@path: final/6607/Student
@Test_Case_Name: amazon_login 
@description: Login the open amazon page
@test_steps: 

^Test case of Edit option in product tab
-visit on website
- Visit on this click "https://www.jigyaasa.info/login.php?func=amazon_login"

@test_data: Search = testbot@ucertify.com
@result: Successfully open amazon page
*/
import { login_username, login_password } from '../../../../../config'
import Navbar from '../../../../page-objects/components/Navbar'
import LoginPage from '../../../../page-objects/pages/LoginPage'
describe('Amazone Page', function() {
    it('Visit the amazone page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url);
            cy.get(':nth-child(2) > .list-unstyled > :nth-child(1) > a > .pointer').click({ force: true });
            cy.visit(data.url + '/login.php?func=amazon_login');
        })
    })
})