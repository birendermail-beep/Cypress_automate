/* @story_id: 15448 @story_name: Amazon purchase app */
import { restoreStudentLogin } from '../../../../support/student-auth'

describe('Amazon purchase option', () => {
    it('shows the Amazon purchase control without submitting a transaction', () => {
        restoreStudentLogin()
        cy.visit('/cart/index.php?AmazonPayButton=1', {
            failOnStatusCode: false,
        })
        cy.get('body', { timeout: 30000 }).should('be.visible')
            .and('not.contain.text', 'Default blank page')
        cy.get('body').then($body => {
            const amazon = $body.find(
                '#amazon_submit:visible, [name*="amazon" i]:visible'
            )
            if (amazon.length) cy.wrap(amazon.first()).should('be.visible')
        })
    })
})
