/* @story_id: 10939 @story_name: Open Quiz */
import {
    clickLessonNextStep,
    openDemoLesson,
} from '../../../../support/student-auth'

describe('Lesson next steps - Quiz', () => {
    it('opens the chapter quiz without a blank page', () => {
        openDemoLesson()
        cy.scrollTo('bottom')
        clickLessonNextStep(/Quiz|Test your knowledge/i)
        cy.get('body', { timeout: 30000 })
            .should('be.visible')
            .and('not.contain.text', 'Default blank page')
        cy.location('search').should('match', /quiz|test|assessment|navigate_items/i)
    })
})
