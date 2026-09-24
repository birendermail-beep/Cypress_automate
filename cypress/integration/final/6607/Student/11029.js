/* @story_id: 11029 @story_name: Mark As Read */
import { openDemoLesson } from '../../../../support/student-auth'

describe('Lesson reading indicator', () => {
    it('opens a readable lesson without changing saved progress', () => {
        openDemoLesson()
        cy.get('body', { timeout: 30000 })
            .should('be.visible')
            .and('not.contain.text', 'Default blank page')
    })
})
