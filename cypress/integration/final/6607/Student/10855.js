import { startPracticeLearn } from '../../../../support/student-practice'
/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id: 9327
@story_id: 10855
@story_name: Open Test History
@path: final/6607
@test_case_name: Open Test History.js
@description: n/a
@test_steps:

^Open test history page right data
-visit the website
-login into page
-Perform any test.
-Click End test.
-Result page will appear, on result page
-click on Improve Your Performance
-click on the Go to test history option.
-Test history page will open with history of all tests
-type search button
-select the test mode and type check the page

^Open test history page wrong data
-visit the website
-login into page
-Perform any test.
-Click End test.
-Result page will appear, on result page
-click on Improve Your Performance
-click on the Go to test history option.
-Test history page will open with history of all tests
-type search button
-select the test mode and type check the page

^open Test Performance page
-visit the website
-login into page
-Perform any test.
-Click End test.
-Result page will appear, on result page
-click on Improve Your Performance
-click on the Go to test history option.
-click on test performance
-check data visible or not

^open Activity Time Spent Report
-visit the website
-login into page
-Perform any test.
-Click End test.
-Result page will appear, on result page
-click on Improve Your Performance
-click on the Go to test history option.
-click on Activity Time Spent Report
-check data visible or not

^open Activity Time Spent Report
-visit the website
-login into page
-Perform any test.
-Click End test.
-Result page will appear, on result page
-click on Improve Your Performance
-click on the Go to test history option.
-click on Class Ranking Report
-check data visible or not

@test_data: n/a
@result: Open test history page
*/

import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
describe('Test history testing area', function() {
    beforeEach('This is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        startPracticeLearn()
        StudentPage.endTest()

        cy.get('.icomoon-256px-practice-performance').click()
        cy.contains('Go to test history').click({ force: true })
    })

    it('Open test history page right data', function() {
        cy.get('#search').type('Practice')
        cy.get('#test_mode_select').select('Test Mode', { force: true })
        cy.get('#test_type_select').select('Practice Test A', { force: true })
        cy.get('.table-responsive').should('be.visible')
    })

    it('Open test history page wrong data', function() {
        cy.get('#performance').click()
        cy.get('#test_history').click()
        cy.get('#search').type('jsjfd')
        cy.get('#test_mode_select').select('Review Mode', { force: true })
        cy.get('#test_type_select').select('Practice Test A', { force: true })
        cy.contains('No Record Found').should('be.visible')
    })

    it('open Test Performance page', function() {
        cy.get('#performance').click()
        cy.get('#container_graph').should('be.visible')
    })

    it('open Activity Time Spent Report', function() {
        cy.get('#module_report').click()
        cy.get('.table-responsive').should('be.visible')
    })

    it('open Class Ranking Report', function() {
        cy.get('#class_ranking').click()
        cy.get('.alert-secondary').should('be.visible')
    })
})