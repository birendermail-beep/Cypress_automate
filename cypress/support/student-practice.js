import StudentPage from '../page-objects/pages/StudentPage'

export function startPracticeLearn() {
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

    StudentPage.visitLOAplusCompleteCourse()
    openPracticeTests()
    openPracticeTestA()
    discardIncompleteTestIfPresent()
    selectMode('Learn')
    launchLearnModeIfNeeded()
}
