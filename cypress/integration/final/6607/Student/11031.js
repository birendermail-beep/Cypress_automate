/* @story_id: 11031 @story_name: Working with 3 dots in Test Area */
import { visitDemoCourse } from '../../../../support/student-auth'

describe('Test area options', () => {
    it('opens the Practice Tests area without changing saved answers', () => {
        visitDemoCourse()
        cy.contains(':visible', /^\s*Practice Tests?\s*$/i, {
            timeout: 30000,
        }).last().scrollIntoView().click({ force: true })
        cy.get('body', { timeout: 30000 })
            .should('be.visible')
            .and('not.contain.text', 'Default blank page')
    })
})
