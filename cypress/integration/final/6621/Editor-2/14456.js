/*
@author: Anirudh Pratap
@master_project_id: 6621
@phase_id: 10950
@story_id: 
@story_name: Download Report
@path: final/6607/Student
@test_case_name: Download Report.js
@description: 
@test_steps: 
^Download Testing Report 1
-Go to https://ucertify.com/sim/terminal_lib/testing.php
-click to the desired os report and wait for the result.
-After getting the result there will be two buttons visible Export to csv & Export to xls. 
-click the respective button for the desired format.

^Download Testing Report 2
-Go to https://docs.google.com/spreadsheets/d/1PHKX45YKGas8-8kSoE6xemxhat8H43v6eNBvi1x48sI/edit#gid=309454329
-Open the guids in editor
-check the commands that it has correct output or not.

@test_data: Any prepkit
@result: -File will be downloaded -Command Output will be correct.
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe("embed (knowledge check) testing", function() {
    beforeEach('This is login', function() {
            cy.fixture('global').then(data => {
                cy.visit(data.url)
                Navbar.clickOnLogin()
                LoginPage.loginPage(login_username, login_password)
                cy.visit(data.url+'/sim/terminal_lib/testing.php');
                
            })
    })
    it('download report in xls',function(){
        cy.get('.unix_report').click();
        cy.wait(7000);
        cy.get('#exportedTable').should('exist');
        cy.get('.xls').click();
    })

    it('download report in csv',function(){
        cy.get('.unix_report').click();
        cy.wait(7000);
        cy.get('#exportedTable').should('exist');
        cy.get('.xls').click();
    })
});