/*
@author: Anirudh Pratap
@master_project_id: 6621
@phase_id: 10950
@story_id: 
@story_name: Dos Report
@path: final/6607/Student
@test_case_name: Dos Report.js
@description: 
@test_steps: 
^Dos Command Testing Report
-Go to https://ucertify.com/sim/terminal_lib/testing.php
-click dos report.
-A percentage will be show for the dos report . it will take some time for fetching the data
-After completion of the percentage the report will be visible."

@test_data: Any prepkit
@result: Dos command report will be generated in table format.
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe("embed (knowledge check) testing", function() {
    it('This is login', function() {
            cy.fixture('global').then(data => {
                cy.visit(data.url)
                Navbar.clickOnLogin()
                LoginPage.loginPage(login_username, login_password)
                cy.visit(data.url+'/sim/terminal_lib/testing.php');
                cy.get('.ml').click();
            })
        })
});