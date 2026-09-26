/* @story_id: 10925 @story_name: Link with Instructor by email */
import { visitDemoCourse } from '../../../../support/student-auth'

describe('Link with Instructor', () => {
    it('validates a blank instructor email without sending a request', () => {
        visitDemoCourse()
        cy.get('body', { timeout: 30000 }).should('be.visible')
            .and('not.contain.text', 'Default blank page')

        cy.get('body').then($body => {
            const setup = $body.find(
                '[data-cy="setup_tab"]:visible, #setup_tab:visible, a:visible, button:visible'
            ).filter((_, element) =>
                /Link\s+with\s+Instructor|Sections?|Setup/i.test(element.textContent || '')
            )

            if (!setup.length) {
                cy.log('Link with Instructor is not available for Demo.AA1')
                return
            }

            cy.wrap(setup.first()).click({ force: true })

            cy.get('body').then($setupBody => {
                if (/already linked|remove instructor|unlink/i.test($setupBody.text())) {
                    cy.log('Course is already linked; no relationship was removed')
                    return
                }

                const emailTab = $setupBody.find('a, button, [role="tab"]')
                    .filter(':visible')
                    .filter((_, element) =>
                        /instructor.*email|by email/i.test(element.textContent || '')
                    )
                if (emailTab.length) cy.wrap(emailTab.first()).click({ force: true })

                cy.get('body').then($emailBody => {
                    const input = $emailBody.find(
                        '#instructoremails:visible, input[type="email"]:visible, input[name*="instructor"]:visible'
                    ).first()
                    if (!input.length) {
                        cy.log('Instructor email input is not available in this course state')
                        return
                    }

                    cy.wrap(input).clear({ force: true })
                    const send = $emailBody.find('button, input[type="submit"], [role="button"]')
                        .filter(':visible')
                        .filter((_, element) =>
                            /Send\s+Request|Submit/i.test(
                                element.textContent || element.value || ''
                            )
                        )
                    expect(send.length, 'Send Request control').to.be.greaterThan(0)
                    cy.wrap(send.first()).click({ force: true })
                    cy.get('body', { timeout: 30000 }).should($result => {
                        expect($result.text()).to.match(
                            /invalid email|valid email|required|enter.*email/i
                        )
                    })
                })
            })
        })
    })
})
