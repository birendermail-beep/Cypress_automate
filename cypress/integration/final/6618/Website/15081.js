/*
@author: Sundaram Tripathi
@master_project_id: 6618
@phase_id: 
@Story_Id: 15081
@story_name: career_page
@path: final/Dump_Test_Automation
@Test_Case_Name: career_page.js
@description: Go to the about page and open the hiring page
@test_steps: 
^Test case of hiring page
- visit on website
- visit on this click "/about/?page=technical_writer"
@test_data: N/A
@result: - Successfully open the Hiring page
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('Website', function() {

    it('Open the hiring page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/about/?page=technical_writer');
        })
    })
})