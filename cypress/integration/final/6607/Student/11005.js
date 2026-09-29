/* @story_id: 11005 @story_name: Study Planner */
import { visitDemoCourse } from '../../../../support/student-auth'

describe('Study Planner', () => {
    it('opens Study Planner from the course dashboard', () => {
        visitDemoCourse()
        cy.contains(':visible', /^\s*Study Planner\s*$/i, {
            timeout: 30000,
        }).first().click({ force: true })
        cy.get('body', { timeout: 30000 })
            .should('be.visible')
            .and('not.contain.text', 'Default blank page')
    })
})
