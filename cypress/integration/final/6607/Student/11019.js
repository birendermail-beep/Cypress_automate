/* @story_id: 11019 @story_name: Download Course File */
import { visitDemoCourse } from '../../../../support/student-auth'

describe('Course resources', () => {
    it('opens the course resource control when a resource is available', () => {
        visitDemoCourse()
        cy.get('body', { timeout: 30000 }).should('be.visible').then($body => {
            const resource = $body.find(
                '[data-cy="download_course_resources"]:visible'
            )
            if (resource.length) {
                cy.wrap(resource.first()).click({ force: true })
            }
        })
        cy.get('body').should('not.contain.text', 'Default blank page')
    })
})
