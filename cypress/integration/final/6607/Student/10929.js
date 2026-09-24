/* @story_id: 10929 @story_name: Manage Setting - Options */
import { visitDemoCourse } from '../../../../support/student-auth'

describe('Manage settings options in the lesson area', () => {
    it('shows the lesson settings options', () => {
        visitDemoCourse()
        cy.visit('/app/?func=ebook&chapter_no=0')
        cy.get('body', { timeout: 30000 })
            .should('be.visible')
            .and('not.contain.text', 'Default blank page')
        cy.get('#manage_settg', { timeout: 30000 })
            .filter(':visible').first().click({ force: true })
        cy.get('#fcs', { timeout: 30000 }).should('be.visible')
        cy.get('body').should($body => {
            const count = $body.find('#fcs, #kbd, #acs').filter(':visible').length
            expect(count, 'visible lesson setting options').to.be.at.least(1)
        })
    })
})
