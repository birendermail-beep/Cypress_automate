/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id: 9327(10478)
@story_id: 15434
@story_name: Retake test - incorrect items
@path: final/6607/Student
@test_case_name: Retake test - incorrect items
@description: Retake test - incorrect items
@test_steps:
^Retake test - incorrect items
-Perform any test.
-Click End test.
-Result page will appear, on result page, click on the Retake test - incorrect items option.
-Test will start with incorrect and unattempted question of the test.

@test_data: N/A
@result: test area will be open
*/
import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
describe('Retake test - incorrect items', function() {
    //question.result8
    it('click on retake test - incorrect items', function() {
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
        cy.wait(6000);
        cy.get('#btn-confirmed').click({ force: true })
        cy.get('.icomoon-256px-practice-performance').click()
        cy.contains('Retake test - incorrect items').click({ force: true })
        cy.get('#show_result').click({ force: true })
        //Pankaj:ucauto
        cy.wait(6000);
        cy.get('#btn-confirmed').click({ force: true })
    })
})