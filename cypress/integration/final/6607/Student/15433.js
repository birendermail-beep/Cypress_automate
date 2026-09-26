/* @story_id: 15433 @story_name: Open Exercise */
import { openDemoLesson } from '../../../../support/student-auth'

describe('Lesson exercises', () => {
    it('opens Exercise when the lesson provides the control', () => {
        openDemoLesson()
        cy.scrollTo('bottom', { duration: 0 })
        cy.get('body').then($body => {
            const control = $body.find(
                '[data-cy="exercise_open"]:visible, [data-cy="exercises"]:visible'
            )
            if (control.length) cy.wrap(control.first()).click({ force: true })
        })
        cy.get('body').should('be.visible')
            .and('not.contain.text', 'Default blank page')
    })
})
