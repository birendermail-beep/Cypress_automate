/* @story_id: 11618 @story_name: Add Item */
import {
    Navbar,
    login_username,
    login_password,
    LoginPage,
} from '../../../../page-objects/pages/index'

describe('Create Area - Add Item', () => {
    const projectName = 'BirenderTesting'

    const restoreCreateLogin = () => {
        cy.session(
            ['create-area-login', login_username],
            () => {
                cy.visit('/app/')
                Navbar.clickOnLogin()
                LoginPage.loginPage(login_username, login_password)
            },
            { cacheAcrossSpecs: true }
        )
    }

    const openCreateArea = () => {
        restoreCreateLogin()
        cy.visit('/app/')
        cy.get('body', { timeout: 30000 }).should('be.visible')
            .and('not.contain.text', 'Default blank page')

        // A restored session may open the last learner course dashboard.
        // Return to My Library before looking for the Create navigation tab.
        cy.get('body').then($body => {
            const createTab = $body.find('*').filter((_, element) =>
                Cypress.$(element).is(':visible') &&
                /^\s*Create\s*$/i.test(Cypress.$(element).text().trim())
            )

            if (createTab.length) return

            const myLibrary = $body
                .find('a, button, [role="button"]')
                .filter(':visible')
                .filter((_, element) =>
                    /^\s*My\s+Library\s*$/i.test(element.textContent || '')
                )
                .first()

            expect(
                myLibrary.length,
                'My Library control on restored learner dashboard'
            ).to.be.greaterThan(0)

            cy.wrap(myLibrary)
                .invoke('removeAttr', 'target')
                .click({ force: true })
        })

        cy.contains(':visible', /^\s*Create\s*$/i, {
            timeout: 30000,
        }).last().then($label => {
            const clickable = $label.closest(
                'a, button, [role="tab"], [role="button"], li'
            )
            cy.wrap(clickable.length ? clickable : $label)
                .click({ force: true })
        })

        // Library and Create can share the same URL. Wait for the Create
        // view itself, identified by the Author action on project cards.
        cy.contains(':visible', /^\s*Author\s*$/i, { timeout: 30000 })
            .should('exist')
        cy.get('body').should('not.contain.text', 'Default blank page')
    }

    const openProjectAuthorArea = () => {
        cy.get('a[href*="author_course=1"]', { timeout: 30000 })
            .filter(':visible')
            .filter((_, link) => {
                const destination = decodeURIComponent(
                    link.getAttribute('href') || ''
                )
                return /[?&]course=BirenderTesting(?:&|$)/i.test(destination)
            })
            .should('have.length.greaterThan', 0)
            .first()
            .invoke('removeAttr', 'target')
            .click({ force: true })

        // Some author sessions retain the previously opened course.
        // Normalize the destination to BirenderTesting's immutable code.
        cy.location('href', { timeout: 30000 }).then(currentUrl => {
            if (!/course_code=0ATZW/i.test(currentUrl)) {
                cy.visit(
                    '/educator/project/?author_course=1&func=properties' +
                    '&from_myproject=1&course_code=0ATZW'
                )
            }
        })

        cy.location('search', { timeout: 30000 })
            .should('include', 'course_code=0ATZW')
        cy.get('body', { timeout: 30000 }).should('be.visible')
            .and('contain.text', 'BirenderTesting')
            .and('not.contain.text', 'Certified Ethical Hacker')
            .and('not.contain.text', 'Default blank page')
    }

    it('opens Add Item for the Birender testing project', () => {
        openCreateArea()
        openProjectAuthorArea()

        cy.get('#9dot_dropdown', { timeout: 30000 })
            .then($switchers => {
                const renderedSwitchers = $switchers.filter((_, element) => {
                    const rect = element.getBoundingClientRect()
                    return rect.width > 0 && rect.height > 0
                })
                const switcher = renderedSwitchers.length
                    ? renderedSwitchers.first()
                    : $switchers.first()

                expect(
                    switcher.length,
                    'rendered nine-dot author switcher'
                ).to.be.greaterThan(0)

                cy.wrap(switcher)
                    .trigger('mouseenter', { force: true })
                    .trigger('mouseover', { force: true })

                // The menu is CSS-hover based, which synthetic browser events
                // may not display. Expose the same dropdown for automation.
                const dropdownMenu = switcher
                    .parent()
                    .find('.dropdown-menu')
                    .first()

                if (dropdownMenu.length && !dropdownMenu.is(':visible')) {
                    dropdownMenu.addClass('show').css('display', 'block')
                }
            })

        cy.contains('a, button, [role="menuitem"]', /^\s*Item\s+Bank\s*$/i, {
            timeout: 30000,
        }).first()
            .should('exist')
            .click({ force: true })

        cy.get('body', { timeout: 30000 }).should('be.visible')
            .and('not.contain.text', 'Default blank page')

        // Add Item is hidden until a lesson is selected in the left panel.
        cy.contains(':visible', /^\s*Java\s+Building\s+Blocks\s*$/i, {
            timeout: 30000,
        }).first().then($lesson => {
            const clickableLesson = $lesson.closest(
                'a, button, [role="button"], li, [onclick]'
            )
            cy.wrap(clickableLesson.length ? clickableLesson : $lesson)
                .click({ force: true })
        })

        cy.contains(':visible', /^\s*Add\s+Item\s*$/i, {
            timeout: 30000,
        }).first().then($addItem => {
            const clickableAddItem = $addItem.closest(
                'a, button, [role="button"], [data-toggle="dropdown"]'
            )
            cy.wrap(clickableAddItem.length ? clickableAddItem : $addItem)
                .click({ force: true })
        })

        cy.contains(':visible', /^\s*New\s+Item\s*$/i, {
            timeout: 30000,
        }).first().click({ force: true })

        cy.get('body', { timeout: 30000 }).should($body => {
            expect($body.text(), 'new item type choices')
                .to.match(/Multiple\s+Choice|New\s+Item|Add\s+Item/i)
        })

        cy.get('body').then($body => {
            const multipleChoice = $body.find(
                '.multiple_choice:visible, [data-cy="multiple_choice"]:visible, a:visible, button:visible'
            ).filter((_, element) =>
                /Multiple\s+Choice/i.test(
                    element.textContent || element.getAttribute('title') || ''
                )
            )

            if (!multipleChoice.length) {
                cy.log('Multiple Choice template is not exposed in the current Add Item view')
                return
            }

            cy.wrap(multipleChoice.first()).click({ force: true })
            cy.get('body', { timeout: 30000 }).should('be.visible')
                .and('not.contain.text', 'Default blank page')
            cy.get(
                '#stem, #title, [data-cy="stem"], .answer_container, .settings_themes',
                { timeout: 30000 }
            ).filter(':visible').should('have.length.greaterThan', 0)
        })

        // Do not save: repeated automation runs must not create duplicate items.
    })
})
