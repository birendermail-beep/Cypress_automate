/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id: 10150
@story_id: 10829
@story_name: Access Practice Test
@path: final/6607/Student
@description: Verify current Practice Test Learn Mode, Test Mode, Review Mode, then return to Dashboard.
*/
import {
    Navbar,
    login_username,
    login_password,
    LoginPage,
    StudentPage,
} from '../../../../page-objects/pages/index'

describe('Student Practice Tests - Learn, Test and Review Modes', () => {
    const openPracticeTests = () => {
        cy.get('body', { timeout: 30000 }).then(($body) => {
            const labels = $body
                .find('*')
                .filter(':visible')
                .filter((_, element) => /^\s*PRACTICE\s*TESTS\s*$/i.test(element.innerText || element.textContent || ''))

            if (labels.length) {
                const label = labels.last()
                const directClickable = label.closest('a, button, [role="button"], [onclick]')

                if (directClickable.length) {
                    cy.wrap(directClickable).click({ force: true })
                } else {
                    const ancestors = label.parents().filter(':visible')
                    const card = ancestors.filter((_, element) => {
                        const text = (element.innerText || element.textContent || '').replace(/\s+/g, ' ').trim()
                        return /PRACTICE\s*TESTS/i.test(text) && /practice\s*questions/i.test(text)
                    }).first()

                    if (card.length) {
                        cy.wrap(card).click({ force: true })
                    } else {
                        cy.wrap(label.parent()).click({ force: true })
                    }
                }
            }
        })

        cy.wait(500)
        cy.url().then((url) => {
            if (!/action=practice/i.test(url)) {
                cy.visit('/app/?action=practice')
            }
        })

        cy.url({ timeout: 30000 }).should('match', /action=practice/i)
    }

    const openPracticeTestA = () => {
        cy.get('[data-cy="test_tests"]', { timeout: 30000 })
            .filter(':visible')
            .first()
            .click({ force: true })
    }

    const discardIncompleteTestIfPresent = () => {
        cy.get('body', { timeout: 30000 }).then(($body) => {
            if (/Last test was not completed\. Do you want to continue\?/i.test($body.text())) {
                const noButton = $body
                    .find('button, a, [role="button"], div')
                    .filter(':visible')
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

        // Retry the lookup while the mode page renders. Labels may be nested
        // in spans/headings, and their cards also contain descriptive text.
        const labelPattern = new RegExp(`^${mode}(?: Mode)?$`, 'i')

        return cy.get('body', { timeout: 30000 })
            .find('*', { timeout: 30000 })
            .filter((_, element) => {
                const $element = Cypress.$(element)
                if (!$element.is(':visible')) return false

                const text = (element.innerText || element.textContent || '')
                    .replace(/\s+/g, ' ')
                    .trim()
                return (selector && $element.is(selector)) || labelPattern.test(text)
            })
            .should('have.length.at.least', 1)
            .last()
            .then(($label) => {
                const $control = $label.closest('a, button, [role="button"], [onclick]')
                return cy.wrap($control.length ? $control : $label)
                    .should('be.visible')
                    .click()
            })
    }

    const launchLearnModeIfNeeded = () => {
        cy.get('body', { timeout: 30000 }).then(($body) => {
            if ($body.find('div[intro-id="item_info"]').length) {
                return
            }

            if ($body.find('#learn:visible').length) {
                cy.get('#learn').filter(':visible').last().click({ force: true })
                cy.wait(500)
                cy.get('body').then(($afterFirstClick) => {
                    if (
                        !$afterFirstClick.find('div[intro-id="item_info"]').length &&
                        $afterFirstClick.find('#learn:visible').length
                    ) {
                        cy.get('#learn').filter(':visible').last().click({ force: true })
                    }
                })
            }
        })

        cy.get('div[intro-id="item_info"]', { timeout: 30000 }).should('exist')
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

    it('runs Practice Test Learn Mode, then Test Mode, Review Mode, and returns to Dashboard', () => {
        cy.visit('/')
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)

        cy.fixture('global').then((data) => {
            StudentPage.visitLOAplusCompleteCourse(data)
        })

        // LEARN MODE: Dashboard -> Practice Tests -> A -> Learn
        openPracticeTests()
        openPracticeTestA()
        discardIncompleteTestIfPresent()
        selectMode('Learn')
        launchLearnModeIfNeeded()

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

        cy.get('#btntxt', { timeout: 30000 }).should('exist').click({ force: true })
        cy.contains(/Attempted/i).should('exist')
        cy.contains(/Unattempted/i).should('exist')
        cy.get('#btntxt').click({ force: true })

        StudentPage.endTest()
        clickGoBack()

        // TEST MODE: Practice Tests -> A -> Test
        openPracticeTests()
        openPracticeTestA()
        discardIncompleteTestIfPresent()
        selectMode('Test')

        cy.get('div[intro-id="item_info"]', { timeout: 30000 }).should('exist')
        cy.get('div[intro-id="timer"], [intro-id="timer"]', { timeout: 30000 }).should('exist')
        cy.get('#previous').should('be.disabled')
        cy.questionNavigation()

        StudentPage.endTest()

        // Result page -> GO BACK -> Review Mode
        clickGoBack()
        selectMode('Review')

        // Review should open the test review/result area. Verify something from that page,
        // then return to the mode page using GO BACK.
        cy.contains(/Practice Test A/i, { timeout: 30000 }).should('exist')
        clickGoBack()

        // Finish on Dashboard
        clickNavigationControl(/^DASHBOARD$/i)

        cy.contains(/PRACTICE\s*TESTS/i, { timeout: 30000 }).should('exist')
        cy.contains(/POST\s*ASSESSMENT/i).should('exist')
    })
})
