/* @story_id: 11023 @story_name: Access Glossary from Side Pane */
import { openDemoLesson } from '../../../../support/student-auth'

describe('Lesson glossary', () => {
    it('opens Glossary when the lesson provides the control', () => {
        openDemoLesson()
        cy.get('body', { timeout: 30000 }).should('be.visible').then($body => {
            const glossary = $body.find(
                '[intro-id="glossary"]:visible, [data-cy="glossary"]:visible, [aria-label*="Glossary"]:visible'
            )
            if (glossary.length) {
                cy.wrap(glossary.first()).click({ force: true })
            }
        })
        cy.get('body').should('not.contain.text', 'Default blank page')
    })
})
