/* @story_id: 11059 @story_name: Update User Information */
import { visitDemoCourse } from '../../../../support/student-auth'

describe('Student information', () => {
    it('opens a valid Demo.AA1 course dashboard', () => {
        visitDemoCourse()
        cy.get('body', { timeout: 30000 })
            .should('be.visible')
            .and('contain.text', 'Course Dashboard')
            .and('not.contain.text', 'Default blank page')
    })
})
