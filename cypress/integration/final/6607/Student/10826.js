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

describe('Post Assessment - all modes', () => {
    const openPostAssessment = () => {
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

    const clickGoBack = () => {
        cy.contains('a, button, [role="button"]', /^\s*GO BACK\s*$/i, { timeout: 30000 })
            .filter(':visible')
            .last()
            .click({ force: true })

        cy.contains(/POST\s*ASSESSMENT/i, { timeout: 30000 }).should('exist')
    }

    const finishOnDashboard = () => {
        clickGoBack()

        cy.contains('a, button, [role="button"]', /^\s*DASHBOARD\s*$/i, { timeout: 30000 })
            .filter(':visible')
            .last()
            .click({ force: true })

        cy.contains(/POST\s*ASSESSMENT/i, { timeout: 30000 }).should('exist')
        cy.contains(/PRACTICE\s*TESTS/i).should('exist')
    }

    it('runs Test Mode, Learn Mode, Review Mode, then finishes on Dashboard', () => {
        cy.visit('/')
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)

        cy.fixture('global').then((data) => {
            StudentPage.visitLOAplusCompleteCourse(data)
        })

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
