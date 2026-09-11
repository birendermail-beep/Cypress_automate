import BasePage from '../BasePage'

export default class LoginPage extends BasePage {
    static loginPage(username, password) {
        const resolvedUsername = username || Cypress.env('login_username') || ''
        const resolvedPassword = password || Cypress.env('login_password') || ''

        if (!resolvedUsername || !resolvedPassword) {
            throw new Error(
                'Missing Cypress login credentials. Configure CYPRESS_USERNAME and CYPRESS_PASSWORD before running authenticated specs.'
            )
        }

        cy.location('pathname', { timeout: 30000 }).should('include', 'login.php')

        cy.get(
            '#email, input[type="email"], input[name="email"], input[placeholder="ENTER EMAIL"]',
            { timeout: 30000 }
        )
            .filter(':visible')
            .first()
            .clear()
            .type(resolvedUsername, { log: false })

        cy.get(
            '#password, input[type="password"], input[name="password"], input[placeholder="ENTER PASSWORD"]',
            { timeout: 30000 }
        )
            .filter(':visible')
            .first()
            .clear()
            .type(resolvedPassword, { log: false })

        cy.get('body').then(($body) => {
            const submitSelector = ['#submit', 'button[type="submit"]', 'input[type="submit"]']
                .find((selector) => $body.find(selector).filter(':visible').length)

            if (submitSelector) {
                cy.get(submitSelector).filter(':visible').first().click({ force: true })
                return
            }

            cy.contains('button', /^\s*SIGN IN\s*$/i, { timeout: 30000 })
                .should('be.visible')
                .click({ force: true })
        })

        cy.location('pathname', { timeout: 30000 }).should('not.include', 'login.php')
    }

    static visitOnClick(selector) {
        cy.get(selector).should('have.attr', 'href').then((href) => {
            cy.visit(href)
        })
    }

    static visitOnFooter(text) {
        cy.contains('a', text).should('have.attr', 'href').then((href) => {
            cy.visit(href)
        })
    }

    static clickOnCourseCat() {
        ;['IT / Computer Science', 'Project Management', 'Vocational Training', 'Coding'].forEach((category) => {
            cy.contains('a, button', category).click({ force: true })
        })
    }
}
