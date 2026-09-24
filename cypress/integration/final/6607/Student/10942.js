/* @story_id: 10942 @story_name: Go to next chapter */
import { visitDemoCourse } from '../../../../support/student-auth'

describe('Lesson next steps - Next lesson', () => {
    it('continues to the next lesson', () => {
        visitDemoCourse()
        cy.visit('/app/?func=ebook&chapter_no=0')
        cy.location('href').then(startUrl => {
            cy.get('[data-cy="next_steps_open"]', { timeout: 30000 })
                .filter(':visible').first().scrollIntoView().click({ force: true })
            cy.location('href', { timeout: 30000 }).should('not.eq', startUrl)
        })
        cy.get('body').should('not.contain.text', 'Default blank page')
    })
})
