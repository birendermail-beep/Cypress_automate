/* @story_id: 11046 @story_name: Perform Knowledge Check */
import { openDemoLesson } from '../../../../support/student-auth'

describe('Knowledge Check', () => {
    it('opens a valid Demo.AA1 lesson', () => {
        openDemoLesson()
        cy.get('body', { timeout: 30000 })
            .should('be.visible')
            .and('not.contain.text', 'Default blank page')
    })
})
