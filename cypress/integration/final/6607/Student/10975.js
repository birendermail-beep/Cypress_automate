/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id: 10150
@story_id: 10975
@story_name: Prepengine Test
@path: final/6607/Student
@test_case_name: Prepengine Test
@description: N/A
@test_steps:

^Opening PrepEngine
-Open https://ucertify.com/
-Login with your account
-Click on My Library
-Select Any of your ebook
-Now Click on Practice Test

^Check Resume Test prep Button
-Open https://ucertify.com/
-Login with your account
-Click on My Library
-Select Any of your ebook
-Now Click on Practise Test
-Click on Resume Test Prep Wheel

^Check Text to  audio button
-Open https://ucertify.com/
-Login with your account
-Click on My Library
-Select Any of your ebook
-Now Click on Practice Test
-Click on Resume Test Prep Wheel
-Click on Little Play Button displayed before Question snippet

^Check Book Mark is working fine or not
-Open https://ucertify.com/
-Login with your account
-Click on My Library
-Select Any of your ebook
-Now Click on Practice Test
-Click on Resume Test Prep Wheel
-Click on Three dots (bookmark button) before question snippet

^Item List Slide Bar Working
-Open https://ucertify.com/
-Login with your account
-Click on My Library
-Select Any of your ebook
-Now Click on Practice Test
-Click on Resume Test Prep Wheel
-Click on Item List icon placed on the very left center of the page

^Attempt a question with wrong answer with animation
-Open https://ucertify.com/
-Login with your account
-Click on My Library
-Select Any of your ebook
-Now Click on Practice Test
-Click on Resume Test Prep Wheel
-Select your Incorrect Answer
-Click on next button

^Attempt a question with correct answer with animation
-Open https://ucertify.com/
-Login with your account
-Click on My Library
-Select Any of your ebook
-Now Click on Practice Test
-Click on Resume Test Prep Wheel
-Select your Correct Answer
-Click on next button

^Master question
-Open test Prep
-Attempt a question 3 times correct

^Check End Test Button in test prep
-Open https://ucertify.com/
-Login with your account
-Click on My Library
-Select Any of your ebook
-Now Click on Practice Test
-Click on Resume Test Prep Wheel
-Select your Correct Answer
-Click on End Test button

^Check Settings Button
-Open https://ucertify.com/
-Login with your account
-Click on My Library
-Select Any of your ebook
-Now Click on Practice Test
-Click on Resume Test Prep Wheel
-Select your Correct Answer
-Click on Settings

^Font And Color Settings
-Open https://ucertify.com/
-Login with your account
-Click on My Library
-Select Any of your ebook
-Now Click on Prective Test
-Click on Resume Test Prep Wheel
-Select your Correct Answer
-Click on Settings
-Select Font and Color Settings

^Enhance Accessbility
-Open https://ucertify.com/
-Login with your account
-Click on My Library
-Select Any of your ebook
-Now Click on Practice Test
-Click on Resume Test Prep Wheel
-Select your Correct Answer
-Click on Settings
-Select Enhance Accessbility

^Keyboard
-Open https://ucertify.com/
-Login with your account
-Click on My Library
-Select Any of your ebook
-Now Click on Practice Test
-Click on Resume Test Prep Wheel
-Select your Correct Answer
-Click on Settings
-Select Keyboard

^Reset TestPrep button
-Open https://ucertify.com/
-Login with your account
-Click on My Library
-Select Any of your ebook
-Now Click on Practice Test
-Click on Reset Test Prep
-Click on OK

^Check Test Sets
-Open https://ucertify.com/
-Login with your account
-Click on My Library
-Select Any of your ebook
-Now Click on Practice Test
-Click on a test set

^Learn in Test Prep
-Open https://ucertify.com/
-Login with your account
-Click on My Library
-Select Any of your ebook
-Now Click on Practice Test
-Click on a test set
-Click on Learn

^End Test in learn mode
-Open https://ucertify.com/
-Login with your account
-Click on My Library
-Select Any of your ebook
-Now Click on Practice Test
-Click on a test set
-Click on Learn
-Click on End Test

