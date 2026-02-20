/*
@author: Anirudh Pratap
@master_project_id: 6621
@phase_id: 10950
@story_id: 
@story_name: Unix Report
@path: final/6607/Student
@test_case_name: Unix Report.js
@description: 
@test_steps: 
^Unix Command Testing Report
-Go to https://ucertify.com/sim/terminal_lib/testing.php
-click unix report.
-After few seconds, report will show in the table format."

@test_data: Any prepkit
@result: Unix command report will be generated in table format.
*/


import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe("embed (knowledge check) testing", function() {
    it('This is login', function() {
            cy.fixture('global').then(data => {
                cy.visit(data.url)
                Navbar.clickOnLogin()
                LoginPage.loginPage(login_username, login_password)
                cy.visit(data.url+'/sim/terminal_lib/testing.php');
                cy.get('.unix_report').click();
                cy.wait(7000);
                cy.get('#exportedTable').should('exist');
            })
        })
});