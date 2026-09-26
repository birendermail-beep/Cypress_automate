/* @story_id: 11020 @story_name: Access Topics from Side Pane */
import { openDemoLesson } from '../../../../support/student-auth'

describe('Lesson Table of Contents', () => {
    it('opens the Table of Contents side pane', () => {
        openDemoLesson()
        cy.contains(':visible', /^\s*Table of Contents\s*$/i, {
            timeout: 30000,
        }).first().click({ force: true })
        cy.get('body', { timeout: 30000 })
            .should('be.visible')
            .and('not.contain.text', 'Default blank page')
    })
})
