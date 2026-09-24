/* @story_id: 10939 @story_name: Open Quiz */
import { openDemoLesson } from '../../../../support/student-auth'

describe('Lesson next steps - Quiz', () => {
    it('opens the chapter quiz without a blank page', () => {
        openDemoLesson()
        cy.scrollTo('bottom')
        cy.contains('button, a, [role="button"]', /^\s*Quiz\s*$/i, {
            timeout: 30000,
        }).filter(':visible').last()
            .invoke('removeAttr', 'target')
            .click({ force: true })
        cy.get('body', { timeout: 30000 })
            .should('be.visible')
            .and('not.contain.text', 'Default blank page')
        cy.location('search').should('match', /quiz|test|assessment|navigate_items/i)
    })
})
