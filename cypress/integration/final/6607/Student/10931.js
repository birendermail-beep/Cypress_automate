/* @story_id: 10931 @story_name: Keyboard Shortcut */
import { openDemoLesson } from '../../../../support/student-auth'

describe('Keyboard shortcuts in the lesson area', () => {
    it('opens the keyboard-shortcut list', () => {
        openDemoLesson()
        cy.get('#manage_settg, .icomoon-new-24px-gear-1, [aria-label*="Settings"], [aria-label*="settings"]', {
            timeout: 30000,
        })
            .filter(':visible').first().click({ force: true })
        cy.contains(':visible', /Keyboard/i, { timeout: 30000 })
            .first().click({ force: true })
        cy.get('body', { timeout: 30000 }).should($body => {
            const visibleText = $body.find(':visible').text()
            expect(visibleText, 'keyboard shortcut content')
                .to.match(/Keyboard/i)
            expect(visibleText, 'shortcut keys or instructions')
                .to.match(/Shortcut|Enter|Escape|Tab|Arrow|Navigation/i)
        })
    })
})
