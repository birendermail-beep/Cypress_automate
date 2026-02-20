/*
@author: Sundaram Tripathi
@master_project_id: 6618
@phase_id: 
@story_id: 15270 
@story_name: ucertify-prep_unitTest
@Test_Case_Name: ucertify-prep_unitTest.js
@description: Go to utils and click run button
@test_steps: 
^Test case In utils run button
- Visit the website
- visit the utils/unittest/ucertify-prep_unitTest.php
@test_data: N/A
@result: Successfully open the uCertify prep unit test page
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('Website', function() {

    it('Ucertify Prep Unit Test', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/utils/unittest/ucertify-prep_unitTest.php');
        })
    })
})