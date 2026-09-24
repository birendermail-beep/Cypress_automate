/* @story_id: 10929 @story_name: Manage Setting - Options */
import { openDemoLesson } from '../../../../support/student-auth'

describe('Manage settings options in the lesson area', () => {
    it('shows the lesson settings options', () => {
        openDemoLesson()
        cy.get('#manage_settg, .icomoon-new-24px-gear-1, [aria-label*="Settings" i]', {
            timeout: 30000,
        })
            .filter(':visible').first().click({ force: true })
        cy.get('#fcs', { timeout: 30000 }).should('be.visible')
        cy.get('body').should($body => {
            const count = $body.find('#fcs, #kbd, #acs').filter(':visible').length
            expect(count, 'visible lesson setting options').to.be.at.least(1)
        })
    })
})
