/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id: 9327
@story_id: 10828
@story_name: Access Post Assessment in Review Mode
@path: final/6607/Student
@test_case_name: Access Post Assessment in Review Mode.js
@description: Verify Review Mode behavior and question navigation in Post Assessment.
*/
import {
    Navbar,
    login_username,
    login_password,
    LoginPage,
    StudentPage,
} from '../../../../page-objects/pages/index'

describe('Post Assessment in Review Mode', () => {
    it('opens Review Mode and verifies review-only controls', () => {
        cy.visit('/')
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)

        cy.fixture('global').then((data) => {
            StudentPage.visitLOAplusCompleteCourse(data)
        })

        cy.get('[data-cy="post_assesment"]').should('be.visible').click({ force: true })
        StudentPage.terminatePreAssessment()

        cy.get('#review_mode').should('be.visible').click({ force: true })
        cy.get('div[intro-id="timer"]').should('not.exist')
        cy.get('#show_result').should('not.exist')
        cy.get('a[intro-id="global_goback"]').contains('Go Back').should('be.visible')
        cy.get('#learn').should('not.exist')
        cy.get('#item_explanation').should('exist')

        cy.questionNavigation()

        cy.get('.pb-xl > :nth-child(2) > .outline1')
            .should('have.attr', 'href')
            .then((lessonUrl) => {
                cy.visit(lessonUrl)
            })
    })
})
