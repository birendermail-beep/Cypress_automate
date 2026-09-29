/* @story_id: 12334 @story_name: Result Page of Pre Assessment */
import { visitDemoCourse } from '../../../../support/student-auth'

describe('Pre Assessment', () => {
    it('opens Pre Assessment from the course dashboard', () => {
        visitDemoCourse()
        cy.contains(':visible', /^\s*Pre Assessment\s*$/i, {
            timeout: 30000,
        }).last().scrollIntoView().click({ force: true })
        cy.get('body', { timeout: 30000 })
            .should('be.visible')
            .and('not.contain.text', 'Default blank page')
    })
})
