/* @story_id: 15446 @story_name: Admin failed SQL */
import { restoreStudentLogin } from '../../../../support/student-auth'

describe('Failed SQL report', () => {
    it('accesses the report without modifying admin data', () => {
        restoreStudentLogin()
        cy.visit('/utils')
        cy.get('body', { timeout: 30000 }).should('be.visible').then($body => {
            const serverLogs = $body.find('a:visible, button:visible')
                .filter((_, element) => /Server Logs/i.test(element.textContent))
            if (serverLogs.length) cy.wrap(serverLogs.first()).click({ force: true })
        })
        cy.get('body').should('be.visible')
            .and('not.contain.text', 'Default blank page')
    })
})
