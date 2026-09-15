/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id: 10150
@story_id: 10830
@story_name: Access Practice Test in Test Mode
@path: final/6607/Student
@description: Verify Practice Test timer, navigation, submission and Review, then return to Dashboard.
*/
import {
    Navbar,
    login_username,
    login_password,
    LoginPage,
    StudentPage,
} from '../../../../page-objects/pages/index'

describe('Student Practice Tests - Test controls and Review', () => {
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
        const prompt = /^\s*Last test was not completed\.\s*Do you want to continue\?\s*$/i
        const hasPrompt = ($body) => $body.find('*').toArray().some((element) =>
            Cypress.$(element).is(':visible') &&
            prompt.test(element.innerText || ''))
        const readyModes = '#test_mode:visible:enabled, #learn_mode:visible:enabled, #review_mode:visible:enabled'

        // Waiting for body alone is insufficient: it exists before the prompt loads.
        cy.get('body', { timeout: 30000 }).should(($body) => {
            expect(hasPrompt($body) || $body.find(readyModes).length > 0,
                'unfinished-attempt prompt or enabled mode controls').to.equal(true)
        }).then(($body) => {
            if (!$body.find('#test_mode:visible:enabled').length && hasPrompt($body)) {
                clickNavigationControl(/^\s*No\s*$/i)
            }
        })

        // The page can retain hidden prompt markup after No is clicked.
        // The enabled Test button is the observable readiness condition.
        cy.get('#test_mode', { timeout: 30000 })
            .should('be.visible')
            .and('be.enabled')
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

    const clickGoBack = () =>
        clickNavigationControl(/^GO\\s*BACK(?:\\s+TO\\s+TEST\\s+SELECTION)?$/i)

    const leaveNavigateItems = () => {
        clickGoBack()

        // Legacy GO BACK can call a parent-frame function unavailable inside
        // Cypress. Prefer the real click, then use its equivalent route only
        // when the page did not leave the item/results screen.
        cy.wait(250, { log: false })
        cy.location('search').then((search) => {
            if (search.includes('func=navigate_items')) {
                cy.log('GO BACK handler unavailable; using Practice Tests route')
                cy.visit('/app/?action=practice')
            }
        })

        cy.location('search', { timeout: 30000 })
            .should('not.include', 'func=navigate_items')
            .and('include', 'action=practice')
    }

    const returnFromResults = () => {
        cy.location('search', { timeout: 30000 })
            .should('include', 'func=navigate_items')
        cy.contains(/Practice Test A/i, { timeout: 30000 }).should('be.visible')
        leaveNavigateItems()
    }

    it('verifies Test Mode controls, opens Review, and returns to Dashboard', () => {
        cy.visit('/')
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)

        cy.fixture('global').then((data) => {
            StudentPage.visitLOAplusCompleteCourse(data)
        })

        // TEST MODE: Practice Tests -> A -> Test
        openPracticeTests()
        openPracticeTestA()
        discardIncompleteTestIfPresent()
        selectMode('Test')

        cy.get('div[intro-id="item_info"]', { timeout: 30000 }).should('exist')
        // The countdown is stored in the readonly input's value, not text.
        const timer = '[intro-id="timer"] input#d2'
        const readSeconds = ($timer) => {
            const value = String($timer.val() || '').trim()
            const match = value.match(/^(\d+):([0-5]\d):([0-5]\d)$/)
            expect(match, 'timer value has HH:MM:SS format').not.to.equal(null)
            return Number(match[1]) * 3600 + Number(match[2]) * 60 + Number(match[3])
        }
        cy.get(timer, { timeout: 30000 })
            .should('be.visible')
            .and(($timer) => {
                readSeconds($timer)
            })
            .then(($timer) => {
                const initialSeconds = readSeconds($timer)
                cy.get(timer, { timeout: 30000 }).should(($current) => {
                    expect(readSeconds($current), 'countdown decreases')
                        .to.be.lessThan(initialSeconds)
                })
            })
        cy.get('#next').should('be.visible').and('be.enabled')
        cy.get('#previous').should('be.visible')
        cy.get('#show_result').should('be.visible')
        cy.get('#previous').should('be.disabled')
        cy.questionNavigation()

        StudentPage.endTest()

        // Result page -> GO BACK -> Practice Tests -> A -> Review
        returnFromResults()
        openPracticeTests()
        openPracticeTestA()
        discardIncompleteTestIfPresent()
        selectMode('Review')

        // Review opens an individual item with its explanation, not the
        // score summary headed "Practice Test A".
        cy.location('search', { timeout: 30000 }).should((search) => {
            const params = new URLSearchParams(search)
            expect(params.get('func')).to.equal('navigate_items')
            expect(params.get('item_sequence')).to.equal('1')
        })
        cy.contains(/^\s*Explanation\s*$/i, { timeout: 30000 })
            .should('be.visible')

        // Leave Review through GO BACK, with a Cypress-frame fallback.
        leaveNavigateItems()
        cy.location('search', { timeout: 30000 }).should((search) => {
            expect(new URLSearchParams(search).has('item_sequence')).to.equal(false)
        })

        // Finish on Dashboard
        clickNavigationControl(/^DASHBOARD$/i)

        cy.contains(/PRACTICE\s*TESTS/i, { timeout: 30000 }).should('exist')
        cy.contains(/POST\s*ASSESSMENT/i).should('exist')
    })
})
