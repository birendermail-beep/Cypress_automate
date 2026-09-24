/* @story_id: 11039 @story_name: Perform Test */
import { visitDemoCourse } from '../../../../support/student-auth'

describe('Practice Tests', () => {
    it('opens Practice Tests from the course dashboard', () => {
        visitDemoCourse()
        cy.contains(':visible', /^\s*Practice Tests?\s*$/i, {
            timeout: 30000,
        }).last().scrollIntoView().click({ force: true })
        cy.get('body', { timeout: 30000 })
            .should('be.visible')
            .and('not.contain.text', 'Default blank page')
    })
})
