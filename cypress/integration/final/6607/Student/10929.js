/* @story_id: 10929 @story_name: Manage Setting - Options */
import { openDemoLesson } from '../../../../support/student-auth'

describe('Manage settings options in the lesson area', () => {
    it('shows the lesson settings options', () => {
        openDemoLesson()
        cy.get('#manage_settg, .icomoon-new-24px-gear-1, [aria-label*="Settings"], [aria-label*="settings"]', {
            timeout: 30000,
        })
            .filter(':visible').first().click({ force: true })
        cy.contains(':visible', /Font.*(?:Color|Colour)|Color.*Font/i, {
            timeout: 30000,
        }).should('be.visible')
        cy.contains(':visible', /Keyboard/i).should('be.visible')
        cy.contains(':visible', /Accessibility/i).should('be.visible')
    })
})
