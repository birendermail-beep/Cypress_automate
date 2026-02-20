/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id: 9327
@story_id: 11025
@story_name: ICT Spreadsheet Essentials Certificate
@path: final/6607/Student
@test_case_name: ICT Spreadsheet Essentials Certificate.js
@description: only show the post assessment and certificate test on dashboard
@test_steps:

^restricted in attempt
-Open https://ucertify.com/ 
-Login with your account
-Click on My Library and search ICT course as -test  (you can open any one)
-open any one  ict course as student view then dashboard will be open 
-click on certificate test

^ask proctor
-Open https://ucertify.com/ 
-Login with your account
-Click on My Library and search ICT course as -test  (you can open any one)
-open any one  ict course as student view then dashboard will be open 
-click on certificate test
-click on test button to start the test

@test_data: n/a
@result: ICT courses dahboard will open.
*/

import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index' 
describe('ebook area testing', function() {
    //ict.dashboard2, ict.dashboard3, ict.dashboard4, ict.dashboard5, ict.dashboard6, ict.dashboard7
    it('ICT Spreadsheet Essentials Certificate', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        cy.get('[data-cy="mylibrary"]').click({ force: true })
        cy.get('[data-cy="searchbox"]').type('ict')
        cy.get('[crn="ICT-spreadsheet-test"]').contains('Manage').click({ force: true })
        cy.contains('desk copy').click({ force: true })
        cy.wait(1000)
            //ict.dashboard3
        cy.get('#frontpage').should('be.visible')
        cy.wait(2000);
        cy.get('[data-cy=post_assesment]').click({ force: true })
        cy.wait(2000);
        cy.get('h1').contains('ICT Spreadsheet Essentials Certificate').should('be.visible')
        cy.wait(1000)
            //ict.dashboard4
        cy.get('#total_items_button').contains('30 items').should('be.visible')
        cy.wait(1000)
            //ict.dashboard5
        cy.get('.span5').contains('3 allowed attempts.').should('be.visible')
        cy.wait(1000)
            //ict.dashboard6
        cy.get('#test_mode').click({ force: true })
        cy.contains('Please click "Proctor login" button and ask proctor to login to unlock the test.').should('be.visible')
        cy.wait(1000)
            //ict.dashboard7
        cy.get('[data-target="#proctor_login_modal"]').click({ force: true })
    })
})