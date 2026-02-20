/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id: 9327(10478)
@story_id: 10979
@story_name:Reviewing items and explanation
@path: final/6607/Student
@test_case_name: Reviewing items and explanation
@description:
@test_steps:

^Reviewing items and explanation
-Perform any test.
-Click End test.
-Result page will appear, on result page, click on the Review items and explanation option.
-Review page will open with correct and incorrect answers marked for each question

^Result Page Again
-Perform any test.
-Click End test.
-Result page will appear, on result page, click on the Review items and explanation option.
-Review page will open with correct and incorrect answers marked for each question
-Click Results, it will redirect you to the result page again

^Go Back button
-Perform any test.
-Click End test.
-Result page will appear, on result page, click on the Review items and explanation option.
-Review page will open with correct and incorrect answers marked for each question
-Click Go Back, it will redirect you to the table of contents page.

@test_data: N/A
@result: test area will be open
*/
import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
describe('Review items and explanation in testing', function() {
    //Review items and explanation_1, Review items and explanation_2, Review items and explanation_3
    it('Review items and explanation', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            StudentPage.visitLOAplusCompleteCourse(data)
        })
        cy.get('[data-cy="practice_tests"]').click({ force: true })
        cy.get('[data-cy=test_tests]').eq(0).click()
        cy.get('[data-cy=learn_mode]').click({ force: true })
        cy.get('#userans-A').click({ force: true })
        cy.get('#next').click({ force: true })
        cy.get('#userans-C').click({ force: true })
        cy.get('#show_result').click({ force: true })
        //Pankaj:ucauto 
        cy.wait(8000);
        cy.get('#btn-confirmed').click({ force: true })
        cy.get('.icomoon-256px-practice-performance').click()
        cy.contains('Review items and explanations').click({ force: true })
        cy.wait(2000)
        cy.get('#end').click({ force: true })
        cy.get('.globalGoback').click({ force: true })
    })
})