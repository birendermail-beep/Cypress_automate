/*
@story_id: 10855
@story_name: Open Test History
@path: final/6607/Student
*/
// Current coverage for Practice Test history and related reports.
import { startPracticeLearn } from '../../../../support/student-practice'
import {
    Navbar,
    login_username,
    login_password,
    LoginPage,
    StudentPage,
} from '../../../../page-objects/pages/index'

describe('Student Test History and performance reports', () => {
    // The analytics page currently loads Highcharts more than once. Ignore
    // only Highcharts error #16 so unrelated application errors still fail.
    Cypress.on('uncaught:exception', error => {
        const message = String(error && error.message || error)
        if (message.includes('Highcharts error #16')) {
            return false
        }
        return true
    })
    const normalize = value => String(value || '').replace(/\s+/g, ' ').trim()

    const clickCurrentControl = (labelPattern, fallbackSelector = '') => {
        cy.get('body', { timeout: 30000 }).should($body => {
            const labels = $body
                .find('*')
                .filter(':visible')
                .filter((_, element) =>
                    labelPattern.test(normalize(element.textContent)))
            const fallback = fallbackSelector
                ? $body.find(fallbackSelector).filter(':visible')
                : Cypress.$()

            expect(
                labels.length + fallback.length,
                `control matching ${labelPattern}`
            ).to.be.greaterThan(0)
        }).then($body => {
            const $label = $body
                .find('*')
                .filter(':visible')
                .filter((_, element) =>
                    labelPattern.test(normalize(element.textContent)))
                .last()
            const $fallback = fallbackSelector
                ? $body.find(fallbackSelector).filter(':visible').first()
                : Cypress.$()
            const $source = $label.length ? $label : $fallback
            const $control = $source.closest(
                'a, button, [role="button"], [onclick]'
            )

            cy.wrap($control.length ? $control : $source)
                .should('be.visible')
                .click({ force: true })
        })
    }

    const openTestHistoryFromPopup = () => {
        cy.contains(
            ':visible',
            /^\s*Improve Your Performance\s*$/i,
            { timeout: 30000 }
        ).should('be.visible')

        cy.contains(
            ':visible',
            /^\s*Go to test history\s*$/i,
            { timeout: 30000 }
        )
            .last()
            .then($label => {
                const $control = $label.closest(
                    'a, button, [role="button"], [onclick]'
                )
                expect($control.length, 'clickable Go to test history control')
                    .to.be.greaterThan(0)
                cy.wrap($control)
                    .invoke('removeAttr', 'target')
                    .click({ force: true })
            })

        // Do not allow the result-page popup to count as Test History.
        cy.contains(
            ':visible',
            /^\s*Improve Your Performance\s*$/i,
            { timeout: 30000 }
        ).should('not.exist')
        cy.contains(
            ':visible',
            /^\s*Test History\s*$/i,
            { timeout: 30000 }
        ).should('be.visible')
    }

    const verifyUsablePage = label => {
        cy.location('href', { timeout: 30000 }).should('not.eq', 'about:blank')
        cy.get('body', { timeout: 30000 }).should($body => {
            expect(normalize($body.text()), `${label} is not blank`)
                .not.to.eq('')
            expect($body.text()).not.to.include('Default blank page')
        })
    }

    const checkOptionalReport = (selector, labelPattern, contentSelector) => {
        cy.get('body').then($body => {
            const $bySelector = $body.find(selector).filter(':visible')
            const $byLabel = $body
                .find('a:visible, button:visible, [role="button"]:visible')
                .filter((_, element) =>
                    labelPattern.test(normalize(element.textContent)))
            const $control = $bySelector.length ? $bySelector.first() :
                $byLabel.first()

            if (!$control.length) {
                cy.log(`Report not provided by this layout: ${labelPattern}`)
                return
            }

            cy.wrap($control).click({ force: true })
            verifyUsablePage('report page')
            cy.get('body').then($reportBody => {
                if ($reportBody.find(contentSelector).filter(':visible').length) {
                    cy.wrap(
                        $reportBody.find(contentSelector).filter(':visible').first()
                    ).should('be.visible')
                } else {
                    expect(
                        /no\s+record|no\s+data|not\s+available/i.test(
                            normalize($reportBody.text())
                        ),
                        'report content or valid empty state'
                    ).to.eq(true)
                }
            })
        })
    }

    it('opens Test History and checks the available reports', () => {
        cy.visit('/')
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)

        // Create only one result for the complete history/report flow.
        startPracticeLearn()
        StudentPage.endTest()

        cy.location('search', { timeout: 30000 })
            .should('include', 'func=navigate_items')
        cy.contains(/Practice Test A/i, { timeout: 30000 })
            .should('be.visible')
        verifyUsablePage('Practice Test result')

        clickCurrentControl(
            /^\s*IMPROVE(?:\s+YOUR\s+PERFORMANCE)?\s*$/i,
            '.icomoon-256px-practice-performance'
        )
        openTestHistoryFromPopup()

        verifyUsablePage('Test History')
        cy.contains(':visible', /^\s*Test History\s*$/i)
            .should('be.visible')

        // Validate history filters without repeatedly mutating the page.
        cy.get('body').then($body => {
            const $search = $body
                .find('#search:visible, input[type="search"]:visible')
                .first()
            if ($search.length) {
                expect($search.is(':disabled'), 'history search is enabled')
                    .to.eq(false)
            } else {
                cy.log('This Test History layout has no search input')
            }

            ;['#test_mode_select', '#test_type_select'].forEach(selector => {
                const $select = $body.find(`${selector}:visible`).first()
                if ($select.length) {
                    expect($select.is(':disabled'), `${selector} is enabled`)
                        .to.eq(false)
                    expect(
                        $select.find('option').length,
                        `${selector} options`
                    ).to.be.greaterThan(0)
                }
            })

            const hasRows =
                $body.find('.table-responsive:visible, table:visible').length > 0
            const hasEmptyState =
                /no\s+record|no\s+history|no\s+data/i
                    .test(normalize($body.text()))
            expect(
                hasRows || hasEmptyState,
                'test-history table or valid empty state'
            ).to.eq(true)
        })

        checkOptionalReport(
            '#performance',
            /test\s+performance/i,
            '#container_graph:visible, canvas:visible, svg:visible'
        )
        checkOptionalReport(
            '#module_report',
            /activity\s+time\s+spent/i,
            '.table-responsive:visible, table:visible'
        )
        checkOptionalReport(
            '#class_ranking',
            /class\s+ranking/i,
            '.table-responsive:visible, table:visible, .alert-secondary:visible'
        )

        cy.log('10855 Test History coverage completed')
    })
})
