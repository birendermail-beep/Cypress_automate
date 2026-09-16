/*
@story_id: 10924
@story_name: Link with Instructor using Section Key
@path: final/6607/Student

Set CYPRESS_LINK_INSTRUCTOR_COURSE_CRN for a course that provides this feature.
The default course is Demo.AA1.
Set CYPRESS_SECTION_KEY only when the successful-link scenario should run.
*/
import {
    Navbar,
    login_username,
    login_password,
    LoginPage,
} from '../../../../page-objects/pages/index'

describe('Link with Instructor using Section Key', () => {
    const normalize = value => String(value || '').replace(/\s+/g, ' ').trim()
    const codeSelector =
        '#code:visible, input[name="code"]:visible, ' +
        'input[name*="section"]:visible, ' +
        '.modal:visible input[type="text"]:visible, ' +
        '[role="dialog"]:visible input[type="text"]:visible'


    const clickDialogOption = pattern => {
        cy.get('.modal:visible, [role="dialog"]:visible', {
            timeout: 30000,
        })
            .last()
            .then($dialog => {
                const $label = $dialog
                    .find('*')
                    .filter(':visible')
                    .filter((_, element) =>
                        pattern.test(normalize(element.textContent))
                    )
                    .filter((_, element) =>
                        !Array.from(element.children).some(child =>
                            pattern.test(normalize(child.textContent))
                        )
                    )
                    .last()

                expect($label.length, String(pattern) + ' option')
                    .to.be.greaterThan(0)

                const $control = $label.closest(
                    'a, button, label, [role="button"], [role="tab"], ' +
                    '[onclick], [tabindex]'
                )
                cy.wrap($control.length ? $control : $label)
                    .click({ force: true })
            })
    }

    const openSectionKeyForm = () => {
        cy.location('href', { timeout: 30000 }).should('not.eq', 'about:blank')
        cy.get('body', { timeout: 30000 }).should($body => {
            expect(normalize($body.text()), 'course page is not blank')
                .not.to.eq('')
            expect($body.text()).not.to.include('Default blank page')
        })

        cy.get('body').then($body => {
            let $setup = $body.find('[data-cy="setup_tab"]:visible').first()

            if (!$setup.length) {
                $setup = $body
                    .find('a, button, [role="button"], [onclick], [tabindex]')
                    .filter(':visible')
                    .filter((_, element) =>
                        /^SETUP(?:\s+\d+)?$/i.test(
                            normalize(element.textContent)
                        )
                    )
                    .first()
            }

            expect($setup.length, 'SETUP control').to.be.greaterThan(0)
            cy.wrap($setup).click({ force: true })
        })

        cy.get('.modal:visible, [role="dialog"]:visible', {
            timeout: 30000,
        }).should('be.visible')

        clickDialogOption(/^Instruction\s+Type$/i)
        clickDialogOption(/^Instructor-Led$/i)
        clickDialogOption(/^By\s+section\s+key$/i)

        cy.get(codeSelector, { timeout: 30000 })
            .first()
            .should('be.visible')
            .and('be.enabled')
        cy.get(
            '#add:visible, .modal:visible button:visible, ' +
            '[role="dialog"]:visible button:visible'
        ).filter((_, element) =>
            /^ADD$/i.test(normalize(element.textContent)) ||
            element.id === 'add'
        )
            .first()
            .should('be.visible')
            .and('be.enabled')
    }

    const submitSectionKey = value => {
        cy.get(codeSelector).first().clear({ force: true })

        if (value) {
            cy.get(codeSelector).first().type(value, { log: false })
        }

        cy.get(
            '#add:visible, .modal:visible button:visible, ' +
            '[role="dialog"]:visible button:visible'
        ).filter((_, element) =>
            /^ADD$/i.test(normalize(element.textContent)) ||
            element.id === 'add'
        )
            .first()
            .click({ force: true })
    }

    beforeEach(function() {
        const course =
            Cypress.env('LINK_INSTRUCTOR_COURSE_CRN') ||
            'Demo.AA1'

        cy.visit('/')
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)

        const learnerPath =
            '/app/?func=load_course&course=' +
            encodeURIComponent(course)

        cy.visit(learnerPath, {
            onBeforeLoad(win) {
                Object.defineProperty(win, 'open', {
                    configurable: true,
                    value(url) {
                        if (url && url !== win.location.href) {
                            win.location.assign(url)
                        }
                        return win
                    },
                })
                Object.defineProperty(win, 'close', {
                    configurable: true,
                    value() {},
                })
            },
        })
        cy.location('search', { timeout: 30000 })
            .should('include', 'func=load_course')
            .and('include', 'course=' + encodeURIComponent(course))
            .and('not.include', 'class_code=')
        openSectionKeyForm()
    })

    it('shows validation when the section key is blank', () => {
        submitSectionKey('')

        cy.get(codeSelector).first().should($field => {
            const field = $field[0]
            const style = field.ownerDocument.defaultView
                .getComputedStyle(field)
            const rgb = (style.borderColor.match(/\d+/g) || []).map(Number)
            const redBorder = rgb.length >= 3 &&
                rgb[0] > 150 && rgb[1] < 150 && rgb[2] < 150
            const invalid =
                !field.checkValidity() ||
                field.getAttribute('aria-invalid') === 'true' ||
                /invalid|error|danger/i.test(field.className) ||
                redBorder

            expect(invalid, 'blank section key is visibly invalid')
                .to.eq(true)
        })
    })

    it('rejects an invalid section key', () => {
        const invalidKey =
            Cypress.env('INVALID_SECTION_KEY') || 'INVALID-SECTION-KEY'
        submitSectionKey(invalidKey)

        cy.contains(
            '.msg:visible, [role="alert"]:visible, .alert:visible',
            /invalid|incorrect|not\s+valid|not\s+found|unable\s+to\s+link/i,
            { timeout: 30000 }
        ).should('be.visible')
    })

    it('links using a configured valid section key', function() {
        const sectionKey = Cypress.env('SECTION_KEY')

        if (!sectionKey) {
            cy.log(
                'Set CYPRESS_SECTION_KEY to run the successful-link scenario'
            )
            this.skip()
        }

        submitSectionKey(sectionKey)

        cy.contains(
            '.msg:visible, [role="alert"]:visible, .alert:visible',
            /added\s+successfully|linked\s+successfully|already\s+linked/i,
            { timeout: 30000 }
        ).should('be.visible')
    })
})
