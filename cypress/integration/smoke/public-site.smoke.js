describe('uCertify public site smoke checks', () => {
    const baseUrl = Cypress.env('BASE_URL') || 'https://www.ucertify.com'

    it('loads the uCertify public site successfully', () => {
        cy.visit(baseUrl)
        cy.location('hostname').should('include', 'ucertify')
        cy.get('body').should('be.visible').and('not.be.empty')
    })

    it('exposes a login or sign-in entry point', () => {
        cy.visit(baseUrl)
        cy.get('body').then(($body) => {
            const legacyLogin = $body.find('[data-cy="login_signup_cy"]').length > 0
            const visibleText = $body.text()
            const currentLogin = /log\s*in|sign\s*in/i.test(visibleText)

            expect(legacyLogin || currentLogin, 'login entry point').to.eq(true)
        })
    })
})
