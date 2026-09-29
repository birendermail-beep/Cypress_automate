/* @story_id: 11055 @story_name: Access Graded Assessment by Student */
import { visitDemoCourse } from '../../../../support/student-auth'

const findVisibleControl = ($body, selector, label) => {
    const bySelector = $body.find(selector).filter(':visible')
    if (bySelector.length) {
        return bySelector.first()
    }

    return $body
        .find('a:visible, button:visible, [role="button"]:visible')
        .filter((index, element) => label.test(Cypress.$(element).text().trim()))
        .first()
}

describe('Student assessments', () => {
    it('opens Assessments from the current view or the Sections view', () => {
        let assessmentOpened = false

        visitDemoCourse()

        cy.get('body', { timeout: 30000 }).should('be.visible').then($body => {
            const assessments = findVisibleControl(
                $body,
                '[data-cy="assessments"], [data-cy="assessment"], [aria-label*="Assessment"]',
                /^Assessments?$/i
            )

            if (assessments.length) {
                assessmentOpened = true
                cy.wrap(assessments).click({ force: true })
                return
            }

            const sections = findVisibleControl(
                $body,
                '[data-cy="section_link"], [data-cy="sections"], [aria-label*="Section"]',
                /^(Section|Sections|Lessons)$/i
            )

            expect(sections, 'Sections control used for the retry').to.have.length.greaterThan(0)
            cy.wrap(sections).click({ force: true })
        })

        cy.then(() => {
            if (assessmentOpened) {
                return
            }

            cy.get('body', { timeout: 30000 }).should('be.visible').then($body => {
                const assessments = findVisibleControl(
                    $body,
                    '[data-cy="assessments"], [data-cy="assessment"], [aria-label*="Assessment"]',
                    /^Assessments?$/i
                )

                expect(assessments, 'Assessments in the Sections view')
                    .to.have.length.greaterThan(0)
                assessmentOpened = true
                cy.wrap(assessments).click({ force: true })
            })
        })

        cy.then(() => {
            expect(assessmentOpened, 'Assessments opened after no more than two checks').to.equal(true)
        })
        cy.get('body').should('not.contain.text', 'Default blank page')
    })
})
