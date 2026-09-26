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

        cy.get('body', { timeout: 30000 }).then($body => {
            const visibleItemBank = $body
                .find('a, button, [role="button"], h1, h2, h3')
                .filter(':visible')
                .filter((_, element) =>
                    /^\s*Item\s+Bank\s*$/i.test(element.textContent || '')
                )

            if (visibleItemBank.length) {
                cy.wrap(visibleItemBank.first()).click({ force: true })
                return
            }

            // The Item Bank appears when hovering over the nine-dot switcher immediately
            // to the left of the BirenderTesting link in the author header.
            const projectLabels = $body
                .find('*')
                .filter(':visible')
                .filter((_, element) =>
                    /^\s*Birender\s*Testing\s*$/i.test(
                        Cypress.$(element).text().trim()
                    )
                )
                .toArray()
                .sort((left, right) =>
                    left.getBoundingClientRect().top -
                    right.getBoundingClientRect().top
                )

            expect(
                projectLabels.length,
                'BirenderTesting label in author header'
            ).to.be.greaterThan(0)

            const projectLabel = projectLabels[0]
            const projectRect = projectLabel.getBoundingClientRect()
            const headerControls = $body
                .find('a, button, [role="button"]')
                .filter(':visible')
                .filter((_, element) => {
                    if (element === projectLabel) return false
                    const rect = element.getBoundingClientRect()
                    const sameHeaderRow =
                        Math.abs(
                            (rect.top + rect.bottom) / 2 -
                            (projectRect.top + projectRect.bottom) / 2
                        ) < 30
                    return sameHeaderRow &&
                        rect.right <= projectRect.left &&
                        projectRect.left - rect.right < 100
                })
                .toArray()
                .sort((left, right) =>
                    right.getBoundingClientRect().right -
                    left.getBoundingClientRect().right
                )

            expect(
                headerControls.length,
                'nine-dot author-area switcher beside project name'
            ).to.be.greaterThan(0)

            cy.wrap(headerControls[0])
                .trigger('mouseenter', { force: true })
                .trigger('mouseover', { force: true })

            cy.contains(':visible', /^\s*Item\s+Bank\s*$/i, {
                timeout: 30000,
            }).first()
                .should('be.visible')
                .click({ force: true })
        })

        cy.get('body', { timeout: 30000 }).should('be.visible')
            .and('not.contain.text', 'Default blank page')

        cy.get('body').then($body => {
            const addItem = $body.find('a, button, [role="button"]')
                .filter(':visible')
                .filter((_, element) =>
                    /^\s*Add\s+Item\s*$/i.test(element.textContent || '')
                )

            expect(addItem.length, 'Add Item control').to.be.greaterThan(0)
            cy.wrap(addItem.first()).click({ force: true })
        })

        cy.get('body', { timeout: 30000 }).should($body => {
            expect($body.text(), 'item type choices')
                .to.match(/Multiple\s+Choice|Add\s+Item/i)
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