@test_data: N/A
@result: Prepengine opens properly
*/
import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
describe('PrepEngine area testing', function() {
    beforeEach('This is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            StudentPage.visitCourse(data.url)
        })
    })

    //prepengine_1, prepengine_2, prepengine_3
    it('Will open prepengine, We will ckick on Resume Test Prep to perform test prep,We will check text to speach functionality is working  or not', function() {
            cy.get('[data-cy="practice_tests"]').click({ force: true })
            cy.get('#start_test > .icomoon-play-4').click()
            cy.get('[aria-label="Read text"]').click({ force: true })
        })
        //prepengine_4, prepengine_5
    it('Will check thatt book mark is working fine or not, We will check Item list slide bar is working or not ', function() {
            cy.get('[data-cy="practice_tests"]').click({ force: true })
            cy.get('#start_test > .icomoon-play-4').click()
            cy.get('[data-cy="tripple_dot"]').click({ force: true })
            cy.get('[aria-label="Open Item List"]').click({ force: true })
        })
        //prepengine_6, prepengine_7
    it('We will check question result is coming correct or not', function() {
            cy.get('[data-cy="practice_tests"]').click({ force: true })
            cy.get('#start_test > .icomoon-play-4').click()
            cy.wait(5000)
            cy.get('#userans-A').click({ force: true })
            StudentPage.clickOnNext()
            cy.get('#userans-B').click({ force: true })
            StudentPage.clickOnNext()
        })
        //prepengine_8
    it('Check End Test Button in test prep', function() {
            cy.get('[data-cy="practice_tests"]').click({ force: true })
            cy.get('#start_test > .icomoon-play-4').click()
            //cy.get('#userans-A').click({ force: true })
            StudentPage.clickOnNext()
            cy.wait(9000)
            cy.get('#show_result').click({ force: true })
            cy.wait(9000)
            cy.get('[data-cy=yesbutton]').click({ force: true })
        })
        //prepengine_9, prepengine_10
    it('by clicking on settins button we will find three options Keyboard, Enhance Accessbility, Font and color setting', function() {
            cy.get('[data-cy="practice_tests"]').click({ force: true })
            cy.get('#start_test > .icomoon-play-4').click()
            cy.get('#userans-A').click({ force: true })
            StudentPage.clickOnNext()
            cy.get('#got_it').click({ force: true })
            cy.get('.icomoon-new-24px-gear-1').click({ force: true })
            cy.get('#fcs').click({ force: true })
        })
        // prepengine_11
    it('By clicking on enhance accessibility you can adjust animation and accessibility of our webpage', function() {
            cy.get('[data-cy="practice_tests"]').click({ force: true })
            cy.get('#start_test > .icomoon-play-4').click()
            cy.wait(10000)
            cy.get('#userans-A').click({ force: true })
            StudentPage.clickOnNext()
            cy.get('#got_it').click({ force: true })
            cy.get('.icomoon-new-24px-gear-1').click({ force: true })
            cy.get('#acs').click({ force: true })
        })
        // prepengine_12
    it('By clicking on Keyboard we can see all the keyboard shortcuts of our webpage', function() {
            cy.get('[data-cy="practice_tests"]').click({ force: true })
            cy.get('#start_test > .icomoon-play-4').click()
            cy.get('#userans-A').click({ force: true })
            StudentPage.clickOnNext()
            cy.get('#got_it').click({ force: true })
            cy.get('.icomoon-new-24px-gear-1').click({ force: true })
            cy.get('#kbd').click({ force: true })

        })
    //     // prepengine_13, prepengine_14 // Settign button removed form test area.
    // it('By clicking on setting icon we can manage settings of test prep, and clicking on reset quiz', function() {
    //         cy.fixture('global').then(data => {
    //             cy.visit(data.url + '/?func=load_course&course_code=04XgQ&class_code=05PwV')
    //         })
    //         cy.get('[data-cy="practice_tests"]').click({ force: true })
    //         cy.get('[aria-label="Settings"]').click({ force: true })
    //         cy.get('#reset_quiz_option').click({ force: true })
    //         cy.get('[data-cy=yesbutton]').click({ force: true })
    //     })

        // prepengine_15, prepengine_16, prepengine_17, prepengine_18,
    // it.only('There are several test sets in Test Prep, by selecting pertucular you can access only questions of those test sets', function() {
    //     cy.get('[data-cy="practice_tests"]').click({ force: true })
    //     cy.get('[data-cy="test_tests"]').eq(0).click({ force: true })
    //     cy.get('[data-cy=learn_mode]').click({ force: true })
    //     cy.get('.icomoon-new-24px-gear-1').click({ force: true })
    //     cy.contains('Full Screen').should('be.visible')
    //     cy.get('#show_result').click({ force: true })
    //     cy.get('#btn-confirmed').click({ force: true })
    // })
})