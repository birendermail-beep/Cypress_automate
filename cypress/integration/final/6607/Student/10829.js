/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id: 10150
@story_id: 10829
@story_name: Access Practice Test in Review Mode
@path: final/6607/Student
@test_case_name: Access Practice Test in Review Mode.js
@description: N/A
@test_steps:
^after opening practice test in review mode we will get some more controls
-visit the website
-Login into website
-goto My library
-Open a course which have practice test
-Click on Practice Test
-click on Practice Test A
-Click on learn

^After clicking on submit button, answer will review, compare the user answer with correct answer and display the description, and submit button converts into retry button
-visit the website
-Login into website
-goto My library
-Open a course which have practice test
-Click on Practice Test
-click on Practice Test A
-Click on learn
-Click on submit button

^by clicking on retry button we can reattempt the quiz
-visit the website
-Login into website
-goto My library
-Open a course which have practice test
-Click on Practice Test
-click on Practice Test A
-Click on learn
-Click on submit button
-click on retry button

^By clicking on next button, next question will come
-visit the website
-Login into website
-goto My library
-Open a course which have practice test
-Click on Practice Test
-click on Practice Test A
-Click on learn 
-click on next button

^By clicking on previous button previous question will display
-visit the website
-Login into website
-goto My library
-Open a course which have practice test
-Click on Practice Test
-click on Practice Test A
-Click on learn 
-click on previous button

^In setting here one more option is available (full-screen)
-visit the website
-Login into website
-goto My library
-Open a course which have practice test
-Click on Practice Test
-click on Practice Test A
-Click on learn 
-click on settings

^by clicking on full screen quiz should open in full screen mode
-visit the website
-Login into website
-goto My library
-Open a course which have practice test
-Click on Practice Test
-click on Practice Test A
-Click on learn 
-click on settings
-click on full screen

^we can revert full screen from settings
-visit the website
-Login into website
-goto My library
-Open a course which have practice test
-Click on Practice Test
-click on Practice Test A
-Click on learn 
-click on settings
-click on Revert

^by clicking on end test a popup will come with result, and ask for confirmation
-visit the website
-Login into website
-goto My library
-Open a course which have practice test
-Click on Practice Test
-click on Practice Test A
-Click on learn 
-click on end test

^in side pane, we can get all the, questions and some filter options (filter by bookmark, filter by confidence), all questions, filter by Attempted, filter by unattempted
-visit the website
-Login into website
-goto My library
-Open a course which have practice test
-Click on Practice Test
-click on Practice Test A
-Click on learn 
-click on open side pane

^in end test popup after clicking on "go to item list", will open side pane
-visit the website
-Login into website
-goto My library
-Open a course which have practice test
-Click on Practice Test
-click on Practice Test A
-Click on learn 
-click on end test
-click on go to item list

^we can filter item list by bookmarked items
-visit the website
-Login into website
-goto My library
-Open a course which have practice test
-Click on Practice Test
-click on Practice Test A
-Click on learn 
-click on open side pane
-click on three dots
-click on bookmark 

^we can filter item list by confidence items
-visit the website
-Login into website
-goto My library
-Open a course which have practice test
-Click on Practice Test
-click on Practice Test A
-Click on learn 
-click on open side pane
-click on three dots
-click on confidence

^we can filter item list by attempted items
-visit the website
-Login into website
-goto My library
-Open a course which have practice test
-Click on Practice Test
-click on Practice Test A
-Click on learn 
-click on open side pane
-click on attempted

^we can filter item list by not attempted items
-visit the website
-Login into website
-goto My library
-Open a course which have practice test
-Click on Practice Test
-click on Practice Test A
-Click on learn 
-click on open side pane
-click on not attempted

^after ending test you will be redirected to result
-visit the website
-Login into website
-goto My library
-Open a course which have practice test
-Click on Practice Test
-click on Practice Test A
-Click on learn 
-click on end test

^you can customize number of items by setting of quiz learn 
-visit the website
-Login into website
-goto My library
-Open a course which have practice test
-Click on Practice Test
-click on Practice Test A
-Click on setting icon (learn setting)

^To check in Review mode answer explanation is available  without attempting any question
-Go to Practice Test 
-Attempt any of the practice test in Review mode 
-Check if the answer explanation is given without attempting the question

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
        //ucertify-prep-33,ucertify-prep-34,ucertify-prep-35,ucertify-prep-36,
        //ucertify-prep-37,ucertify-prep-38,ucertify-prep-39,40,44,45
    it('after opening practice test in review mode we will get some more controls', function() {
            cy.get('[data-cy="test_tests"]').eq(0).click()
            cy.get('#learn_mode').click({ force: true })
            cy.get('#learn').click({ force: true })
            cy.get('#learn').click({ force: true })
            cy.questionNavigation()
            cy.get('.icomoon-new-24px-gear-1').click({ force: true })
            cy.wait(3000)
            cy.get('.icomoon-new-24px-expand-2').click({ force: true })
            cy.wait(3000)
            cy.get('[data-cy="tripple_dot"]').eq(0).click({ force: true })
            cy.wait(3000)
            cy.get('.popover-body > :nth-child(4) > .dot').click({ force: true })
            cy.get('.popover-body > .mb-md > .float-left').click({ force: true })
            cy.wait(3000)
            cy.get('#show_result').click({ force: true })
            cy.wait(5000);
            cy.get('#btn-confirmed').click({ force: true })
        })
        /**ucertify-prep-41,ucertify-prep-42,ucertify-prep-43,ucertify-prep-48  */
    it('by clicking on end test a popup will come with result, and ask for confirmation', function() {
            cy.get('[data-cy="test_tests"]').eq(0).click()
            cy.get('#learn_mode').click({ force: true })
            cy.get('#learn').click({ force: true })
            cy.get('#learn').click({ force: true })
            cy.get('#btntxt').click({ force: true })
            cy.wait(5000)
            cy.contains('Attempted').click({ force: true })
            cy.contains('Unattempted').click({ force: true })
            cy.get('#btntxt').click({ force: true })
            cy.get('#show_result').click({ force: true })
            cy.wait(5000);
            cy.get('#btn-confirmed').click({ force: true })
        })
        /**ucertify-prep-49  */
        // it.only('you can customeze number of items by setting of quiz learn ', function() {
        //         cy.get('[data-cy="test_tests"]').eq(0).click({ force: true })
        //         cy.get('#learnmodesetting').click({ force: true })
        //     })
        /**ucertify-prep-50 */
    it('Open Practice Test test mode ', function() {
        cy.get('[data-cy="test_tests"]').eq(0).click()
        cy.get('#test_mode').click({ force: true })
        cy.get('#show_result').click({ force: true })
        //Pankaj:ucauto 
        cy.wait(6000);
        cy.get('#btn-confirmed').click({ force: true })
    })

})