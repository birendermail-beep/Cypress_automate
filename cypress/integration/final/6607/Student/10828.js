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

        cy.get('body').then(($body) => {
            const selectors = [
                '[data-cy="post_assesment"]',
                '[data-cy="post_assessment"]',
                '[intro-id="post_assessment"]',
            ]
            const matchedSelector = selectors.find((selector) => $body.find(selector).length)

            if (matchedSelector) {
                cy.get(matchedSelector).first().click({ force: true })
                return
            }

            const postAssessmentByText = $body
                .find('a, button, [role="button"], .menu-item, div')
                .filter((_, element) => /^\s*post\s*assessment\s*$/i.test(element.innerText || element.textContent || ''))

            if (postAssessmentByText.length) {
                cy.wrap(postAssessmentByText.last()).click({ force: true })
                return
            }

            throw new Error(`Post Assessment control not found. Current URL: ${window.location.href}`)
        })

        cy.get('body', { timeout: 30000 }).then(($body) => {
            if (/Last test was not completed\. Do you want to continue\?/i.test($body.text())) {
                const noButton = $body
                    .find('button, a, [role="button"]')
                    .filter((_, element) => /^\s*No\s*$/i.test(element.innerText || element.textContent || ''))

                if (noButton.length) {
                    cy.wrap(noButton.last()).click({ force: true })
                }
            }
        })

        cy.contains(/^\s*Review\s*$/i, { timeout: 30000 })
            .last()
            .click({ force: true })

        cy.get('div[intro-id="item_info"]', { timeout: 30000 }).should('exist')
        cy.get('div[intro-id="timer"], [intro-id="timer"]').should('not.exist')
        cy.get('#show_result').should('not.exist')
        cy.get('#learn').should('not.exist')

        cy.get('body').then(($body) => {
            const explanationSelectors = ['#item_explanation', '[data-cy="item_explanation"]', '[intro-id="item_explanation"]']
            const explanationSelector = explanationSelectors.find((selector) => $body.find(selector).length)

            if (explanationSelector) {
                cy.get(explanationSelector).should('exist')
            } else {
                cy.contains(/explanation|answer|solution/i).should('exist')
            }
        })

        cy.questionNavigation()

        cy.get('body').then(($body) => {
            const goBack = $body
                .find('a, button, [role="button"]')
                .filter((_, element) => /go\s*back|dashboard/i.test(element.innerText || element.textContent || ''))

            if (goBack.length) {
                cy.wrap(goBack.last()).should('exist')
            }
        })
    })
})
