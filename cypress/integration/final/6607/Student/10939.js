/* @story_id: 10939 @story_name: Open Quiz */
import { visitDemoCourse } from '../../../../support/student-auth'

describe('Lesson next steps - Quiz', () => {
    it('opens the chapter quiz without a blank page', () => {
        visitDemoCourse()
        cy.visit('/app/?func=ebook&chapter_no=0')
        cy.get('[data-cy="quiz_open"]', { timeout: 30000 })
            .filter(':visible').first().scrollIntoView()
            .invoke('removeAttr', 'target').click({ force: true })
        cy.get('body', { timeout: 30000 })
            .should('be.visible')
            .and('not.contain.text', 'Default blank page')
        cy.location('search').should('match', /quiz|test|assessment|navigate_items/i)
    })
})
