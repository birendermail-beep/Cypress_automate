/* @story_id: 11057 @story_name: Activity Report */
import { visitDemoCourse } from '../../../../support/student-auth'

describe('Course analytics', () => {
    it('opens Analytics from the course dashboard', () => {
        visitDemoCourse()
        cy.contains(':visible', /^\s*Analytics\s*$/i, {
            timeout: 30000,
        }).last().click({ force: true })
        cy.get('body', { timeout: 30000 })
            .should('be.visible')
            .and('not.contain.text', 'Default blank page')
    })
})
