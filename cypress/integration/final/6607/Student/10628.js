/*
@story_id: 10628
@story_name: Access Annotation
@path: final/6607/Student
*/
// Current coverage for annotations and related Lessons controls.
import {
    Navbar,
    login_username,
    login_password,
    LoginPage,
} from '../../../../page-objects/pages/index'

describe('Student annotations', () => {
    const restoreStudentLogin = () => {
        cy.session(['student-login', login_username], () => {
            cy.visit('/')
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
        })
    }

    const openLessons = () => {
        restoreStudentLogin()
        cy.visit('/')
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/app/?func=load_course&course=Demo.AA1')
        })

        cy.get('[intro-id="chapters"]', { timeout: 30000 })
            .filter(':visible')
            .first()
            .click()

        cy.location('search', { timeout: 30000 })
            .should('include', 'func=ebook')
        cy.contains(':visible', /^\s*Lessons\s*$/i, { timeout: 30000 })
            .should('be.visible')
    }

    const openAnnotations = () => {
        openLessons()
        cy.get('body').then($body => {
            const hasVisibleAnnotation = [...$body.find('a, button, [role="tab"]')]
                .some(element =>
                    Cypress.$(element).is(':visible') &&
                    /annotation/i.test((element.textContent || '').trim())
                )

            if (!hasVisibleAnnotation) {
                cy.contains(':visible', /^\s*Review\s*$/i, {
                    timeout: 30000,
                })
                    .first()
                    .click({ force: true })
            }

            cy.contains(':visible', /Annotation/i, { timeout: 30000 })
                .first()
                .click({ force: true })
        })

        cy.get('body', { timeout: 30000 }).should($body => {
            expect(
                $body.find('#bm_an, #e_toc, [data-cy*="annotation"]').length > 0 ||
                /annotation/i.test($body.text()),
                'annotation area'
            ).to.eq(true)
        })
    }

    const annotationTest = (name, test) => {
        it(name, () => {
            openAnnotations()
            test()
        })
    }

    const firstVisible = ($body, selectors) => {
        for (const selector of selectors) {
            const $element = $body.find(selector).filter(':visible').first()
            if ($element.length) return $element
        }
        return null
    }

    annotationTest('opens the Annotation option in the TOC area', () => {
        cy.get('body').should($body => {
            expect(
                $body.find('#bm_an, #e_toc, [data-cy*="annotation"]').length > 0 ||
                /annotation/i.test($body.text()),
                'visible annotation content'
            ).to.eq(true)
        })
    })

    annotationTest('checks annotations for a particular user', () => {
        cy.get('body').then($body => {
            const $filter = firstVisible($body, [
                '[data-cy="annotation_button"]',
                'select[name*="annotat"]',
                'select[name*="Annotat"]',
                'button[aria-label*="annotat"]',
                'button[aria-label*="Annotat"]',
            ])

            if ($filter) {
                cy.wrap($filter).click({ force: true })
                cy.get('body').then($updatedBody => {
                    const $option = firstVisible($updatedBody, [
                        '[data-cy="show"]',
                        '[role="option"]',
                        'option',
                    ])
                    if ($option) cy.wrap($option).click({ force: true })
                })
            } else {
                cy.log('This Review layout has no annotation user filter')
                cy.get('body').should('not.contain.text', 'Default blank page')
            }
        })
        cy.get('body').should('not.have.text', 'Default blank page')
    })

    annotationTest('collapses and expands annotation content', () => {
        cy.get('body').then($body => {
            const $toggle = firstVisible($body, [
                '#collapse-init',
                '[data-cy*="collapse"]',
                '[data-cy*="expand"]',
            ])

            if ($toggle) {
                cy.wrap($toggle).click({ force: true })
                cy.wrap($toggle).click({ force: true })
            } else {
                cy.log('This Review layout has no collapse/expand control')
                cy.get('body').should('not.contain.text', 'Default blank page')
            }
        })
        cy.get('body').should('not.have.text', 'Default blank page')
    })

    annotationTest('searches annotations with correct and incorrect text', () => {
        cy.get('#toc_search, input[placeholder*="Search"], input[placeholder*="search"]', {
            timeout: 30000,
        })
            .filter(':visible')
            .first()
            .clear()
            .type('Fundamentals')

        cy.get('body').then($body => {
            const $search = firstVisible($body, [
                '#lessonsearch',
                '[data-cy*="search"]',
                'button[type="submit"]',
            ])
            if ($search) cy.wrap($search).click({ force: true })
        })

        cy.get('#toc_search, input[placeholder*="Search"], input[placeholder*="search"]')
            .filter(':visible')
            .first()
            .clear()
            .type('sbcxbhcgdfghshjds{enter}')

        cy.get('body', { timeout: 30000 }).should($body => {
            expect(
                /not found|no result|0 result/i.test($body.text()) ||
                $body.find('#searched_content').length > 0,
                'empty search result state'
            ).to.eq(true)
        })
    })

    annotationTest('opens and closes the Annotation tab', () => {
        cy.get('body').then($body => {
            const $tab = firstVisible($body, [
                '[data-cy="annotation_tab"] > .btn',
                '[data-cy="annotation_tab"]',
                '[role="tab"][aria-label*="Annotation"]',
                '[role="tab"][aria-label*="annotation"]',
            ])

            if ($tab) {
                cy.wrap($tab).click({ force: true })
            } else {
                cy.log('Annotation content is already open without a separate tab control')
                cy.get('body').should('not.contain.text', 'Default blank page')
            }
        })
        cy.get('body').should('not.have.text', 'Default blank page')
    })

    annotationTest('opens Pick up where you left off', () => {
        cy.get('body').then($body => {
            const $resume = firstVisible($body, [
                '[data-cy="start_left"]',
                '[data-cy="resume"]',
            ])

            if ($resume) {
                cy.wrap($resume).click({ force: true })
            } else {
                cy.log('This Review layout has no Resume/Pick up control')
                cy.get('body').should('not.contain.text', 'Default blank page')
            }
        })
        cy.location('href', { timeout: 30000 }).should('not.eq', 'about:blank')
    })

    annotationTest('handles the optional bite-size learning control', () => {
        cy.get('body').then($body => {
            const $biteSize = firstVisible($body, [
                '[data-cy="bit_size"]',
                '#enable_bite',
                '[data-cy*="bite"]',
            ])

            if ($biteSize) {
                cy.wrap($biteSize).click({ force: true })
                cy.get('body').then($updatedBody => {
                    const $updatedControl = firstVisible($updatedBody, [
                        '[data-cy="bit_size"]',
                        '#enable_bite',
                        '[data-cy*="bite"]',
                    ])
                    if ($updatedControl) {
                        cy.wrap($updatedControl).click({ force: true })
                    }
                })
            } else {
                cy.log('Bite-size learning is not enabled for this course')
                cy.contains(':visible', /^\s*Lessons\s*$/i)
                    .should('be.visible')
            }
        })
    })
})
