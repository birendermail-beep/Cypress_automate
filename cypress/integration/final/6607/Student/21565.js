/* @story_id: 21565 @story_name: Activate Account */
import { restoreStudentLogin } from '../../../../support/student-auth'

describe('Student account activation', () => {
    it('shows activation controls only when required without changing the account', () => {
        restoreStudentLogin()
        cy.visit('/app/')
        cy.get('body', { timeout: 30000 }).should('be.visible')
            .and('not.contain.text', 'Default blank page')

        cy.get('body').then($body => {
            const activateNow = $body.find('a, button, [role="button"]')
                .filter(':visible')
                .filter((_, element) => /Activate\s*Now/i.test(element.textContent || ''))

            if (!activateNow.length) {
                cy.log('Configured student account is already active')
                return
            }

            cy.wrap(activateNow.first()).click({ force: true })
            cy.get('.modal:visible, [role="dialog"]:visible', { timeout: 30000 })
                .should('be.visible')
            cy.get(
                'input[name*="code"], input[id*="code"], input[placeholder*="code"], input[placeholder*="Code"], input[placeholder*="CODE"]',
                { timeout: 30000 }
            ).filter(':visible').should('have.length.greaterThan', 0)
            // Intentionally do not enter or submit an activation code.
        })
    })
})
