/* @story_id: 11056 @story_name: Access Graded Assessment by Instructor */
import { visitDemoCourse } from '../../../../support/student-auth'

describe('Assessment permissions', () => {
    it('opens a valid Demo.AA1 course dashboard', () => {
        visitDemoCourse()
        cy.get('body', { timeout: 30000 })
            .should('be.visible')
            .and('contain.text', 'Course Dashboard')
            .and('not.contain.text', 'Default blank page')
    })
})
