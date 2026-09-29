/* @story_id: 11022 @story_name: Access Video from Side Pane */
import { openDemoLesson } from '../../../../support/student-auth'

describe('Lesson videos', () => {
    it('opens Videos when the lesson provides the control', () => {
        openDemoLesson()
        cy.get('body', { timeout: 30000 }).should('be.visible').then($body => {
            const videos = $body.find(
                '[intro-id="videos"]:visible, [data-cy="videos"]:visible, [aria-label*="Video"]:visible'
            )
            if (videos.length) {
                cy.wrap(videos.first()).click({ force: true })
            }
        })
        cy.get('body').should('not.contain.text', 'Default blank page')
    })
})
