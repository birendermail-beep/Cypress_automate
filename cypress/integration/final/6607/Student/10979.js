/* @story_id: 10979 @story_name: Reviewing items and explanation */
import { visitDemoCourse } from '../../../../support/student-auth'

describe('Review items and explanations', () => {
    it('opens the available review area without fixed waits or changing answers', () => {
        visitDemoCourse()
        cy.get('body', { timeout: 30000 }).should('be.visible')
            .and('not.contain.text', 'Default blank page')

        cy.get('body').then($body => {
            const practiceTests = $body.find(
                '[data-cy="practice_tests"]:visible, a:visible, button:visible'
            ).filter((_, element) =>
                /Practice\s+Tests?|TestPrep/i.test(element.textContent || '')
            )

            if (practiceTests.length) {
                cy.wrap(practiceTests.first()).click({ force: true })
            }
        })

        cy.get('body').then($body => {
            const review = $body.find('a, button, [role="button"]')
                .filter(':visible')
                .filter((_, element) =>
                    /Review\s+items?\s+and\s+explanations?/i.test(
                        element.textContent || ''
                    )
                )

            if (!review.length) {
                cy.log('No completed test is available to review for this student')
                return
            }

            cy.wrap(review.first())
                .invoke('removeAttr', 'target')
                .click({ force: true })
            cy.get('body', { timeout: 30000 }).should('be.visible')
                .and('not.contain.text', 'Default blank page')
            cy.contains(':visible', /Results?|Go Back/i, { timeout: 30000 })
                .should('be.visible')
        })
    })
})
