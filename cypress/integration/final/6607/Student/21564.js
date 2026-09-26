/* @story_id: 21564 @story_name: Change Email */
import { restoreStudentLogin } from '../../../../support/student-auth'

describe('Change student email', () => {
    it('shows Change Email controls for inactive accounts without updating email', () => {
        restoreStudentLogin()
        cy.visit('/app/')
        cy.get('body', { timeout: 30000 }).should('be.visible')
            .and('not.contain.text', 'Default blank page')

        cy.get('body').then($body => {
            const activateNow = $body.find('a, button, [role="button"]')
                .filter(':visible')
                .filter((_, element) => /Activate\s*Now/i.test(element.textContent || ''))

            if (!activateNow.length) {
                cy.log('Account is already active; Change Email activation flow is not applicable')
                return
            }

            cy.wrap(activateNow.first()).click({ force: true })
            cy.contains('a, button', /Change\s*Email/i, { timeout: 30000 })
                .filter(':visible')
                .first()
                .click({ force: true })
            cy.get(
                'input[type="email"], input[name*="email"], input[placeholder*="email" i]',
                { timeout: 30000 }
            ).filter(':visible').should('have.length.greaterThan', 0)
            // Intentionally do not submit or modify the real account email.
        })
    })
})
