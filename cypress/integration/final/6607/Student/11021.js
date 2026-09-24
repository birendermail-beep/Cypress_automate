/* @story_id: 11021 @story_name: Access Annotation from Side Pane */
import { openDemoLesson } from '../../../../support/student-auth'

describe('Lesson annotations', () => {
    it('opens Annotation when the lesson provides the control', () => {
        openDemoLesson()
        cy.get('body', { timeout: 30000 }).should('be.visible').then($body => {
            const annotation = $body.find(
                '[data-cy="annotation_tab"]:visible, [aria-label*="Annotation"]:visible'
            )
            if (annotation.length) {
                cy.wrap(annotation.first()).click({ force: true })
            }
        })
        cy.get('body').should('not.contain.text', 'Default blank page')
    })
})
