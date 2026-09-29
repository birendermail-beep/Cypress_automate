/* @story_id: 21562 @story_name: Sign Up */

describe('Student sign up', () => {
    it('opens the Sign Up form without creating an account', () => {
        cy.visit('/login.php', { failOnStatusCode: false })
        cy.get('body', { timeout: 30000 }).should('be.visible')

        cy.contains('a, button', /^\s*Sign\s*Up\s*$/i, { timeout: 30000 })
            .filter(':visible')
            .first()
            .then($action => {
                const href = $action.attr('href')
                if (href && !href.startsWith('javascript:')) {
                    cy.visit(href, { failOnStatusCode: false })
                } else {
                    cy.wrap($action).click({ force: true })
                }
            })

        cy.get('body', { timeout: 30000 }).should('be.visible')
            .and('not.contain.text', 'Default blank page')
        cy.get(
            'input[type="email"], input[name*="email"], input[placeholder*="EMAIL"]',
            { timeout: 30000 }
        ).filter(':visible').should('have.length.greaterThan', 0)
        // Intentionally do not submit: the test must not create a real account.
    })
})
