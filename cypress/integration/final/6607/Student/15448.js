/*
@author: Sundaram Tripathi
@master_project_id: 6607
@phase_id: 
@Story_Id: 15448
@story_name: amazon purchaseapp
@path: final/6607/Student
@Test_Case_Name: amazon_purchaseapp.js
@description: Open cart area and go to the amazon page
@test_steps: 

^Test case of Edit option in product tab
-visit on website https://www.jigyaasa.info/cart/index.php?AmazonPayButton=1
- CLick on the Click here button

@test_data: N/A
@result: Successfully open the amazon purchasing page
*/
import { login_username, login_password } from '../../../../../config'
import Navbar from '../../../../page-objects/components/Navbar'
import LoginPage from '../../../../page-objects/pages/LoginPage'

describe('Webiste', function() {
    it('Amazone Purchase app', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/cart/index.php?AmazonPayButton=1");
            cy.get('#amazon_submit').click({ force: true });
        })
    })
})