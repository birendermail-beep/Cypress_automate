/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id: 9327
@story_id: 10826
@story_name: Post Assessment in Test Mode
@path: final/6607/Student
@test_case_name: Post Assessment in Test Mode.js
@description: Open post assessment and verify navigation in test mode.
*/
import {
    Navbar,
    login_username,
    login_password,
    LoginPage,
    StudentPage,
} from '../../../../page-objects/pages/index'

describe('Post Assessment in Test Mode', () => {
    it('opens Post Assessment, navigates questions, and ends the test', () => {
        cy.visit('/')
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)

        cy.fixture('global').then((data) => {
            StudentPage.visitLOAplusCompleteCourse(data)
        })

        cy.get('body').then(($body) => {
            const selectors = [
                '[data-cy="post_assesment"]',
                '[data-cy="post_assessment"]',
                '[intro-id="post_assessment"]',
            ]
            const matchedSelector = selectors.find((selector) => $body.find(selector).length)

            if (matchedSelector) {
                cy.get(matchedSelector).first().should('be.visible').click({ force: true })
                return
            }

            cy.contains('a, button, [role="button"], .menu-item', /post\s*assessment/i)
                .first()
                .should('be.visible')
                .click({ force: true })
        })

        StudentPage.terminatePreAssessment()

        cy.get('#test_mode').should('be.visible').click({ force: true })
        cy.questionNavigation()
        StudentPage.endTest()
    })
})
