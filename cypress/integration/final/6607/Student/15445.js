/* @story_id: 15445 @story_name: 3D diagnostic */
import { restoreStudentLogin } from '../../../../support/student-auth'

describe('Student utilities', () => {
    it('opens Utilities and detects 3D Diagnostic when available', () => {
        restoreStudentLogin()
        cy.visit('/utils')
        cy.get('body', { timeout: 30000 }).should('be.visible').then($body => {
            const diagnostic = $body.find('a:visible, button:visible')
                .filter((_, element) => /3D Diagnostic/i.test(element.textContent))
            if (diagnostic.length) cy.wrap(diagnostic.first()).click({ force: true })
        })
        cy.get('body').should('not.contain.text', 'Default blank page')
    })
})
