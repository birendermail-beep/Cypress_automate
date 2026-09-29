/* @story_id: 15369 @story_name: Course Dashboard */
import { visitDemoCourse } from '../../../../support/student-auth'

describe('Course dashboard', () => {
    it('opens a valid Demo.AA1 course dashboard', () => {
        visitDemoCourse()
        cy.get('body', { timeout: 30000 })
            .should('be.visible')
            .and('contain.text', 'Course Dashboard')
            .and('not.contain.text', 'Default blank page')
    })
})
