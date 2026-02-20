/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id: 9327
@story_id: 11027
@story_name: ICT practice test
@path: final/6607/Student
@test_case_name: ICT practice test.js
@description: only show the practice test and certificate test on dashboard
@test_steps:

^restricted in items
-Open https://ucertify.com/ 
-Login with your account
-Click on My Library and search ICT course as -test  (you can open any one)
-open any one  ict course as student view then dashboard will be open 
-click on practice test

@test_data: n/a
@result: ICT courses dahboard will open.
*/

import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
describe('ebook area testing', function() {

    //ict.dashboard10,ict.dashboard11,ict.dashboard12
    it('ICT courses dahboard', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        cy.get('[data-cy="mylibrary"]').click({ force: true })
        cy.get('[data-cy="searchbox"]').type('ict')
        cy.get('[crn="ICT-spreadsheet-test"]').contains('Manage').click({ force: true })
        cy.contains('desk copy').click({ force: true })
        cy.get('[data-cy=practice_tests]').click({ force: true })
        cy.get(':nth-child(1) > center > .test_title > div').should('be.visible')
        cy.get('[data-cy="test_tests"]').eq(0).click()
            //ict.dashboard13
        cy.get('[data-cy=test_mode]').click({ force: true })
        StudentPage.endTest()
        cy.get('.col-lg-12 > .text-center').should('be.visible')
    })
})