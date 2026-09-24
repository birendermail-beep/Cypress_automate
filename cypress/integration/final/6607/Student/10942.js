/* @story_id: 10942 @story_name: Go to next chapter */
import {
    clickLessonNextStep,
    openDemoLesson,
} from '../../../../support/student-auth'

describe('Lesson next steps - Next lesson', () => {
    it('continues to the next lesson', () => {
        openDemoLesson()
        cy.scrollTo('bottom')
        cy.location('href').then(startUrl => {
            clickLessonNextStep(/Proceed to the next lesson|Next lesson/i)
            cy.location('href', { timeout: 30000 }).should('not.eq', startUrl)
        })
        cy.get('body').should('not.contain.text', 'Default blank page')
    })
})
