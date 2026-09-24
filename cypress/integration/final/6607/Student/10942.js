/* @story_id: 10942 @story_name: Go to next chapter */
import { openDemoLesson } from '../../../../support/student-auth'

describe('Lesson next steps - Next lesson', () => {
    it('continues to the next lesson', () => {
        openDemoLesson()
        cy.scrollTo('bottom')
        cy.location('href').then(startUrl => {
            cy.contains(':visible', /Proceed to the next lesson|Next lesson/i, {
                timeout: 30000,
            }).first().then($label => {
                const directControl = $label.closest('a, button, [role="button"]')
                if (directControl.length) {
                    cy.wrap(directControl.first()).click({ force: true })
                    return
                }

                let container = $label.parent()
                let control = Cypress.$()
                for (let depth = 0; depth < 6 && container.length; depth += 1) {
                    control = container.find('a, button, [role="button"]')
                        .filter(':visible')
                        .filter((_, element) => /Open|Next|Continue/i.test(element.textContent))
                    if (control.length) break
                    container = container.parent()
                }

                expect(control.length, 'Next lesson action').to.be.greaterThan(0)
                cy.wrap(control.first()).click({ force: true })
            })
            cy.location('href', { timeout: 30000 }).should('not.eq', startUrl)
        })
        cy.get('body').should('not.contain.text', 'Default blank page')
    })
})
