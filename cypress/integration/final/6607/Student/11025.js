/* @story_id: 11025 @story_name: Post Assessment dashboard */
import { visitDemoCourse } from '../../../../support/student-auth'

describe('Post Assessment', () => {
    it('opens Post Assessment from the course dashboard', () => {
        visitDemoCourse()
        cy.contains(':visible', /^\s*Post Assessment\s*$/i, {
            timeout: 30000,
        }).last().scrollIntoView().click({ force: true })
        cy.get('body', { timeout: 30000 })
            .should('be.visible')
            .and('not.contain.text', 'Default blank page')
    })
})
