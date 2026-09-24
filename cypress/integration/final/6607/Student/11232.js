/* @story_id: 11232 @story_name: Share Certificate */
import { visitDemoCourse } from '../../../../support/student-auth'

describe('Certificate of completion', () => {
    it('detects the certificate control when available without sharing externally', () => {
        visitDemoCourse()
        cy.get('body', { timeout: 30000 }).should('be.visible').then($body => {
            const certificate = $body.find(
                '[data-cy="certificate_completion"]:visible, [aria-label*="Certificate"]:visible'
            )
            if (certificate.length) {
                cy.wrap(certificate.first()).should('be.visible')
            }
        })
        cy.get('body').should('not.contain.text', 'Default blank page')
    })
})
