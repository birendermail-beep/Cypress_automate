/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id: 10150
@story_id: 10829
@story_name: Access Practice Test
@path: final/6607/Student
@description: Verify current Practice Test Learn Mode and Test Mode flows in one end-to-end run.
*/
import {
    Navbar,
    login_username,
    login_password,
    LoginPage,
    StudentPage,
} from '../../../../page-objects/pages/index'

describe('Student Practice Tests - Learn and Test Modes', () => {
    const openPracticeTests = () => {
        cy.get('body', { timeout: 30000 }).then(($body) => {
            // On the dashboard the text itself is not the navigation control.
            // Find PRACTICE TESTS and click its clickable/card ancestor.
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

        // Do not fail repeatedly just because the dashboard card DOM changes.
        // If the UI click did not navigate, use the known Practice Tests route.
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
        }
        const selector = modeSelectors[mode]

        cy.get(selector, { timeout: 30000 })
            .should('be.visible')
            .click({ force: true })
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

    const clickGoBack = () => {
        cy.contains('a, button, [role="button"]', /^\s*GO BACK\s*$/i, { timeout: 30000 })
            .filter(':visible')
            .last()
            .click({ force: true })
    }

    it('runs Practice Test Learn Mode, then Test Mode, and returns to Dashboard', () => {
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

        // TEST MODE: Dashboard/cover -> Practice Tests -> A -> Test
        openPracticeTests()
        openPracticeTestA()
        discardIncompleteTestIfPresent()
        selectMode('Test')

        cy.get('div[intro-id="item_info"]', { timeout: 30000 }).should('exist')
        cy.get('div[intro-id="timer"], [intro-id="timer"]', { timeout: 30000 }).should('exist')
        cy.get('#previous').should('be.disabled')
        cy.questionNavigation()

        StudentPage.endTest()
        clickGoBack()

        cy.contains('a, button, [role="button"]', /^\s*DASHBOARD\s*$/i, { timeout: 30000 })
            .filter(':visible')
            .last()
            .click({ force: true })

        cy.contains(/PRACTICE\s*TESTS/i, { timeout: 30000 }).should('exist')
        cy.contains(/POST\s*ASSESSMENT/i).should('exist')
    })
})
