/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id: 9327
@story_id: 10856
@story_name: Filter Test History
@path: final/6607
@test_case_name: Filter Test History.js
@description: n/a
@test_steps:
^Filter test history
-visit the website
-login into page
-Perform any test.
-filter the test history according these 3 option 

^Search test in history
-visit the website
-login into page
-Perform any test.
-you can search the test history 

^filter test using test mode
-visit the website
-login into page
-Perform any test.
-you can filter the test according test mode and test type
    
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
    })

    //Test history, test.history1.1, test.history1.2, test.history1.3
    it('Go to test history', function() {
            StudentPage.openurl()
            cy.get('[intro-id="practice_tests"] > .menu-item').click({ force: true })
            cy.get('[data-cy=test_tests]').eq(0).click()
            cy.get('#learn_mode').click({ force: true })
            cy.get('.icomoon-24px-end-1').click()
            cy.wait(5000)
            cy.get('#btn-confirmed').click({ force: true })
            cy.get('.icomoon-256px-practice-performance').click()
            cy.contains('Go to test history').click({ force: true })
            cy.get('#search').type('Practice')
            cy.get('#test_mode_select').select('Test Mode', { force: true })
            cy.get('#test_type_select').select('Practice Test A', { force: true })
        })
        //test.history2,test.history2.1,test.history2.2,test.history2.3,test.history2.4
    it('click on setting button to open settings', function() {
        StudentPage.openurl()
        cy.get('[intro-id="practice_tests"] > .menu-item').click({ force: true })
        cy.get('[data-cy=test_tests]').eq(0).click()
        cy.get('#learn_mode').click({ force: true })
        StudentPage.endTest()
        StudentPage.goTotest()
        cy.contains('Result').eq(0).click()
        StudentPage.goTotest()
        cy.contains('Review').eq(0).click({ force: true })
        cy.get('.icomoon-new-24px-gear-1').eq(0).click({ force: true })
        cy.contains('Retest All').eq(0).click({ force: true })
        StudentPage.endTest()
        StudentPage.goTotest()
        cy.contains('Retest Wrong').click({ force: true })
        StudentPage.endTest()
    })
    it('Filter the items', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/?func=load_course&course_code=02pzx&class_code=04ehS')
            //Pankaj:ucauto 
            // cy.visit(data.url + '/?action=analytics')
            cy.visit(data.url + '/app/?func=start_performance')
        })
        //Pankaj:ucauto 
        // cy.get('a.btn.btn-primary:contains("Review")').eq(0).click()
        cy.get('#test_mode_select').select(1,{force: true})
        cy.get('#tablen > tbody > tr > td:nth-child(2) > span')
    })
})