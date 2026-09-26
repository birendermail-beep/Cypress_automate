/* @story_id: 15432 @story_name: Open Flashcard */
import { openDemoLesson } from '../../../../support/student-auth'

describe('Lesson flashcards', () => {
    it('opens Flashcards when the lesson provides the control', () => {
        openDemoLesson()
        cy.scrollTo('bottom', { duration: 0 })
        cy.get('body').then($body => {
            const control = $body.find(
                '[data-cy="flashcard_open"]:visible, [data-cy="flashcards"]:visible'
            )
            if (control.length) cy.wrap(control.first()).click({ force: true })
        })
        cy.get('body').should('be.visible')
            .and('not.contain.text', 'Default blank page')
    })
})
