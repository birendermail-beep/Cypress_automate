/* @story_id: 10941 @story_name: Open lab */
import { openDemoLesson } from '../../../../support/student-auth'

describe('Lesson next steps - Lab', () => {
    it('opens the chapter lab without a blank page', () => {
        openDemoLesson()
        cy.scrollTo('bottom')
        cy.contains('button, a, [role="button"]', /^\s*Labs?\s*$/i, {
            timeout: 30000,
        }).filter(':visible').last()
            .invoke('removeAttr', 'target')
            .click({ force: true })
        cy.get('body', { timeout: 30000 })
            .should('be.visible')
            .and('not.contain.text', 'Default blank page')
        cy.location('href').should('match', /lab|hands.?on|simulation|item/i)
    })
})
