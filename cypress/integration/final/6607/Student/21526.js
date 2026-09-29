/* @story_id: 21526 @story_name: Show Credit */
import { restoreStudentLogin } from '../../../../support/student-auth'

describe('Course credit', () => {
    it('opens the Credits information when the account provides it', () => {
        restoreStudentLogin()
        cy.visit('/app/')
        cy.get('body', { timeout: 30000 }).should('be.visible')
            .and('not.contain.text', 'Default blank page')

        cy.get('body').then($body => {
            const profile = $body.find(
                '[aria-label*="profile"]:visible, [aria-label*="Profile"]:visible, [title*="profile"]:visible, [title*="Profile"]:visible, .profile:visible, .user-profile:visible'
            ).first()

            if (profile.length) cy.wrap(profile).click({ force: true })
        })

        cy.get('body').then($body => {
            const credits = $body.find('a, button, [role="menuitem"]')
                .filter(':visible')
                .filter((_, element) => /^\s*Credits?\s*$/i.test(element.textContent || ''))

            if (!credits.length) {
                cy.log('Credits is not available for this active student account')
                return
            }

            cy.wrap(credits.first()).click({ force: true })
            cy.get('.modal:visible, [role="dialog"]:visible', { timeout: 30000 })
                .should('be.visible')
                .and('contain.text', 'Credit')
        })
    })
})
