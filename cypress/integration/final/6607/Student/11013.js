/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id: 9327
@story_id: 11013
@story_name: Item List
@path: final/6607/Student
@test_case_name: Item List.js
@description:
@test_steps:
^Item list in question area
-open any test and perform all the test
-click on left panel and see the all questions

@test_data: n/a
@result: test area will be open
*/
import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
describe('question.itemList1', function() {
    it('open any test and perform all the test, click on left panel and see the all questions, click any item to change the question', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            StudentPage.visitLOAplusCompleteCourse(data)
        })
        cy.get('[data-cy="practice_tests"]').click({ force: true })
        cy.get('[data-cy="test_tests"]').eq(0).click()
        cy.get('[data-cy=test_mode]').click({ force: true })
        cy.get('#userans-A').click({ force: true })
        cy.questionNavigation()
        cy.get('#btntxt').click({ force: true })
        cy.wait(7000);
        cy.contains('Which of the following are the benefits of virtualization?').click({ force: true })
        cy.get('#userans-B').click({ force: true })
        cy.get('#btntxt').click({ force: true })
        StudentPage.endTest()
    })
})