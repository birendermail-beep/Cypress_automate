/* @story_id: 11055 @story_name: Access Graded Assessment by Student */
import { visitDemoCourse } from '../../../../support/student-auth'

describe('Student assessments', () => {
    it('opens Assessments from the course dashboard', () => {
        visitDemoCourse()
        cy.contains(':visible', /^\s*Assessments\s*$/i, {
            timeout: 30000,
        }).last().scrollIntoView().click({ force: true })
        cy.get('body', { timeout: 30000 })
            .should('be.visible')
            .and('not.contain.text', 'Default blank page')
    })
})
