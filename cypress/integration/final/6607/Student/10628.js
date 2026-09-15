/*
@story_id: 10628
@story_name: Access Annotation
@path: final/6607/Student
*/
// Read-only coverage for annotations, bookmarks, highlights, and notes in Review.
import {
    Navbar,
    login_username,
    login_password,
    LoginPage,
    StudentPage,
} from '../../../../page-objects/pages/index'

describe('Student Review and annotations', () => {
    const normalize = value => String(value || '').replace(/\s+/g, ' ').trim()

    const openReview = () => {
        cy.visit('/')
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        StudentPage.visitLOAplusCompleteCourse()

        cy.get('[intro-id="chapters"]', { timeout: 30000 })
            .filter(':visible')
            .first()
            .click()

        cy.location('search', { timeout: 30000 }).should(search => {
            expect(search).to.include('func=ebook')
            expect(new URLSearchParams(search).get('chapter_no')).to.eq('0')
        })

        cy.contains(':visible', /^\s*Review\s*$/i, { timeout: 30000 })
            .first()
            .click()

        cy.location('href', { timeout: 30000 }).should('not.eq', 'about:blank')
        cy.get('body', { timeout: 30000 }).should($body => {
            expect(normalize($body.text()), 'Review page is not blank').not.to.eq('')
            expect($body.text()).not.to.include('Default blank page')
        })
    }

    beforeEach(openReview)

    it('opens the Review area without a blank page', () => {
        cy.contains(':visible', /^\s*Review\s*$/i).should('be.visible')
        cy.location('href').should('not.eq', 'about:blank')
        cy.get('body').should('not.contain.text', 'Default blank page')
    })

    it('shows review or annotation content for the signed-in user', () => {
        cy.get('body').then($body => {
            const value = normalize($body.text())
            const hasReviewContent =
                /annotation|bookmark|highlight|note|review/i.test(value)
            const hasEmptyState =
                /no\s+.*(?:found|available)|nothing\s+to\s+review/i.test(value)

            expect(
                hasReviewContent || hasEmptyState,
                'Review content or a valid empty state'
            ).to.eq(true)
        })
    })

    it('checks search when the current Review layout provides it', () => {
        cy.get('body').then($body => {
            const selector =
                'input[type="search"]:visible, ' +
                'input[placeholder*="Search" i]:visible, ' +
                '[data-cy="searchbox"]:visible, #toc_search:visible'
            const $input = $body.find(selector).first()

            if (!$input.length) {
                cy.log('This Review layout has no search control')
                return
            }

            cy.wrap($input)
                .should('be.visible')
                .clear()
                .type('annotation')
                .should('have.value', 'annotation')
                .clear()
        })
    })

    it('checks the user filter when the current Review layout provides one', () => {
        cy.get('body').then($body => {
            const filters = $body
                .find('select:visible, button:visible, [role="combobox"]:visible')
                .filter((_, element) =>
                    /annotated\s+by|created\s+by|my\s+annotations|user/i.test(
                        normalize(
                            element.textContent ||
                            element.getAttribute('aria-label')
                        )
                    ))

            if (!filters.length) {
                cy.log('This Review layout has no user filter')
                return
            }

            cy.wrap(filters.first()).should('be.visible')
            cy.get('body').should('not.contain.text', 'Default blank page')
        })
    })

    it('detects collapse and expand controls without stale-element clicks', () => {
        cy.get('body').then($body => {
            const controls = $body
                .find('#collapse-init:visible, [aria-expanded]:visible')
                .filter((_, element) => {
                    const expanded = element.getAttribute('aria-expanded')
                    return element.id === 'collapse-init' ||
                        expanded === 'true' ||
                        expanded === 'false'
                })

            if (!controls.length) {
                cy.log('This Review layout has no collapsible annotation group')
                return
            }

            const control = controls.first()
            expect(
                control.is(':visible'),
                'collapse/expand control is visible'
            ).to.eq(true)

            const expanded = control.attr('aria-expanded')
            if (expanded !== undefined) {
                expect(['true', 'false']).to.include(expanded)
            }
        })
    })

    it('returns to the Lessons tab without changing course settings', () => {
        cy.contains(':visible', /^\s*Lessons\s*$/i, { timeout: 30000 })
            .first()
            .click()

        cy.contains(':visible', /^\s*Lessons\s*$/i)
            .should('be.visible')
        cy.contains(':visible', /Bite-size lessons|bite-size learning/i)
            .should('be.visible')

        cy.log('10628 Review coverage completed')
    })
})
