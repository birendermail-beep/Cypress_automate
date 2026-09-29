/* @story_id: 10942 @story_name: Go to next chapter */
import {
    openDemoLesson,
    openLessonToolbarActivity,
} from '../../../../support/student-auth'

describe('Lesson next steps - Next lesson', () => {
    it('continues to the next lesson', () => {
        openDemoLesson()
        cy.scrollTo('bottom')
        openLessonToolbarActivity(/^\s*Next\b/i)
        cy.get('body', { timeout: 30000 })
            .should('be.visible')
            .and('not.contain.text', 'Default blank page')
    })
})
