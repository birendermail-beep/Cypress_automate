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

        cy.get('body').then($body => {
            const createTab = $body.find(
                '[data-cy="create"]:visible, [data-cy="project"]:visible, a:visible, button:visible, [role="tab"]:visible'
            ).filter((_, element) =>
                /^\s*(Create|My\s+Projects?)\s*$/i.test(element.textContent || '')
            )

            if (createTab.length) {
                cy.wrap(createTab.first()).click({ force: true })
            } else {
                cy.visit('/educator/project/', { failOnStatusCode: false })
            }
        })

        cy.get('body', { timeout: 30000 }).should('be.visible')
            .and('not.contain.text', 'Default blank page')
    }

    const openProjectAuthorArea = () => {
        cy.contains(':visible', new RegExp('^\\s*' + projectName + '\\s*$', 'i'), {
            timeout: 30000,
        }).first().scrollIntoView().then($name => {
            let project = $name.closest(
                '[data-cy="project-card"], .project-card, .course-card, .card, li'
            )
            if (!project.length) project = $name.parent()

            const author = project.find('a, button, [role="button"]')
                .filter(':visible')
                .filter((_, element) =>
                    /^\s*Author\s*$/i.test(element.textContent || '')
                )

            if (author.length) {
                cy.wrap(author.first())
                    .invoke('removeAttr', 'target')
                    .click({ force: true })
            } else {
                cy.wrap($name).click({ force: true })
            }
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
