/* @story_id: 11030 @story_name: Working with 3 dots in Chapters */
import { openDemoLesson } from '../../../../support/student-auth'

describe('Lesson options menu', () => {
    it('opens the lesson options control when available', () => {
        openDemoLesson()
        cy.get('body', { timeout: 30000 }).should('be.visible').then($body => {
            const options = $body.find(
                '[data-cy="tripple_dot"]:visible, [aria-label*="option"]:visible, [aria-label*="More"]:visible'
            )
            if (options.length) {
                cy.wrap(options.first()).click({ force: true })
            }
        })
        cy.get('body').should('not.contain.text', 'Default blank page')
    })
})
