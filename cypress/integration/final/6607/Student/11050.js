/* @story_id: 11050 @story_name: Support Form */
import { visitDemoCourse } from '../../../../support/student-auth'

describe('Student support', () => {
    it('opens a valid Demo.AA1 course dashboard', () => {
        visitDemoCourse()
        cy.get('body', { timeout: 30000 })
            .should('be.visible')
            .and('contain.text', 'Course Dashboard')
            .and('not.contain.text', 'Default blank page')
    })
})
