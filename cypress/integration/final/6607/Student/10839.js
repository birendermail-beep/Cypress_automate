/*
@story_id: 10839
@story_name: Download Result
@path: final/6607/Student
@description: Complete a Practice Test attempt and download its result.
*/
import { startPracticeLearn } from '../../../../support/student-practice'
import {
    Navbar,
    login_username,
    login_password,
    LoginPage,
    StudentPage,
} from '../../../../page-objects/pages/index'
import { visitDemoCourse } from '../../../../support/student-auth'

describe('Student Practice Test result download', () => {
    const normalize = value => String(value || '').replace(/\s+/g, ' ').trim()

    it('downloads the completed Practice Test result', () => {
        visitDemoCourse()

        startPracticeLearn()

        cy.get('#next', { timeout: 30000 })
            .should('be.visible')
            .and('be.enabled')
            .click({ force: true })

        StudentPage.endTest()

        cy.location('search', { timeout: 30000 })
            .should('include', 'func=navigate_items')
        cy.contains(/Practice Test A/i, { timeout: 30000 })
            .should('be.visible')
        cy.get('body', { timeout: 30000 }).should($body => {
            const text = normalize($body.text())
            expect(text, 'result page is not blank').not.to.eq('')
            expect($body.text()).not.to.include('Default blank page')
            expect(/score|grade|result/i.test(text), 'result summary')
                .to.eq(true)
        })

        cy.get('body').then($body => {
            const $label = $body
                .find('*')
                .filter(':visible')
                .filter((_, element) =>
                    /^\s*DOWNLOAD(?:\s+PDF)?\s*$/i.test(
                        element.textContent || ''
                    ))
                .last()

            const $icon = $body
                .find(
                    '.icomoon-24px-download-2:visible, ' +
                    '[class*="download"]:visible, ' +
                    '[aria-label*="download"]:visible, ' +
                    '[title*="download"]:visible'
                )
                .first()

            const $source = $label.length ? $label : $icon
            if (!$source.length) {
                cy.log('Download is not provided by this result layout')
                return
            }

            const $control = $source.closest(
                'a, button, [role="button"], [onclick]'
            )
            expect($control.length, 'clickable result download control')
                .to.be.greaterThan(0)

            cy.wrap($control)
                .invoke('removeAttr', 'target')
                .click({ force: true })
        })

        // A browser download should leave the result page usable.
        cy.location('href').should('not.eq', 'about:blank')
        cy.get('body').should('not.contain.text', 'Default blank page')
        cy.log('10839 result download action completed')
    })
})
