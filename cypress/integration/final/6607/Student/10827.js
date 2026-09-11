/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id: 9327
@story_id: 10827
@story_name: Post Assessment in Learn Mode
@path: final/6607/Student
@test_case_name: Post Assessment in Learn Mode.js
@description: Verify Learn Mode behavior in Post Assessment.
*/
import {
    Navbar,
    login_username,
    login_password,
    LoginPage,
    StudentPage,
} from '../../../../page-objects/pages/index'

describe('Post Assessment in Learn Mode', () => {
    it('opens Learn Mode, shows Retry after submit, and navigates questions', () => {
        cy.visit('/')
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)

        cy.fixture('global').then((data) => {
            StudentPage.visitLOAplusCompleteCourse(data)
        })

        cy.get('[data-cy="post_assesment"]').should('be.visible').click({ force: true })
        StudentPage.terminatePreAssessment()

        cy.get('#learn_mode').should('be.visible').click({ force: true })
        cy.get('#show_result').should('exist')
        cy.get('#learn').should('exist').contains('Submit').click({ force: true })
        cy.get('#learn').contains('Retry').should('be.visible')
        cy.get('div[intro-id="timer"]').should('not.exist')

        cy.questionNavigation()
        StudentPage.endTest()
    })
})
