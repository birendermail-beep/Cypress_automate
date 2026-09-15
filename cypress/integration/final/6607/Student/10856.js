/*
@story_id: 10856
@story_name: Filter Test History
@path: final/6607/Student
*/
// Test History search and filter coverage through the real UI navigation.
import { startPracticeLearn } from '../../../../support/student-practice'
import {
    Navbar,
    login_username,
    login_password,
    LoginPage,
    StudentPage,
} from '../../../../page-objects/pages/index'

describe('Student Test History filters', () => {
    const normalize = value => String(value || '').replace(/\s+/g, ' ').trim()

    const verifyHistoryResults = () => {
        cy.get('body', { timeout: 30000 }).should($body => {
            const hasTable = $body
                .find('#tablen:visible, .table-responsive:visible, table:visible')
                .length > 0
            const hasEmptyState =
                /no\s+record|no\s+history|no\s+data|nothing\s+found/i
                    .test(normalize($body.text()))

            expect(
                hasTable || hasEmptyState,
                'history table or valid empty state'
            ).to.eq(true)
        })
    }

    const clickTextControl = pattern => {
        cy.contains(':visible', pattern, { timeout: 30000 })
            .last()
            .then($label => {
                const $control = $label.closest(
                    'a, button, [role="button"], [onclick]'
                )
                expect($control.length, `clickable control matching ${pattern}`)
                    .to.be.greaterThan(0)
                cy.wrap($control)
                    .invoke('removeAttr', 'target')
                    .click({ force: true })
            })
    }

    const selectAvailableOption = (selector, preferredPattern) => {
        cy.get(selector, { timeout: 30000 })
            .filter(':visible')
            .first()
            .should('be.visible')
            .and('be.enabled')
            .then($select => {
                const options = Array.from($select[0].options)
                    .filter(option =>
                        !option.disabled &&
                        String(option.value).trim() !== '')
                expect(options.length, `${selector} filter options`)
                    .to.be.greaterThan(0)

                const option = options.find(item =>
                    preferredPattern.test(normalize(item.textContent))) ||
                    options[0]

                cy.wrap($select).select(option.value, { force: true })
                cy.get(selector)
                    .filter(':visible')
                    .first()
                    .should('have.value', option.value)
            })
    }

    it('searches and filters the real Test History screen', () => {
        cy.visit('/')
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)

        // Create one history record and reuse the same Test History session.
        startPracticeLearn()
        StudentPage.endTest()

        cy.location('search', { timeout: 30000 })
            .should('include', 'func=navigate_items')
        cy.contains(/Practice Test A/i, { timeout: 30000 })
            .should('be.visible')

        clickTextControl(
            /^\s*IMPROVE(?:\s+YOUR\s+PERFORMANCE)?\s*$/i
        )
        cy.contains(':visible', /^\s*Improve Your Performance\s*$/i, {
            timeout: 30000,
        }).should('be.visible')

        clickTextControl(/^\s*Go to test history\s*$/i)

        // The popup must close and the actual second screen must appear.
        cy.contains(':visible', /^\s*Improve Your Performance\s*$/i, {
            timeout: 30000,
        }).should('not.exist')
        cy.contains(':visible', /^\s*Test History\s*$/i, {
            timeout: 30000,
        }).should('be.visible')
        cy.location('href').should('not.eq', 'about:blank')
        cy.get('body').should('not.contain.text', 'Default blank page')

        const searchSelector =
            '#search:visible, input[type="search"]:visible, ' +
            'input[placeholder*="Search"]:visible'

        cy.get(searchSelector, { timeout: 30000 })
            .first()
            .should('be.visible')
            .and('be.enabled')
            .type('{selectall}Practice', { delay: 0 })
        cy.get(searchSelector).first().should('have.value', 'Practice')
        verifyHistoryResults()

        // Re-query because filtering can re-render the search control.
        cy.get(searchSelector).first().clear()

        selectAvailableOption(
            '#test_mode_select',
            /^\s*(?:Test|Learn|Review)(?:\s+Mode)?\s*$/i
        )
        verifyHistoryResults()

        selectAvailableOption('#test_type_select', /Practice Test/i)
        verifyHistoryResults()

        // Confirm all three controls remain usable together.
        cy.get(searchSelector)
            .first()
            .type('Practice', { delay: 0 })
            .should('have.value', 'Practice')
        cy.get('#test_mode_select:visible').should('be.enabled')
        cy.get('#test_type_select:visible').should('be.enabled')
        verifyHistoryResults()

        cy.log('10856 Test History filtering completed')
    })
})
