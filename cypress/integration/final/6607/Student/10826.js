/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id: 9327
@story_id: 10826
@story_name: Post Assessment - Test, Learn and Review Modes
@path: final/6607/Student
@test_case_name: Post Assessment all modes.js
@description: Verify Test Mode, Learn Mode, Review Mode, and finish on the course Dashboard in one end-to-end flow.
*/
import {
    Navbar,
    login_username,
    login_password,
    LoginPage,
    StudentPage,
} from '../../../../page-objects/pages/index'
import { visitDemoCourse } from '../../../../support/student-auth'

describe('Post Assessment - all modes', () => {
    const openPostAssessment = () => {
        cy.get('body').then(($body) => {
            const selectors = [
                '[data-cy="post_assessment"]',
                '[data-cy="post_assesment"]',
                '[intro-id="post_assessment"]',
            ]
            const matchedSelector = selectors.find((selector) => $body.find(selector).length)

            if (matchedSelector) {
                cy.get(matchedSelector)
                    .first()
                    .should('have.attr', 'href')
                    .and('include', 'func=start_test')
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
    }

    const discardIncompleteTestIfPresent = () => {
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
    }

    const selectMode = (mode) => {
        const modeSelectors = {
            Test: '#test_mode',
            Learn: '#learn_mode',
            Review: '#review_mode',
        }
        const selector = modeSelectors[mode]

        cy.get('body', { timeout: 30000 }).then(($body) => {
            if ($body.find(selector).length) {
                cy.get(selector).first().click({ force: true })
                return
            }

            cy.contains('button, a, [role="button"], div', new RegExp(`^\\s*${mode}\\b`, 'i'), { timeout: 30000 })
                .filter(':visible')
                .last()
                .click({ force: true })
        })
    }

    // Query again while navigation controls render after a page transition.
    const clickNavigationControl = (labelPattern) => {
        return cy.get('body', { timeout: 30000 })
            .find('*', { timeout: 30000 })
            .filter((_, element) => {
                const text = (element.innerText || element.textContent || '')
                    .replace(/\s+/g, ' ')
                    .trim()
                return Cypress.$(element).is(':visible') && labelPattern.test(text)
            }, { timeout: 30000 })
            .should('have.length.at.least', 1)
            .last()
            .then(($label) => {
                const $control = $label.closest('a, button, [role="button"], [onclick]')
                return cy.wrap($control.length ? $control : $label)
                    .should('be.visible')
                    .click()
            })
    }

    const clickGoBack = () => clickNavigationControl(/^GO\s*BACK(?:\s+TO\s+TEST\s+SELECTION)?$/i)


    const finishOnDashboard = () => {
        clickGoBack()
        cy.location('search', { timeout: 30000 })
            .should('match', /action=cover|func=load_course/i)
        cy.contains(/POST\s*ASSESSMENT/i, { timeout: 30000 }).should('exist')
        cy.contains(/PRACTICE\s*TESTS/i).should('exist')
    }

    it('runs Test Mode, Learn Mode, Review Mode, then finishes on Dashboard', () => {
        visitDemoCourse()

        // TEST MODE
        openPostAssessment()
        discardIncompleteTestIfPresent()
        selectMode('Test')

        cy.get('div[intro-id="item_info"]', { timeout: 30000 }).should('exist')
        cy.get('div[intro-id="timer"], [intro-id="timer"]', { timeout: 30000 }).should('exist')
        cy.get('#previous').should('be.disabled')
        cy.questionNavigation()

        cy.get('#btntxt', { timeout: 30000 }).should('exist').click({ force: true })
        cy.contains(/Attempted/i).should('exist')
        cy.contains(/Unattempted/i).should('exist')
        cy.get('#btntxt').click({ force: true })

        StudentPage.endTest()
        clickGoBack()

        // LEARN MODE
        openPostAssessment()
        discardIncompleteTestIfPresent()
        selectMode('Learn')

        cy.get('div[intro-id="item_info"]', { timeout: 30000 }).should('exist')
        cy.get('div[intro-id="timer"], [intro-id="timer"]').should('not.exist')

        cy.get('body').then(($body) => {
            if ($body.find('#learn').length) {
                cy.get('#learn').then(($learn) => {
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
        clickGoBack()

        // REVIEW MODE
        openPostAssessment()
        discardIncompleteTestIfPresent()
        selectMode('Review')

        cy.get('div[intro-id="item_info"]', { timeout: 30000 }).should('exist')
        cy.get('div[intro-id="timer"], [intro-id="timer"]').should('not.exist')
        cy.get('#show_result').should('not.exist')
        cy.get('#learn').should('not.exist')

        cy.get('body').then(($body) => {
            const explanationSelectors = ['#item_explanation', '[data-cy="item_explanation"]', '[intro-id="item_explanation"]']
            const explanationSelector = explanationSelectors.find((candidate) => $body.find(candidate).length)

            if (explanationSelector) {
                cy.get(explanationSelector).should('exist')
            } else {
                cy.contains(/explanation|answer|solution/i).should('exist')
            }
        })

        cy.questionNavigation()
        finishOnDashboard()
    })
})
