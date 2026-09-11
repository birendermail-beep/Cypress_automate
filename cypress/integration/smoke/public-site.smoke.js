describe('Jigyaasa public site smoke checks', () => {
    it('loads the configured Jigyaasa site successfully', () => {
        cy.visit('/')
        cy.location('hostname').should('include', 'jigyaasa')
        cy.get('body').should('be.visible').and('not.be.empty')
    })

    it('renders usable page content', () => {
        cy.visit('/')
        cy.document().its('readyState').should('eq', 'complete')
        cy.get('body').invoke('text').should('not.be.empty')
    })
})
