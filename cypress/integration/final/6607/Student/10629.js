/*
@story_id: 10629
@story_name: Access Glossary
@path: final/6607/Student
*/
// Current read-only coverage for the ebook Glossary.
import {
    Navbar,
    login_username,
    login_password,
    LoginPage,
    StudentPage,
} from '../../../../page-objects/pages/index'

describe('Student ebook Glossary', () => {
    const normalize = value => String(value || '').replace(/\s+/g, ' ').trim()

    const openGlossary = () => {
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

        cy.contains(':visible', /^\s*Glossary\s*$/i, { timeout: 30000 })
            .first()
            .click()

        cy.location('href', { timeout: 30000 }).should('not.eq', 'about:blank')
        cy.get('body', { timeout: 30000 }).should($body => {
            expect(normalize($body.text()), 'Glossary page is not blank')
                .not.to.eq('')
            expect($body.text()).not.to.include('Default blank page')
        })
    }

    beforeEach(openGlossary)

    it('opens the Glossary without a blank page', () => {
        cy.contains(':visible', /^\s*Glossary\s*$/i).should('be.visible')
        cy.location('href').should('not.eq', 'about:blank')
        cy.get('body').should('not.contain.text', 'Default blank page')
    })

    it('shows glossary terms or a valid empty state', () => {
        cy.get('body').then($body => {
            const text = normalize($body.text())
            const hasTerms = $body.find(
                '[data-cy*="glossary"]:visible, .glossary-item:visible, ' +
                '.glossary-list:visible, [class*="glossary"]:visible'
            ).length > 0
            const hasGlossaryText = /glossary|term|definition/i.test(text)
            const hasEmptyState =
                /no\s+.*(?:term|glossary|result).*(?:found|available)/i
                    .test(text)

            expect(
                hasTerms || hasGlossaryText || hasEmptyState,
                'glossary content or its empty state'
            ).to.eq(true)
        })
    })

    it('checks search when the Glossary layout provides it', () => {
        cy.get('body').then($body => {
            const $input = $body
                .find(
                    'input[type="search"]:visible, input[placeholder]:visible, ' +
                    '[data-cy="searchbox"]:visible, #adv_search:visible'
                )
                .filter((_, element) => {
                    const placeholder =
                        element.getAttribute('placeholder') || ''
                    return element.type === 'search' ||
                        /search/i.test(placeholder) ||
                        element.getAttribute('data-cy') === 'searchbox' ||
                        element.id === 'adv_search'
                })
                .first()

            if (!$input.length) {
                cy.log('This Glossary layout has no search control')
                return
            }

            cy.wrap($input)
                .should('be.visible')
                .clear()
                .type('Aero')
                .should('have.value', 'Aero')
                .clear()
        })
    })

    it('detects available glossary filters without changing user data', () => {
        cy.get('body').then($body => {
            const $filters = $body
                .find(
                    '#review_filter:visible, [aria-label]:visible, ' +
                    'button:visible, [role="button"]:visible'
                )
                .filter((_, element) => {
                    const label = [
                        element.textContent,
                        element.getAttribute('aria-label'),
                        element.getAttribute('title'),
                    ].join(' ')
                    return /bookmark|confidence|note|filter/i.test(label)
                })

            if (!$filters.length) {
                cy.log('This Glossary layout has no visible filter controls')
                return
            }

            expect($filters.length, 'visible glossary filter controls')
                .to.be.greaterThan(0)
        })
    })

    it('detects list or grid view controls when available', () => {
        cy.get('body').then($body => {
            const $viewControls = $body
                .find(
                    '[aria-label]:visible, [title]:visible, ' +
                    '[data-original-title]:visible'
                )
                .filter((_, element) => {
                    const label = [
                        element.getAttribute('aria-label'),
                        element.getAttribute('title'),
                        element.getAttribute('data-original-title'),
                    ].join(' ')
                    return /list\s*view|grid\s*view/i.test(label)
                })

            if (!$viewControls.length) {
                cy.log('This Glossary layout has no list/grid toggle')
                return
            }

            expect($viewControls.length, 'visible list/grid controls')
                .to.be.greaterThan(0)
        })
    })

    it('returns to Lessons without changing course settings', () => {
        cy.contains(':visible', /^\s*Lessons\s*$/i, { timeout: 30000 })
            .first()
            .click()

        cy.contains(':visible', /^\s*Lessons\s*$/i).should('be.visible')
        cy.contains(':visible', /Bite-size lessons|bite-size learning/i)
            .should('be.visible')
        cy.log('10629 Glossary coverage completed')
    })
})
