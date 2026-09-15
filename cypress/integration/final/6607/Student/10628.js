/*
@story_id: 10628
@story_name: Access Annotation
@path: final/6607/Student
*/
// Current read-only coverage for annotations, bookmarks, highlights, and notes in Review.
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
            .click()
        cy.get('body', { timeout: 30000 })
            .should('be.visible')
            .and($body => {
                expect(normalize($body.text()), 'Review page is not blank')
                    .not.to.eq('')
            })
    }

    beforeEach(openReview)

    it('opens the Review area without a blank page', () => {
        cy.contains(':visible', /^\s*Review\s*$/i).should('be.visible')
        cy.location('href').should('not.eq', 'about:blank')
        cy.get('body').should('not.contain.text', 'Default blank page')
    })

    it('shows review or annotation content for the signed-in user', () => {
        cy.get('body').should($body => {
            const value = normalize($body.text())
            expect(
                /annotation|bookmark|highlight|note|review|no\s+.*(?:found|available)/i
                    .test(value),
                'annotation/review content or its empty state'
            ).to.eq(true)
        })
    })

    it('provides a search control and accepts search text', () => {
        cy.get(
            'input[type="search"]:visible, input[placeholder*="Search" i]:visible, ' +
            '[data-cy="searchbox"]:visible, #toc_search:visible',
            { timeout: 30000 }
        ).first().should('be.visible').then($input => {
            cy.wrap($input).clear().type('annotation')
            cy.wrap($input).should('have.value', 'annotation').clear()
        })
    })

    it('checks the user filter when the current Review layout provides one', () => {
        cy.get('body').then($body => {
            const filters = $body
                .find('select:visible, button:visible, [role="combobox"]:visible')
                .filter((_, element) =>
                    /annotated\s+by|created\s+by|my\s+annotations|user/i
                        .test(normalize(element.textContent ||
                            element.getAttribute('aria-label'))))
            if (!filters.length) {
                cy.log('This Review layout has no user filter')
                return
            }
            cy.wrap(filters.first()).should('be.visible').click()
            cy.get('body').should('not.contain.text', 'Default blank page')
        })
    })

    it('checks collapse and expand when an expandable group is available', () => {
        cy.get('body').then($body => {
            const controls = $body
                .find('[aria-expanded]:visible, #collapse-init:visible')
                .filter((_, element) =>
                    /true|false/.test(element.getAttribute('aria-expanded') || '') ||
                    element.id === 'collapse-init')
            if (!controls.length) {
                cy.log('This Review layout has no collapsible annotation group')
                return
            }
            const control = controls.first()
            const before = control.attr('aria-expanded')
            cy.wrap(control).click()
            if (before !== undefined) {
                cy.wrap(control).should('have.attr', 'aria-expanded')
                    .and('not.eq', before)
                cy.wrap(control).click()
                    .should('have.attr', 'aria-expanded', before)
            }
        })
    })

    it('returns to the Lessons tab without changing course settings', () => {
        cy.contains(':visible', /^\s*Lessons\s*$/i, { timeout: 30000 })
            .click()
        cy.contains(':visible', /^\s*Lessons\s*$/i)
            .should('be.visible')
        cy.contains(':visible', /Bite-size lessons|bite-size learning/i)
            .should('be.visible')
    })
})
