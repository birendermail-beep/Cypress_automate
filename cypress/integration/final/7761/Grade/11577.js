/*
@author: Anirudha Pratap
@master_project_id: 7761
@phase_id: n/a
@story_id: 11577
@story_name: Sync Grade LMS
@path: final/7761/Grade
@test_case_name: Sync Grade LMS.js
@description:
@test_steps: 
^Log in into LMS
-Use LMS student account for checking this step https://canvas.instructure.com/ 
-Useremail - shashank.gupta@ucertify.com 
-Password - ucertify
-Select the canvas course "uCertify_grade_sync"
-Click on the assignment tab 

^Load assignmnet and sync grade
-Load the assignmnet and redirect to the uCertify
-Attempte the test 
-End the test

^Load assignmnet and sync grade
-Follow the test cas TC_SG_02 for all test items Card, Quiz, Exercise, Lab, Pre-assessment, Post-assessment, Virtual lab, Assessment, Ebook, Dashboard

^Load Gradebook
-Log in into the LMS 
-Click on the Gradebook Link 
-You will redirect to the gradebook

^Enroll
-If user is not enrolled in current course, user should enroll with instructor permission in current course
-If user has already enrolled, enrollment date of should not be change means user should not re-enroll in ame course.  

^Create new class
-If class is not created, new class should be created. 
-Redirect to the gradebook page

^Create assignments & sync grade
-Click the Sync all button
-All assignments will be created if not created before
-Grade will be sync with lms

^Create assignments & sync grade
-Click the Sync button
-All green cell assignments will be created if not created before
-Grade will be sync with lms of all green cell in the table

^LTI Grade Sync
-Please follow the steps 4014 to 4019 to check grade sync work

^LTI Grade Sync
-Do direct login and load 101-400-complete course
-Go to Chapter 2 Quiz
-Attempt and end this test

^Load Sync Grade for student
-Do direct login and load 101-400-complete course
-Go to Chapter 2 Quiz
-Attempt and end this test

^Sync Grade
-Click on Sync button to sync grades with the LMS

^Load Sync Grade for instrctor
-Log in into LMS using provided details
-Use direct URL to load gradebook in canvas
-Click on Load Gradebook LTI button
-Gradebook will be opened in new tag
-Click on Gradebook drop down
-Select Sync Grade option
-Sync grade page will be loaded

^Sync Grade
-Click on Sync button to sync grades with the LMS

^Change student data
-Click on student name to load the student data

^Lab Grade Syncing
-Use LMS student account for checking this step https://canvas.instructure.com/ 
-Useremail - shashank.gupta@ucertify.com 
-Password - ucertify
-Select the canvas course "uCertify_grade_sync"
-Click on the assignment tab 
-Click on the Lab link and you will be redirected to the uCertify
-Open a lab, attempt this lab and close the browser tab directly
Resul: Lab grade will be synced with the LMS

@test_data: n/a
@result: Load assignments created on the canvas
*/
import { Navbar, login_username, login_password, LoginPage, OrderbookPage } from '../../../../page-objects/pages/index'
describe('grade sync area', function() {
    //TC_SG_01
    it('Log in into LMS', function() {
        OrderbookPage.gradeSync()
        cy.get('[aria-label="uCertify: Grade Sync"]').contains('uCertify_grade_sync').click({ force: true })
        cy.get(':nth-child(2) > .fOyUs_fKyb').click({ force: true })
        cy.wait(3000)
        cy.get('.tour-close-button > .ejhDx_bGBk > .fOyUs_fKyb').click({ force: true })
        cy.get('.assignments').click({ force: true })
            //TC_SG_02, TC_SG_03  Load assignmnet and sync grade
            //click on tests
        cy.get('#assignment_12332711 > .ig-row__layout > .ig-info > .ig-title').click({ force: true })
        cy.get('.btn').click({ force: true })
            //click on assignments
        cy.get(':nth-child(2) > .assignments').click({ force: true })
        cy.get('#assignment_11458060 > .ig-row__layout > .ig-info > .ig-title').click({ force: true })
            //click on dashboard
        cy.get(':nth-child(2) > .assignments').click({ force: true })
        cy.get('#assignment_11458059 > .ig-row__layout > .ig-info > .ig-title').click({ force: true })
            //click on ebook
        cy.get(':nth-child(2) > .assignments').click({ force: true })
        cy.get('#assignment_12966267 > .ig-row__layout > .ig-info > .ig-title').click({ force: true })
            //click on live lab
        cy.get(':nth-child(2) > .assignments').click({ force: true })
        cy.get('#assignment_12332710 > .ig-row__layout > .ig-info > .ig-title').click({ force: true })
        cy.get('.btn').click({ force: true })
            //click on post assessment
        cy.get(':nth-child(2) > .assignments').click({ force: true })
        cy.get('#assignment_12332715 > .ig-row__layout > .ig-info > .ig-title').click({ force: true })
        cy.get('.btn').click({ force: true })
            //click on Card
        cy.get(':nth-child(2) > .assignments').click({ force: true })
        cy.get('#assignment_11458070 > .ig-row__layout > .ig-info > .ig-title').click({ force: true })
        cy.get('.btn').click({ force: true })
            //click on Lab
        cy.get(':nth-child(2) > .assignments').click({ force: true })
        cy.get('#assignment_11458072 > .ig-row__layout > .ig-info > .ig-title')
            //click on exercise
        cy.get(':nth-child(2) > .assignments').click({ force: true })
        cy.get('#assignment_11458067 > .ig-row__layout > .ig-info > .ig-title').click({ force: true })
        cy.get('.btn').click({ force: true })
            //click on quiz
        cy.get(':nth-child(2) > .assignments').click({ force: true })
        cy.get('#assignment_11458069 > .ig-row__layout > .ig-info > .ig-title').click({ force: true })
        cy.get('.btn').click({ force: true })
    })
})