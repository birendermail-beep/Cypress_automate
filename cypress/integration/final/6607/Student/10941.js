/* @story_id: 10941 @story_name: Open lab */
import { openDemoLesson } from '../../../../support/student-auth'

describe('Lesson next steps - Lab', () => {
    it('opens the chapter lab without a blank page', () => {
        openDemoLesson()
        cy.scrollTo('bottom')
        cy.get('[data-cy="lab_open"]', { timeout: 30000 })
            .filter(':visible').first().scrollIntoView()
            .invoke('removeAttr', 'target').click({ force: true })
        cy.get('body', { timeout: 30000 })
            .should('be.visible')
            .and('not.contain.text', 'Default blank page')
        cy.location('href').should('match', /lab|hands.?on|simulation|item/i)
    })
})
