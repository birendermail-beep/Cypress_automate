/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id: 10269
@story_id: 12300
@story_name: Answer Saving in Knowledge Check
@path: final/6607/Student
@test_case_name: Answer Saving in Knowledge Check.js
@description: N/A
@test_steps:

^Knowledge Check Result Saving by submit button.
-Open https://ucertify.com//
-Go to my libraries
-Open any prepkit
-Go to Chapter & Lessions
-Click on chapter in which knowledge checks are assigned
-Attempt any question and click on Submit button
-Now go back to TOC area
-Again open that chapter in which you have attempted that knowledge check.

^Knowledge Check Result Saving by navigation button.
-Open https://ucertify.com//
-Go to my libraries
-Open any prepkit
-Go to Chapter & Lessions
-Click on chapter in which knowledge checks are assigned
-Attempt any question and click on Next button or Previous button
-Now go back to TOC area
-Again open that chapter in which you have attempted that knowledge check.

^knowledge-check-test-session-integration
-Open jigyaasa.info
-Open any prepkit which have algotithmic question
-give some answer
-click on submit button
-go to toc pannel
-re open that chapter which have you attempted knowledge check

@test_data: n/a
@result: Knowledge check should have it's previous answer, given by you.
*/
import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index' 
describe('knowledge check area testing', function() {
    beforeEach('This is login', function() {
            cy.fixture('global').then(data => {
                cy.visit(data.url)
                Navbar.clickOnLogin()
                LoginPage.loginPage(login_username, login_password)
                cy.get('[data-cy="mylibrary"]').click({ force: true })
            })
        })
        //knowledge-check-21
        it('Knowledge Check Result Report 1', function() {
            cy.fixture('global').then(data => {
                cy.get('[data-cy="searchbox"]').type('CISSP')
                cy.get('[crn="CISSP-2015"]').contains('Manage').click({ force: true })
                cy.visit(data.url + '/?func=load_course&course=CISSP-2015&class_code=' + data.class_code[7])
                cy.get('[data-cy=studyplanner]').click({ force: true })
                cy.scrollTo("25%", "25%")
            })
        })
        //knowledge-check-22,knowledge-check-23
    it('Knowledge Check Result Report 2', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/?func=load_course&course=LO-Aplus-complete&class_code=05qrv');
        });
            cy.get('.btn_section > [intro-id="manage_as_instructor"]').click({ force: true })
        cy.get('[aria-label="Track"]').click({ force: true })
        cy.get('[aria-label="Lessons"]').click({ force: true })
            //knowledge-check-23
        cy.get('[aria-label="Track"]').click({ force: true })
        cy.get('[aria-label="Analytics"]').contains('Analytics').click({ force: true })
        cy.get('.show > :nth-child(6) > .dropdown-item').contains('Study Plan').click({ force: true })
        cy.wait(5000);
        cy.scrollTo("20%", "20%")
    })
})