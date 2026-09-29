/* @story_id: 15447 @story_name: Amazon login */
import { restoreStudentLogin } from '../../../../support/student-auth'

describe('Amazon login route', () => {
    it('opens the Amazon login route without a blank page', () => {
        restoreStudentLogin()
        cy.visit('/login.php?func=amazon_login', { failOnStatusCode: false })
        cy.location('href', { timeout: 30000 }).should('not.eq', 'about:blank')
        cy.get('body').should('be.visible')
    })
})
