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
    it('opens Learn Mode, verifies feedback controls, and navigates questions', () => {
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

        cy.contains(/^\s*Learn\s*$/i, { timeout: 30000 })
            .last()
            .click({ force: true })

        cy.get('div[intro-id="item_info"]', { timeout: 30000 }).should('exist')
        cy.get('div[intro-id="timer"], [intro-id="timer"]').should('not.exist')

        cy.get('body').then(($body) => {
            if ($body.find('#learn').length) {
                cy.get('#learn').should('exist').then(($learn) => {
                    if (/submit/i.test($learn.text())) {
                        cy.wrap($learn).click({ force: true })
                        cy.get('#learn', { timeout: 30000 }).should(($retry) => {
                            expect($retry.text()).to.match(/retry/i)
                        })
                    }
                })
            }
        })

        cy.questionNavigation()
        StudentPage.endTest()
    })
})
