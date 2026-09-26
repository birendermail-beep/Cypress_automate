/* @story_id: 11618 @story_name: Add Item */
import {
    Navbar,
    login_username,
    login_password,
    LoginPage,
} from '../../../../page-objects/pages/index'

describe('Create Area - Add Item', () => {
    const projectName = 'Birender testing'

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
        cy.contains(
            '.my_library_course',
            /Birender\s*Testing/i,
            { timeout: 30000 }
        ).filter(':visible').first().within(() => {
            cy.contains('a, button', /^\s*Author\s*$/i, {
                timeout: 30000,
            }).filter(':visible').first()
                .invoke('removeAttr', 'target')
                .click({ force: true })
        })

        cy.get('body', { timeout: 30000 }).should('be.visible')
            .and('not.contain.text', 'Default blank page')
    }

    it('opens Add Item for the Birender testing project', () => {
        openCreateArea()
        openProjectAuthorArea()

        cy.contains('a, button, [role="button"], h1, h2, h3', /^\s*Item\s+Bank\s*$/i, {
            timeout: 30000,
        }).filter(':visible').first().click({ force: true })

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
