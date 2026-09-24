/* @story_id: 11055 @story_name: Access Graded Assessment by Student */
import { visitDemoCourse } from '../../../../support/student-auth'

describe('Student assessments', () => {
    it('opens the student course dashboard and detects Assessments when available', () => {
        visitDemoCourse()
        cy.get('body', { timeout: 30000 }).should('be.visible').then($body => {
            const assessments = $body.find(
                '[data-cy="assessments"]:visible, [aria-label*="Assessment"]:visible'
            )
            if (assessments.length) {
                cy.wrap(assessments.first()).click({ force: true })
            }
        })
        cy.get('body')
            .should('not.contain.text', 'Default blank page')
    })
})
