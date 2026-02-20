/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id:
@story_id: 15024
@story_name: question area
@path: final/6607/Student
@test_case_name:question area
@description: N/A
@test_steps:
^add annotation in question title
-Open https://ucertify.com/ 
-Login with your account
-Click on My Library and search LO-Aplus-complete course 
-open any one course as student view then dashboard will be open 
-click on practice test and start the test
-and the test and goto to result page and click one question for review and annotation the question
-reload the question

^prityprint question 
-Open https://ucertify.com/ 
Login with your account
Click on My Library and search url + /?func=load_course&course_code=05olR&class_code=05raZ
open any one course as student view then dashboard will be open 
click on practice test A and and goto review mode and select question 18

^span tag
-Open https://ucertify.com/ 
-Login with your account
-Click on My Library and search 77-725-77-726
-open this this course and click on pre-assessment and start the test 
-then test area will be open and click on span tag (show figure)

^video in study planner
-Open https://ucertify.com/ 
-Login with your account
-Click on My Library and search pearson-N10-007-complete
-open study planner and click on video tab and play the video 

@test_data: n/a
@result: It will open the Calulator, on bottom toolbar.
*/
import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
describe('Student Area', function() {
    beforeEach('this is login', function() {
            cy.fixture('global').then(data => {
                cy.visit(data.url)
            })
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
        })
        //question area1
    it('add annotation in question titile', function() {
            cy.fixture('global').then(data => {
                StudentPage.visitLOAplusCompleteCourse(data)
            })
            cy.get('[data-cy=practice_tests]').click({ force: true })
            cy.get('[data-cy=test_tests]').eq(0).click()
            cy.get('[data-cy=test_mode]').click({ force: true })
            StudentPage.endTest()
            cy.contains('Review items and explanations').click({ force: true })
        })
        //question area2
    it('prityprint question', function() {
            cy.fixture('global').then(data => {
                StudentPage.visitLOAplusCompleteCourse(data)
            })
            cy.get('[data-cy=practice_tests]').click({ force: true })
            cy.get('[data-cy=test_tests]').eq(0).click()
            cy.get('[data-cy=review_mode]').click({ force: true })
            cy.get('#btntxt').click({ force: true })
            cy.wait(5000)
            cy.contains('Drag the power events to match them with their descriptions.').click({ force: true })
        })
        //question area3
    it('video in study planner', function() {
        cy.get('[data-cy=mylibrary]').click({ force: true })
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/?func=load_course&course=FC0-U51-complete&desk_copy=1')
        })
        cy.get('[data-cy=studyplanner]').click({ force: true })
    })
})