/* @story_id: 11042 @story_name: Added Videos in Course */
import { openDemoLesson } from '../../../../support/student-auth'

describe('Course videos', () => {
    it('opens a valid Demo.AA1 lesson', () => {
        openDemoLesson()
        cy.get('body', { timeout: 30000 })
            .should('be.visible')
            .and('not.contain.text', 'Default blank page')
    })
})
