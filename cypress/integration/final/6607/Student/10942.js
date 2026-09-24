/* @story_id: 10942 @story_name: Go to next chapter */
import { openDemoLesson } from '../../../../support/student-auth'

describe('Lesson next steps - Next lesson', () => {
    it('continues to the next lesson', () => {
        openDemoLesson()
        cy.scrollTo('bottom')
        cy.location('href').then(startUrl => {
            cy.contains('button, a, [role="button"]', /^\s*Next\b/i, {
                timeout: 30000,
            }).filter(':visible').last().click({ force: true })
            cy.location('href', { timeout: 30000 }).should('not.eq', startUrl)
        })
        cy.get('body').should('not.contain.text', 'Default blank page')
    })
})
