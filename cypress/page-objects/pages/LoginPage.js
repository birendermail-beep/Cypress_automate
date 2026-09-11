import BasePage from '../BasePage'

export default class LoginPage extends BasePage {
    static loginPage(username, password) {
        if (!username || !password) {
            throw new Error(
                'Missing Cypress login credentials. Set CYPRESS_USERNAME and CYPRESS_PASSWORD before running authenticated specs.'
            )
        }

        cy.get('body').then(($body) => {
            const emailSelector = ['#email', 'input[type="email"]', 'input[name="email"]']
                .find((selector) => $body.find(selector).length)
            const passwordSelector = ['#password', 'input[type="password"]', 'input[name="password"]']
                .find((selector) => $body.find(selector).length)

            if (!emailSelector || !passwordSelector) {
                throw new Error('Unable to locate the current uCertify login fields.')
            }

            cy.get(emailSelector).first().clear().type(username, { log: false })
            cy.get(passwordSelector).first().clear().type(password, { log: false })
        })

        cy.get('body').then(($body) => {
            const submitSelector = ['#submit', 'button[type="submit"]', 'input[type="submit"]']
                .find((selector) => $body.find(selector).length)

            if (!submitSelector) {
                throw new Error('Unable to locate the current uCertify login submit button.')
            }

            cy.get(submitSelector).first().click({ force: true })
        })
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
