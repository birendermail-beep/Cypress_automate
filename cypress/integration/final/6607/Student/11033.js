/* @story_id: 11033 @story_name: Side Pane of Features Page */
import { visitDemoCourse } from '../../../../support/student-auth'

describe('Student feature page', () => {
    it('opens the Demo.AA1 course dashboard', () => {
        visitDemoCourse()
        cy.get('body', { timeout: 30000 })
            .should('be.visible')
            .and('contain.text', 'Course Dashboard')
            .and('not.contain.text', 'Default blank page')
    })
})
