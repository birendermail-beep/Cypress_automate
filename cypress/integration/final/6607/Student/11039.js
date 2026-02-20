/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id: 10478
@story_id: 11039
@story_name: Perform Test
@path: final/6607/Student
@test_case_name: Perform Test.js
@description: if you have voucher so you can give the test
@test_steps:

^attempt the test
-test.ucertify.com open this website
-click on have a voucher test button 
-fill the first name and last name and email and valid voucher code
-fill the voucher code 3RXZ-WRJF-FFMG-DWLZ and password: 3BBLW76B and start the test 
-the click again on start test and navigate the question 
-open side panel and navigate the test 
-click on end test and go back 

@test_data: n/a
@result: test.ucertify.com will open
*/
import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
describe('test history page', function() {
    //test.ucertify have voucher take test, if you have voucher so you can give the test
    it('test.ucertify have voucher take test & attempt the test', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.website[4])
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.get(':nth-child(4) > .btn').click();
            cy.get('.logo-back > .container > #container > .col-md-12 > .steps > .text-center > .btn').click();
            cy.get('#access_code').clear().type('3RXZ-WRJF-FFMG-DWLZ')
            cy.get('#validate_code').click();
            cy.get('#proctored_password').clear().type('3BBLW76B')
            cy.get('#validate_code').click();
            cy.get('#start_test').click()
            //Pankaj:ucauto code expire
            cy.get('#btntxt').click()
            cy.get('[data-icon="false"][content_guid="02O8r"] > .question > .text-truncate > :nth-child(1) > .nh').click()
            cy.get('#show_result').click()
            cy.get('#btn-confirmed').click()
        })
    })
})