/*
@author: Sundaram Tripathi
@master_project_id: 6618
@phase_id: 
@story_id: 15276 
@story_name: vimeo
@path: final/Dump_Test_Automation
@Test_Case_Name: vimeo.js
@description: Go to the utils and open the vimeo
@test_steps: 
^Test case of AWS Report
- Visit the website
- visit the utils area
- Click on the "Start" button in  Vimeo Videos Generate option
@test_data: N/A
@result: Successfully open the Vimeo Videos page
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('utils', function() {

    it('Open Remote Usability Test page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/utils');
        })
        cy.get(':nth-child(31) > :nth-child(3) > .btn').click({ force: true });

    })
})