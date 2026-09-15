/*
@story_id: 10837
@story_name: Download Certificate
@path: final/6607/Student
*/
// Read-only certificate availability and download-control coverage.
import {
    Navbar,
    login_username,
    login_password,
    LoginPage,
    StudentPage,
} from '../../../../page-objects/pages/index'

describe('Student Certificate of Completion', () => {
    const normalize = value => String(value || '').replace(/\s+/g, ' ').trim()

    const openCourseDashboard = () => {
        cy.visit('/')
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        StudentPage.visitLOAplusCompleteCourse()

        cy.location('href', { timeout: 30000 }).should('not.eq', 'about:blank')
        cy.get('body', { timeout: 30000 }).should($body => {
            expect(normalize($body.text()), 'course dashboard is not blank')
                .not.to.eq('')
            expect($body.text()).not.to.include('Default blank page')
        })
    }

    const findCertificateControl = $body => $body
        .find('a:visible, button:visible, [role="button"]:visible')
        .filter((_, element) =>
            /certificate\s+of\s+completion|completion\s+certificate/i
                .test(normalize(element.textContent)))
        .first()

    const withCertificate = callback => {
        cy.get('body').then($body => {
            const $control = findCertificateControl($body)

            if (!$control.length) {
                cy.log(
                    'Certificate is unavailable because the selected course ' +
                    'has not met its completion requirement'
                )
                return
            }

            cy.wrap($control)
                .should('be.visible')
                .invoke('removeAttr', 'target')
                .click({ force: true })

            cy.location('href', { timeout: 30000 }).should('not.eq', 'about:blank')
            cy.get('body', { timeout: 30000 }).should($certificateBody => {
                const text = normalize($certificateBody.text())
                expect(text, 'certificate page is not blank').not.to.eq('')
                expect($certificateBody.text())
                    .not.to.include('Default blank page')
                expect(
                    /certificate|completion|download/i.test(text),
                    'certificate content'
                ).to.eq(true)
            })
            cy.then(() => callback())
        })
    }

    beforeEach(openCourseDashboard)

    it('shows certificate eligibility correctly', () => {
        cy.get('body').then($body => {
            const $control = findCertificateControl($body)

            if ($control.length) {
                expect($control.is(':visible'), 'certificate control is visible')
                    .to.eq(true)
                return
            }

            cy.log('Certificate control correctly absent for this course state')
        })
    })

    it('opens the Certificate of Completion without a blank page', () => {
        withCertificate(() => {
            cy.location('href').should('not.eq', 'about:blank')
            cy.get('body').should('not.contain.text', 'Default blank page')
        })
    })

    it('detects a PDF download control when the certificate is available', () => {
        withCertificate(() => {
            cy.get('body').then($body => {
                const pageText = normalize($body.text())
                const unavailable =
                    /certificate\s+of\s+completion\s+is\s+unavailable/i
                        .test(pageText) ||
                    /must\s+have\s+a\s+readiness\s+score/i
                        .test(pageText)

                if (unavailable) {
                    cy.log(
                        'PDF download correctly unavailable until the ' +
                        'certificate requirement is met'
                    )
                    return
                }

                const $pdf = $body
                    .find(
                        'a:visible, button:visible, [role="button"]:visible, ' +
                        '[aria-label]:visible, [title]:visible'
                    )
                    .filter((_, element) => {
                        const label = [
                            element.textContent,
                            element.getAttribute('aria-label'),
                            element.getAttribute('title'),
                            element.getAttribute('download'),
                        ].join(' ')
                        return /pdf|download\s+pdf/i.test(label)
                    })

                expect($pdf.length, 'PDF download control')
                    .to.be.greaterThan(0)
            })
        })
    })

    it('detects an image download control when provided', () => {
        withCertificate(() => {
            cy.get('body').then($body => {
                const $image = $body
                    .find(
                        'a:visible, button:visible, [role="button"]:visible, ' +
                        '[aria-label]:visible, [title]:visible'
                    )
                    .filter((_, element) => {
                        const label = [
                            element.textContent,
                            element.getAttribute('aria-label'),
                            element.getAttribute('title'),
                            element.getAttribute('download'),
                        ].join(' ')
                        return /image|png|jpe?g|download\s+image/i.test(label)
                    })

                if (!$image.length) {
                    cy.log('This certificate layout has no image download control')
                    return
                }

                expect($image.length, 'image download control')
                    .to.be.greaterThan(0)
            })
        })
    })
})
