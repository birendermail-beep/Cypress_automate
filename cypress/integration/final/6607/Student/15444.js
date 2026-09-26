/* @story_id: 15444 @story_name: 3D avatar simulation item */
import { restoreStudentLogin } from '../../../../support/student-auth'

describe('Labs product page', () => {
    it('opens the 3D Avatar Simulation area without a blank page', () => {
        restoreStudentLogin()
        cy.visit('/products/labs.html')
        cy.get('body', { timeout: 30000 }).should('be.visible')
            .and('not.contain.text', 'Default blank page')
        cy.contains(':visible', /3D Avatar|Simulation|Labs/i, { timeout: 30000 })
            .should('be.visible')
    })
})
