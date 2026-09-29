/* @story_id: 21561 @story_name: Sign In */
import { restoreStudentLogin } from '../../../../support/student-auth'

describe('Student sign in', () => {
    it('signs in with the configured student account', () => {
        restoreStudentLogin()
        cy.visit('/app/')
        cy.location('pathname', { timeout: 30000 })
            .should('not.include', 'login.php')
        cy.get('body').should('be.visible')
            .and('not.contain.text', 'Default blank page')
        cy.get('body').should('not.contain.text', 'ENTER PASSWORD')
    })
})
