/*
@story_id: 10924
@story_name: Link with Instructor using Section Key
@path: final/6607/Student

Set CYPRESS_LINK_INSTRUCTOR_COURSE_CRN for a course that provides this feature.
The default course is ADA-AUDIT.AA1.
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
        'input[name*="section"]:visible'

    const chooseSectionKey = $scope => {
        const $choice = $scope
            .find('label, button, [role="radio"], .radio-b')
            .filter(':visible')
            .filter((_, element) =>
                /section\s+key/i.test(normalize(element.textContent)))
            .first()

        if ($choice.length) {
            cy.wrap($choice).click({ force: true })
            return
        }

        const $legacyChoice = $scope.find('.radio-b:visible').first()
        expect($legacyChoice.length, 'Section Key choice').to.eq(1)
        cy.wrap($legacyChoice).click({ force: true })
    }

    const openSectionKeyForm = testContext => {
        const course =
            Cypress.env('LINK_INSTRUCTOR_COURSE_CRN') || 'ADA-AUDIT.AA1'

        cy.visit(
            '/?func=load_course&course=' +
            encodeURIComponent(course) +
            '&theme_view=classic'
        )
        cy.location('href', { timeout: 30000 }).should('not.eq', 'about:blank')
        cy.location('search').should('include', 'func=load_course')
        cy.get('body', { timeout: 30000 }).should($body => {
            expect(normalize($body.text()), 'course page is not blank')
                .not.to.eq('')
            expect($body.text()).not.to.include('Default blank page')
        })

        return cy.get('body').then($body => {
            const $setup = $body.find('[data-cy="setup_tab"]:visible').first()

            if ($setup.length) {
                cy.wrap($setup).click({ force: true })
                cy.get('body', { timeout: 30000 })
                    .then($setupBody => chooseSectionKey($setupBody))
                return true
            }

            const $linkLabel = $body
                .find('*')
                .filter(':visible')
                .filter((_, element) => {
                    const ownText = normalize(element.textContent)
                    const childHasSameText = Array.from(element.children)
                        .some(child =>
                            /^Link\s+with\s+Instructor$/i.test(
                                normalize(child.textContent)
                            ))
                    return /^Link\s+with\s+Instructor$/i.test(ownText) &&
                        !childHasSameText
                })
                .last()

            if (!$linkLabel.length) {
                cy.log(
                    'Course ' + course +
                    ' does not provide Link with Instructor; test skipped'
                )
                testContext.skip()
                return false
            }

            const $control = $linkLabel.closest(
                'a, button, [role="button"], [onclick], [tabindex]'
            )
            cy.wrap($control.length ? $control : $linkLabel)
                .click({ force: true })

            cy.get(
                '.modal:visible, [role="dialog"]:visible',
                { timeout: 30000 }
            )
                .last()
                .then($dialog => chooseSectionKey($dialog))

            return true
        }).then(available => {
            if (!available) return

            cy.get(codeSelector, { timeout: 30000 })
                .first()
                .should('be.visible')
                .and('be.enabled')
            cy.get('#add:visible, button[type="submit"]:visible')
                .first()
                .should('be.visible')
                .and('be.enabled')
        })
    }

    const submitSectionKey = value => {
        cy.get(codeSelector).first().clear({ force: true })

        if (value) {
            cy.get(codeSelector).first().type(value, { log: false })
        }

        cy.get('#add:visible, button[type="submit"]:visible')
            .first()
            .click({ force: true })
    }

    beforeEach(function() {
        cy.visit('/')
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        openSectionKeyForm(this)
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
