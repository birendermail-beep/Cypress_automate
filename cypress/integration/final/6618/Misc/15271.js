/*
@author: Sundaram Tripathi
@master_project_id: 6618
@phase_id: 
@story_id: 15271 
@story_name: ui_design_standards
@Test_Case_Name: ui_design_standards.js
@description: Go to utils and click run button
@test_steps: 
^Test case In utils run button
- Visit the website
- visit the utils area
- Go to the 6th row and click on the "Start" button in "Style Guide (Apps)" option.
- Successfully open the Style Guide page.
@test_data: N/A
@result: Successfully open the style guide page
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('Utils', function() {

    it('Display the page of style guide', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/utils');
        })
        cy.get(':nth-child(6) > :nth-child(3) > .btn').click({ force: true });
    })
})