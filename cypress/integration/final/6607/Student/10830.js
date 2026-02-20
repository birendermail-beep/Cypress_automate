/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id: 10150
@story_id: 10830
@story_name: Access Practice Test in Test Mode
@path: final/6607/Student
@test_case_name: Access Practice Test in Test Mode.js
@test_steps:
    ^Open Practice Test test mode
    -description: Open Practice Test test mode
    -visit the website
    -Login into website
    -goto My library
    -Open a course which have practice test
    -Click on Practice Test
    -click on Practice Test A
    -Click on Test
    
    ^Test should open with timer, next button, previous button, end test , and settings button
    -description: Test should open with timer, next button, previous button, end test , and settings button
    -visit the website
    -Login into website
    -goto My library
    -Open a course which have practice test
    -Click on Practice Test
    -click on Practice Test A
    -Click on Test
    
    ^Timer will run during test
    -description: Timer will run during test
    -visit the website
    -Login into website
    -goto My library
    -Open a course which have practice test
    -Click on Practice Test
    -click on Practice Test A
    -Click on Test
    
    ^Test setting in Practice Test
    -description: Test setting in Practice Test
    -visit the website
    -Login into website
    -goto My library
    -Open a course which have practice test
    -Click on Practice Test
    -click on Practice Test A
    -Click on Test
    -Click on Test Setting
    
    ^We can set time limit of the test
    -description: We can set time limit of the test
    -visit the website
    -Login into website
    -goto My library
    -Open a course which have practice test
    -Click on Practice Test
    -click on Practice Test A
    -Click on Test Setting
    -check Timed test
    -adjust range to set time limit
    -click on start test
    
    ^We can open Practice test in review mode
    -description: We can open Practice test in review mode
    -visit the website
    -Login into website
    -goto My library
    -Open a course which have practice test
    -Click on Practice Test
    -click on Practice Test A
    -click on Practice Review
    
    ^By clicking on go back button we can go back to test prep cover
    -description: By clicking on go back button we can go back to test prep cover
    -visit the website
    -Login into website
    -goto My library
    -Open a course which have practice test
    -Click on Practice Test
    -click on Practice Test A
    -click on Practice Review
    -click on Go Back
@test_data: n/a
@result: Practice tests of Student Area
*/

import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
describe('This will test the practice tests', function() {
    beforeEach('This is login', function() {
            cy.fixture('global').then(data => {
                cy.visit(data.url)
            })
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            StudentPage.openurl()
            cy.get('[intro-id="practice_tests"] > .menu-item').click({ force: true })
        })
        /** ucertify-prep-51, ucertify-prep-52*/
    it('Open Practice Test test mode ', function() {
            cy.get('[data-cy="test_tests"]').eq(0).click()
            cy.get('#test_mode').click({ force: true })
            cy.get('#clock').should('be.visible')
            cy.get('#previous').should('be.visible')
            cy.get('#next').should('be.visible')
            cy.get('#show_result').should('be.visible')
            cy.get('.dropup').should('be.visible')
            cy.get('#show_result').click({ force: true })
            cy.wait(5000)
            cy.get('#btn-confirmed').click({ force: true })
        })
        /**ucertify-prep-53,ucertify-prep-54*/
        // it('Test setting in Practice Test', function() {
        //         cy.get('[data-cy="test_tests"]').eq(0).click({ force: true })
        //         cy.get('#testmodesetting').click({ force: true })
        //         cy.get('#test_mode_submit').click()
        //         cy.get('#show_result').click({ force: true })
        //         cy.get('#btn-confirmed').click({ force: true })
        //     })
        //     /**ucertify-prep-55,ucertify-prep-56*/
    it('We can open Practice test in review mode', function() {
        cy.get('[data-cy="test_tests"]').eq(0).click()
        cy.get('#review_mode').click({ force: true })
        cy.wait(5000)
        cy.get('.icomoon-24px-go-back-2').click({ force: true })
    })
})