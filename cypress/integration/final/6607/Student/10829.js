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

            const exactModeControl = $body
                .find('button, a, [role="button"]')
                .filter(':visible')
                .filter((_, element) => new RegExp(`^\\s*${mode}\\s*$`, 'i').test(element.innerText || element.textContent || ''))

            if (exactModeControl.length) {
                cy.wrap(exactModeControl.last()).click({ force: true })
            }
        })
    }

    const launchSelectedMode = (mode) => {
        cy.get('body', { timeout: 30000 }).then(($body) => {
            if ($body.find('div[intro-id="item_info"]').length) {
                return
            }

            // First try known controls from the legacy Practice Test player.
            const knownSelectors = mode === 'Learn'
                ? ['#learn', '[data-cy="learn"]']
                : ['#test', '[data-cy="test"]']

            const knownSelector = knownSelectors.find((selector) => $body.find(selector).filter(':visible').length)
            if (knownSelector) {
                cy.get(knownSelector).filter(':visible').last().click({ force: true })
                cy.wait(700)
            }
        })

        // Current UI shows a large circular Play button directly below
        // "Start Test Prep". Locate that label and click the element rendered
        // under it instead of matching unrelated Learn/Play text elsewhere.
        cy.get('body', { timeout: 30000 }).then(($body) => {
            if ($body.find('div[intro-id="item_info"]').length) {
                return
            }

            const labels = $body
                .find('*')
                .filter(':visible')
                .filter((_, element) => /^\s*Start\s+Test\s+Prep\s*$/i.test(element.innerText || element.textContent || ''))

            if (!labels.length) {
                throw new Error(`Start Test Prep label not found for ${mode} Mode. Current URL: ${window.location.href}`)
            }

            const label = labels.last()[0]
            const rect = label.getBoundingClientRect()
            const x = rect.left + rect.width / 2

            // Probe below the label where the circular Play control is shown.
            const offsets = [55, 70, 85, 100, 115]
            let target = null
            for (const offset of offsets) {
                const element = label.ownerDocument.elementFromPoint(x, rect.bottom + offset)
                if (element && element !== label) {
                    target = element
                    break
                }
            }

            if (!target) {
                throw new Error(`Unable to locate Play control below Start Test Prep for ${mode} Mode.`)
            }

            const clickable = Cypress.$(target).closest('button, a, [role="button"], [onclick]')
            cy.wrap(clickable.length ? clickable[0] : target).click({ force: true })
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
