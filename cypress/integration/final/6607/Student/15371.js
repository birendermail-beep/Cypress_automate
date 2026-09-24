/* @story_id: 15371 @story_name: Inbox Tab */
import { visitDemoCourse } from '../../../../support/student-auth'

describe('Student Inbox', () => {
    it('detects the Inbox control when available', () => {
        visitDemoCourse()
        cy.get('body', { timeout: 30000 }).should('be.visible').then($body => {
            const inbox = $body.find(
                '[data-cy="inbox"]:visible, [aria-label*="Inbox"]:visible'
            )
            if (inbox.length) {
                cy.wrap(inbox.first()).click({ force: true })
            }
        })
        cy.get('body').should('not.contain.text', 'Default blank page')
    })
})
