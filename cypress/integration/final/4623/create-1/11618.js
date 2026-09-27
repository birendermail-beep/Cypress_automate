/* @story_id: 11618 @story_name: Add Item */
import {
    Navbar,
    login_username,
    login_password,
    LoginPage,
} from '../../../../page-objects/pages/index'

describe('Create Area - Add Item', () => {
    const projectName = 'BirenderTesting'

    const setEditorText = (selector, value) => {
        cy.get(selector, { timeout: 30000 })
            .filter(':visible')
            .first()
            .should('exist')
            .click({ force: true })

        // Clicking activates the rich-text editor and replaces its DOM node.
        // Re-query it before typing instead of chaining from the old node.
        cy.get(selector, { timeout: 30000 })
            .filter(':visible')
            .first()
            .type(`{selectall}{backspace}${value}`, { force: true })
    }

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
        // Jigyaasa occasionally throws known application-side errors while
        // Editor 2.0 loads. Ignore only these exact editor initialization errors.
        cy.on('uncaught:exception', error => {
            const knownEditorAppendError =
                error.name === 'SyntaxError' &&
                /appendChild.*Invalid or unexpected token/i.test(
                    error.message || ''
                )
            const knownEditorFocusError =
                error.name === 'TypeError' &&
                /Cannot read properties of null \(reading ['"]focus['"]\)/i.test(
                    error.message || ''
                ) &&
                /prepengine-footer\.min\.js/i.test(error.stack || '')
            const knownAuthorActivateError =
                error.name === 'ReferenceError' &&
                /^activate is not defined$/i.test(error.message || '') &&
                /\/educator\/project\//i.test(error.stack || '')
            const knownIsotopeSortError =
                error.name === 'TypeError' &&
                /Cannot set properties of undefined \(setting ['"]sortBy['"]\)/i.test(
                    error.message || ''
                ) &&
                /isotope\.pkgd\.min\.js/i.test(error.stack || '')
            const knownSvelteEffectOrphanError =
                /https:\/\/svelte\.dev\/e\/effect_orphan/i.test(
                    error.message || ''
                ) &&
                /svelte_items\/public\/build\/editor\/main\.js/i.test(
                    error.stack || ''
                )

            if (
                knownEditorAppendError ||
                knownEditorFocusError ||
                knownAuthorActivateError ||
                knownIsotopeSortError ||
                knownSvelteEffectOrphanError
            ) return false
            return undefined
        })

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

        // Use the Item Bank's actual lesson control. Text/row clicks only
        // focus the chapter and leave the right panel empty.
        cy.get('[data-cy="lesson_obj"]', { timeout: 30000 })
            .filter(':visible')
            .first()
            .click({ force: true })

        cy.get('body', { timeout: 30000 }).should($body => {
            expect(
                $body.text(),
                'items loaded after selecting Java Building Blocks'
            ).not.to.contain(
                'From the left panel, select an appropriate option to show items.'
            )
        })

        cy.contains('button, a, [role="button"]', /^\s*Add\s+Item\s*$/i, {
            timeout: 30000,
        }).filter(':visible')
            .first()
            .click({ force: true })

        // New Item launches Editor 2.0 with window.open(). Cypress cannot
        // control the new browser tab, so capture its URL and visit it here.
        cy.window().then(win => {
            cy.stub(win, 'open').as('newItemWindow').returns(null)
        })

        cy.contains(':visible', /^\s*New\s+Item\s*$/i, {
            timeout: 30000,
        }).first().then($newItemLabel => {
            // The visible text can be inside the link. Removing target from the
            // text node does nothing and Editor 2.0 opens in a second tab,
            // which Cypress cannot control. Always modify and click the anchor.
            const newItemLink = $newItemLabel.is('a')
                ? $newItemLabel
                : $newItemLabel.closest('a')

            expect(newItemLink.length, 'New Item link').to.be.greaterThan(0)
            cy.wrap(newItemLink)
                .invoke('removeAttr', 'target')
                .click({ force: true })
        })

        cy.get('@newItemWindow', { timeout: 30000 })
            .should('have.been.called')
            .then(openStub => {
                const editorUrl = openStub.firstCall.args[0]
                expect(editorUrl, 'Editor 2.0 popup URL')
                    .to.be.a('string')
                    .and.not.be.empty
                cy.visit(editorUrl)
            })

        cy.get('body', { timeout: 30000 }).should($body => {
            expect($body.text(), 'new item type choices')
                .to.match(/Multiple\s+Choice|New\s+Item|Add\s+Item/i)
        })

        // Multiple Choice is the first template in this category; if it is
        // unavailable, the first visible Create control is Choice Matrix.
        // Targeting the button avoids depending on the cards' changing DOM.
        cy.get('a, button, [role="button"]', { timeout: 30000 })
            .filter(':visible')
            .filter((_, control) =>
                /^\s*Create\s*$/i.test(control.textContent || '')
            )
            .should('have.length.greaterThan', 0)
            .first()
            .invoke('removeAttr', 'target')
            .click({ force: true })

        // Editor 2.0 initializes inline fields differently in headed and
        // headless Chrome. Use TinyMCE when registered; otherwise update the
        // rendered contenteditable field and dispatch the events Svelte uses.
        const setRichText = (selector, text, html = text) => {
            cy.get(selector, { timeout: 60000 })
                .filter(':visible')
                .first()
                .should('exist')
                .then($field => {
                    const field = $field[0]
                    const editorWindow = field.ownerDocument.defaultView
                    const editor = field.id && editorWindow.tinymce
                        ? editorWindow.tinymce.get(field.id)
                        : null

                    if (editor) {
                        editor.setContent(html)
                        editor.setDirty(true)
                        editor.fire('input')
                        editor.fire('change')
                        editor.save()
                        return
                    }

                    field.focus()
                    field.innerHTML = html
                    field.dispatchEvent(new Event('input', { bubbles: true }))
                    field.dispatchEvent(new Event('change', { bubbles: true }))
                    field.dispatchEvent(new Event('blur', { bubbles: true }))
                })

            cy.get(selector, { timeout: 30000 })
                .filter(':visible')
                .first()
                .should('contain.text', text)
        }

        const titleText = 'Sample Test Question'
        setRichText('#title', titleText)

        const stemText =
            'Which of the following is the primary function of an ' +
            'operating system?'
        setRichText(
            '#stem > .ebook_item_text',
            stemText,
            `<p>${stemText}</p>`
        )

        // Mark option A as the correct answer without toggling it off on retry.
        cy.get('#userans-A, input[type="checkbox"]', { timeout: 30000 })
            .filter(':visible')
            .first()
            .then($answer => {
                if ($answer.is(':checkbox')) {
                    cy.wrap($answer).check({ force: true })
                    cy.wrap($answer).should('be.checked')
                } else if (!$answer.hasClass('active')) {
                    cy.wrap($answer).click({ force: true })
                }
            })

        // Re-verify every required authoring field immediately before Save.
        cy.get('#title').should('contain.text', titleText)
        cy.get('#stem > .ebook_item_text').should('contain.text', stemText)
        cy.get('#userans-A, input[type="checkbox"]')
            .filter(':visible')
            .first()
            .should('be.checked')

        // Accept a native confirmation if this editor build uses one.
        cy.on('window:confirm', () => true)
        cy.on('window:alert', () => true)

        cy.contains('a, button, [role="button"]', /^\s*Save\s*$/i, {
            timeout: 30000,
        }).filter(':visible')
            .first()
            .click({ force: true })

        // This confirmation component has no stable dialog class or role.
        // Anchor on its heading, then use the Save action from that popup.
        cy.contains(':visible', /^\s*Confirmation\s*$/i, {
            timeout: 30000,
        }).should('be.visible')
            .then($heading => {
                const dialog = $heading.parents().filter((_, container) => {
                    const actions = Cypress.$(container)
                        .find('button, a, [role="button"]')
                        .filter(':visible')
                    const labels = actions.toArray().map(action =>
                        (action.textContent || '').trim()
                    )
                    return labels.includes('Cancel') && labels.includes('Save')
                }).first()

                expect(dialog.length, 'Confirmation dialog')
                    .to.be.greaterThan(0)

                const confirm = dialog
                    .find('button, a, [role="button"]')
                    .filter(':visible')
                    .filter((_, control) =>
                        /^\s*Save\s*$/i.test(control.textContent || '')
                    )
                    .first()

                expect(confirm.length, 'save confirmation action')
                    .to.be.greaterThan(0)
                cy.wrap(confirm).click({ force: true })
            })

        // Complete Content Settings before performing the final Save.
        const getContentSettingsDialog = () =>
            cy.contains(':visible', /^\s*Content\s+Settings\s*$/i, {
                timeout: 30000,
            }).should('be.visible')
                .then($heading => {
                    const dialog = $heading.parents().filter((_, container) => {
                        const actions = Cypress.$(container)
                            .find('button, a, [role="button"]')
                            .filter(':visible')
                        const labels = actions.toArray().map(action =>
                            (action.textContent || '').trim()
                        )
                        return labels.includes('Close') &&
                            labels.includes('Save')
                    }).first()

                    expect(dialog.length, 'Content Settings dialog')
                        .to.be.greaterThan(0)
                    return cy.wrap(dialog)
                })

        getContentSettingsDialog()
            .find('select')
            .should('have.length.at.least', 3)

        getContentSettingsDialog()
            .find('select')
            .eq(0)
            .should('contain.text', '1 Java Building Blocks')
            .select('1 Java Building Blocks', { force: true })

        getContentSettingsDialog()
            .find('select')
            .eq(1)
            .should(
                'contain.text',
                '1.1 Understanding the Java Class Structure'
            )
            .select(
                '1.1 Understanding the Java Class Structure',
                { force: true }
            )

        getContentSettingsDialog()
            .find('select')
            .eq(2)
            .should('contain.text', 'Exercise')
            .select('Exercise', { force: true })

        // Verify every coverage field has its requested value before Save.
        getContentSettingsDialog().find('select').eq(0)
            .find('option:selected')
            .should('have.text', '1 Java Building Blocks')
        getContentSettingsDialog().find('select').eq(1)
            .find('option:selected')
            .should('have.text', '1.1 Understanding the Java Class Structure')
        getContentSettingsDialog().find('select').eq(2)
            .find('option:selected')
            .should('have.text', 'Exercise')

        getContentSettingsDialog().then($dialog => {
            const save = $dialog
                .find('button, a, [role="button"]')
                .filter(':visible')
                .filter((_, control) =>
                    /^\s*Save\s*$/i.test(control.textContent || '')
                )
                .first()

            expect(save.length, 'Content Settings Save action')
                .to.be.greaterThan(0)
            cy.wrap(save).click({ force: true })
        })
    })
})
