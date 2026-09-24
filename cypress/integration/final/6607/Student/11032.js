/* @story_id: 11032 @story_name: Saving Annotation */
import { openDemoLesson } from '../../../../support/student-auth'

describe('Lesson annotations', () => {
    it('opens a valid Demo.AA1 lesson', () => {
        openDemoLesson()
        cy.get('body', { timeout: 30000 })
            .should('be.visible')
            .and('not.contain.text', 'Default blank page')
    })
})
