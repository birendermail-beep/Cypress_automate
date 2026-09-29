/* @story_id: 11012 @story_name: Perform flashcard in quiz mode */
import {
    openDemoLesson,
    openLessonToolbarActivity,
} from '../../../../support/student-auth'

describe('Flashcards - Quiz mode', () => {
    it('opens Cards from the lesson toolbar', () => {
        openDemoLesson()
        cy.scrollTo('bottom')
        openLessonToolbarActivity(/^\s*Cards?\s*$/i)
        cy.get('body', { timeout: 30000 })
            .should('be.visible')
            .and('not.contain.text', 'Default blank page')
    })
})
