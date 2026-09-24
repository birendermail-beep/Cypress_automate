/* @story_id: 10931 @story_name: Keyboard Shortcut */
import { openDemoLesson } from '../../../../support/student-auth'

describe('Keyboard shortcuts in the lesson area', () => {
    it('opens the keyboard-shortcut list', () => {
        openDemoLesson()
        cy.get('#manage_settg', { timeout: 30000 })
            .filter(':visible').first().click({ force: true })
        cy.get('#kbd', { timeout: 30000 })
            .filter(':visible').first().click({ force: true })
        cy.get('.modal:visible, [role="dialog"]:visible', { timeout: 30000 })
            .should('exist')
            .and($dialog => {
                expect($dialog.text()).to.match(/keyboard|shortcut|key/i)
            })
    })
})
