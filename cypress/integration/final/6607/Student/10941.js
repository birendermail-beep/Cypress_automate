/* @story_id: 10941 @story_name: Open lab */
import {
    openDemoLesson,
    openLessonToolbarActivity,
} from '../../../../support/student-auth'

describe('Lesson next steps - Lab', () => {
    it('opens the chapter lab without a blank page', () => {
        openDemoLesson()
        cy.scrollTo('bottom')
        openLessonToolbarActivity(/^\s*Labs?\s*$/i)
        cy.get('body', { timeout: 30000 })
            .should('be.visible')
            .and('not.contain.text', 'Default blank page')
        cy.location('href').should('match', /lab|hands.?on|simulation|item/i)
    })
})
