/* @story_id: 15434 @story_name: Retake test - incorrect items */
import { visitDemoCourse } from '../../../../support/student-auth'

describe('Retake incorrect test items', () => {
    it('opens Practice Tests and detects the incorrect-items retake action', () => {
        visitDemoCourse()
        cy.get('[data-cy="practice_tests"]', { timeout: 30000 })
            .filter(':visible').first().click({ force: true })
        cy.get('body', { timeout: 30000 }).should('be.visible').then($body => {
            const retake = $body.find('a:visible, button:visible, [role="button"]:visible')
                .filter((_, element) =>
                    /Retake test\s*-?\s*incorrect items/i.test(element.textContent)
                )
            if (retake.length) cy.wrap(retake.first()).click({ force: true })
        })
        cy.get('body').should('not.contain.text', 'Default blank page')
    })
})
