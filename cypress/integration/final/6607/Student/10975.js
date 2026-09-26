/* @story_id: 10975 @story_name: PrepEngine Test */
import { visitDemoCourse } from '../../../../support/student-auth'

describe('Practice Tests', () => {
    it('opens the Practice Tests area', () => {
        visitDemoCourse()
        cy.contains(':visible', /^\s*Practice Tests?\s*$/i, {
            timeout: 30000,
        }).last().scrollIntoView().click({ force: true })
        cy.get('body', { timeout: 30000 })
            .should('be.visible')
            .and('not.contain.text', 'Default blank page')
    })
})
