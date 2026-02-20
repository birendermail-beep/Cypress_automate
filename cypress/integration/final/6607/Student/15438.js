/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id: 9327
@story_id: 15438
@story_name: Bookmark Question
@path: final/6607/Student
@test_case_name: Bookmark Question.js
@description:
@test_steps:
^Bookmark Question
-login in website
-click on practic test
-click on test mode
-click three dots and then yes on bookmark
-click on next button 
-click on previous button
-click on end test

@test_data: n/a
@result: test area will be open
*/
import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
describe('question.itemList1', function() {
    it('click three dots and then yes on bookmark, click three dots and then yes on confidence, click three dots and then type the notes ', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            StudentPage.visitLOAplusCompleteCourse(data)
        })
        cy.get('[data-cy="practice_tests"]').click({ force: true })
        cy.get('[data-cy="test_tests"]').eq(0).click()
        cy.get('[data-cy=test_mode]').click({ force: true })
        cy.get('[data-cy=tripple_dot]').click({ force: true })
        cy.get('.popover-body > :nth-child(4) > .dot').click({ force: true })
        cy.get('.popover-body > .mb-md > .float-left').click({ force: true })
        cy.get('.popover-body > :nth-child(6) > #textarea_notes').clear().type('yes')
        cy.get("#next").click({ force: true })
        cy.get('#previous').click({ force: true })
        StudentPage.endTest()
    })
})