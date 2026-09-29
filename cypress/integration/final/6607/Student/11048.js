/* @story_id: 11048 @story_name: Access Videos in Lab only Course */
import { openDemoLesson } from '../../../../support/student-auth'

describe('Lesson videos', () => {
    it('opens a valid Demo.AA1 lesson', () => {
        openDemoLesson()
        cy.get('body', { timeout: 30000 })
            .should('be.visible')
            .and('not.contain.text', 'Default blank page')
    })
})
