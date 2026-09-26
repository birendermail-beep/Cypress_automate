/* @story_id: 11049 @story_name: Download Manuals */
import { visitDemoCourse } from '../../../../support/student-auth'

describe('Course manuals', () => {
    it('opens the Demo.AA1 course dashboard', () => {
        visitDemoCourse()
        cy.get('body', { timeout: 30000 })
            .should('be.visible')
            .and('contain.text', 'Course Dashboard')
            .and('not.contain.text', 'Default blank page')
    })
})
