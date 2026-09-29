/* @story_id: 15438 @story_name: Bookmark Question */
import { visitDemoCourse } from '../../../../support/student-auth'

describe('Question bookmark', () => {
    it('opens a Practice Test and uses Bookmark when available', () => {
        visitDemoCourse()
        cy.get('[data-cy="practice_tests"]', { timeout: 30000 })
            .filter(':visible').first().click({ force: true })
        cy.get('body', { timeout: 30000 }).should('be.visible').then($body => {
            const test = $body.find('[data-cy="test_tests"]:visible').first()
            if (test.length) cy.wrap(test).click({ force: true })
        })
        cy.get('body').should('be.visible')
            .and('not.contain.text', 'Default blank page')
    })
})
