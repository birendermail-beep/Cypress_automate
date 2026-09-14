// Student validation for linking a course with an instructor.
// Set CYPRESS_SECTION_KEY only when the successful-link scenario should run.
import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'

describe('Link with Instructor using Section Key', () => {
    const openSectionKeyForm = () => {
        StudentPage.visitLOAplusCompleteCourse()
        cy.get('[data-cy="setup_tab"]', { timeout: 30000 })
            .filter(':visible')
            .first()
            .click()
        cy.get('.radio-b', { timeout: 30000 })
            .filter(':visible')
            .first()
            .click()
        cy.get('#code', { timeout: 30000 }).should('be.visible')
        cy.get('#add').filter(':visible').should('be.enabled')
    }

    beforeEach(() => {
        cy.visit('/')
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        openSectionKeyForm()
    })

    it('shows validation when the section key is blank', () => {
        cy.get('#code').clear({ force: true })
        cy.get('#add').filter(':visible').click()

        cy.get('#code').should($field => {
            const field = $field[0]
            const style = field.ownerDocument.defaultView.getComputedStyle(field)
            const rgb = (style.borderColor.match(/\d+/g) || []).map(Number)
            const redBorder = rgb.length >= 3 && rgb[0] > 150 &&
                rgb[1] < 150 && rgb[2] < 150
            const invalid = !field.checkValidity() ||
                field.getAttribute('aria-invalid') === 'true' ||
                /invalid|error|danger/i.test(field.className) ||
                redBorder
            expect(invalid, 'blank section key is visibly invalid').to.eq(true)
        })
    })

    it('rejects an invalid section key', () => {
        const invalidKey = Cypress.env('INVALID_SECTION_KEY') ||
            'INVALID-SECTION-KEY'
        cy.get('#code').clear({ force: true }).type(invalidKey)
        cy.get('#add').filter(':visible').click()

        cy.contains('.msg, [role="alert"], .alert',
            /invalid\s+section\s+key/i, { timeout: 30000 })
            .should('be.visible')
    })

    it('links using a configured valid section key', function() {
        const sectionKey = Cypress.env('SECTION_KEY')
        if (!sectionKey) {
            cy.log('Set CYPRESS_SECTION_KEY to run the successful-link scenario')
            this.skip()
        }

        cy.get('#code').clear({ force: true }).type(sectionKey, { log: false })
        cy.get('#add').filter(':visible').click()

        cy.contains('.msg, [role="alert"], .alert',
            /added\s+successfully|linked\s+successfully|already\s+linked/i,
            { timeout: 30000 })
            .should('be.visible')
    })
})
