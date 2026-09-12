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
            const selectors = [
                '[intro-id="practice_tests"]',
                '[data-cy="practice_tests"]',
                '[data-cy="practice_test"]',
            ]
            const matchedSelector = selectors.find((selector) => $body.find(selector).length)

            if (matchedSelector) {
                cy.get(matchedSelector).first().click({ force: true })
                return
            }

            cy.contains(/PRACTICE\s*TESTS/i, { timeout: 30000 })
                .last()
                .click({ force: true })
        })
    }

    const openFirstPracticeTest = () => {
        cy.get('body', { timeout: 30000 }).then(($body) => {
            const legacyTest = $body.find('[data-cy="test_tests"]')
            if (legacyTest.length) {
                cy.get('[data-cy="test_tests"]').first().click({ force: true })
                return
            }

            const testControls = $body
                .find('a, button, [role="button"], .card, .menu-item')
                .filter(':visible')
                .filter((_, element) => /practice\s*test|test\s*\d+|start\s*test/i.test(element.innerText || element.textContent || ''))

            if (!testControls.length) {
                throw new Error(`Unable to find a Practice Test to open. Current URL: ${window.location.href}`)
            }

            cy.wrap(testControls.first()).click({ force: true })
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

    const launchSelectedMode = (mode) => {
        cy.get('body', { timeout: 30000 }).then(($body) => {
            if ($body.find('div[intro-id="item_info"]').length) {
                return
            }

            // Current Practice Test UI selects the mode first, then requires
            // the large PLAY / Start Test Prep control to actually open it.
            const preferredSelectors = mode === 'Learn'
                ? ['#learn', '[data-cy="learn"]', '[data-cy="start_test_prep"]']
                : ['#test', '[data-cy="test"]', '[data-cy="start_test_prep"]']

            const matchedSelector = preferredSelectors.find((selector) => {
                return $body.find(selector).filter(':visible').length
            })

            if (matchedSelector) {
                cy.get(matchedSelector).filter(':visible').last().click({ force: true })
                return
            }

            const startText = $body
                .find('button, a, [role="button"], div')
                .filter(':visible')
                .filter((_, element) => /start\s*test\s*prep|^\s*play\s*$/i.test(element.innerText || element.textContent || ''))

            if (startText.length) {
                cy.wrap(startText.last()).click({ force: true })
                return
            }

            // Fallback for the current circular play icon, which can be an
            // icon-only element immediately below "Start Test Prep".
            const startLabel = $body
                .find('*')
                .filter(':visible')
                .filter((_, element) => /^\s*Start\s+Test\s+Prep\s*$/i.test(element.innerText || element.textContent || ''))
                .last()

            if (startLabel.length) {
                const area = startLabel.parent()
                const clickable = area
                    .find('button, a, [role="button"], [onclick], .cursor-pointer, .pointer, svg')
                    .filter(':visible')

                if (clickable.length) {
                    cy.wrap(clickable.last()).click({ force: true })
                    return
                }
            }

            throw new Error(`Unable to launch ${mode} Mode from Practice Test. Current URL: ${window.location.href}`)
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

        // LEARN MODE
        openPracticeTests()
        openFirstPracticeTest()
        discardIncompleteTestIfPresent()
        selectMode('Learn')
        launchSelectedMode('Learn')

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

        // TEST MODE
        cy.contains(/PRACTICE\s*TESTS/i, { timeout: 30000 }).should('exist')
        openPracticeTests()
        openFirstPracticeTest()
        discardIncompleteTestIfPresent()
        selectMode('Test')
        launchSelectedMode('Test')

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
