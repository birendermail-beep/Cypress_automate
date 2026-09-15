/*
@story_id: 10856
@story_name: Filter Test History
@path: final/6607/Student
*/
// Focused coverage for Test History search and filters.
import {
    Navbar,
    login_username,
    login_password,
    LoginPage,
    StudentPage,
} from '../../../../page-objects/pages/index'

describe('Student Test History filters', () => {
    const normalize = value => String(value || '').replace(/\s+/g, ' ').trim()
    const historyUrl = '/app/reports.php?func=report_test_history'

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

    beforeEach(() => {
        cy.visit('/')
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        StudentPage.visitLOAplusCompleteCourse()

        // Course context is established above; open its Test History report.
        cy.visit(historyUrl)
        cy.location('pathname', { timeout: 30000 })
            .should('include', '/app/reports.php')
        cy.location('search')
            .should('include', 'func=report_test_history')
        cy.contains(':visible', /^\s*Test History\s*$/i, {
            timeout: 30000,
        }).should('be.visible')
        cy.get('body').should('not.contain.text', 'Default blank page')
    })

    it('searches Test History', () => {
        const searchSelector =
            '#search:visible, input[type="search"]:visible, ' +
            'input[placeholder*="Search"]:visible'

        cy.get(searchSelector, { timeout: 30000 })
            .first()
            .should('be.visible')
            .and('be.enabled')
            .type('{selectall}Practice', { delay: 0 })

        cy.get(searchSelector)
            .first()
            .should('have.value', 'Practice')
        verifyHistoryResults()
    })

    it('filters history by Test Mode', () => {
        selectAvailableOption(
            '#test_mode_select',
            /^\s*(?:Test|Learn|Review)(?:\s+Mode)?\s*$/i
        )
        verifyHistoryResults()
    })

    it('filters history by Test Type', () => {
        selectAvailableOption(
            '#test_type_select',
            /Practice Test/i
        )
        verifyHistoryResults()
    })

    it('combines search, Test Mode, and Test Type filters', () => {
        const searchSelector =
            '#search:visible, input[type="search"]:visible, ' +
            'input[placeholder*="Search"]:visible'

        cy.get(searchSelector, { timeout: 30000 })
            .first()
            .type('{selectall}Practice', { delay: 0 })

        selectAvailableOption(
            '#test_mode_select',
            /^\s*(?:Test|Learn|Review)(?:\s+Mode)?\s*$/i
        )
        selectAvailableOption(
            '#test_type_select',
            /Practice Test/i
        )

        cy.get(searchSelector)
            .first()
            .should('have.value', 'Practice')
        verifyHistoryResults()
        cy.log('10856 Test History filtering completed')
    })
})
