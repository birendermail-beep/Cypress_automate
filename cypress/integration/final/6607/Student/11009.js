/* @story_id: 11009 @story_name: Restricted course dashboard */
import { restoreStudentLogin } from '../../../../support/student-auth'

describe('Restricted course dashboard', () => {
    beforeEach(() => {
        restoreStudentLogin()
    })

    ;['wgu-sonarqube', 'Prescribing-Opioids', 'WGU-C783'].forEach(course => {
        it(`handles direct access to ${course} on Jigyaasa without a blank page`, () => {
            cy.visit(
                `/?func=load_course&course=${encodeURIComponent(course)}`,
                { failOnStatusCode: false }
            )
            cy.get('body', { timeout: 30000 }).should('be.visible')
                .and('not.contain.text', 'Default blank page')
            cy.location('host').should('eq', 'www.jigyaasa.info')

            cy.get('body').then($body => {
                const text = $body.text()
                const restricted = /not allowed|not available|access denied|unauthorized/i
                    .test(text)
                const dashboardLoaded = /My Library|Course|Dashboard/i.test(text)
                expect(
                    restricted || dashboardLoaded,
                    'restriction message or safe dashboard response'
                ).to.equal(true)
            })
        })
    })
})
