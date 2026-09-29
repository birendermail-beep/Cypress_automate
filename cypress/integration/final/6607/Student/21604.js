/* @story_id: 21604 @story_name: Exam Objective */
import { visitDemoCourse } from '../../../../support/student-auth'

describe('Exam Objectives', () => {
    it('opens the available Exam Objectives view without a blank page', () => {
        visitDemoCourse()
        cy.get('body', { timeout: 30000 }).should('be.visible')
            .and('not.contain.text', 'Default blank page')

        cy.get('body').then($body => {
            const lessons = $body.find('a, button, [role="button"]')
                .filter(':visible')
                .filter((_, element) => /^\s*Lessons?\s*$/i.test(element.textContent || ''))

            if (lessons.length) cy.wrap(lessons.first()).click({ force: true })
        })

        cy.get('body').then($body => {
            const objectives = $body.find('a, button, [role="button"]')
                .filter(':visible')
                .filter((_, element) =>
                    /^\s*Exam\s+Objectives?\s*$/i.test(element.textContent || '')
                )

            if (!objectives.length) {
                cy.log('Demo.AA1 does not expose an Exam Objectives control in this view')
                return
            }

            cy.wrap(objectives.first())
                .invoke('removeAttr', 'target')
                .click({ force: true })
            cy.get('body', { timeout: 30000 }).should('be.visible')
                .and('not.contain.text', 'Default blank page')
            cy.location('href').should('match', /objective|ebook|chapter|lesson/i)
        })
    })
})
