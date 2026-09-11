import BasePage from '../BasePage'
import LoginPage from './LoginPage'

export default class StudentPage extends BasePage {
    static dismissPublicOverlays() {
        cy.get('body').then(($body) => {
            const closeCandidates = [
                '.modal:visible .close',
                '.modal:visible [data-dismiss="modal"]',
                '.modal:visible button[aria-label="Close"]',
                '.modal:visible .btn-close',
            ]

            const closeSelector = closeCandidates.find((selector) => $body.find(selector).length)
            if (closeSelector) {
                cy.get(closeSelector).first().click({ force: true })
            } else {
                const visibleClose = $body
                    .find('button, a, span')
                    .filter(':visible')
                    .filter((_, element) => /^\s*[×x]\s*$/i.test(element.innerText || element.textContent || ''))

                if (visibleClose.length) {
                    cy.wrap(visibleClose.first()).click({ force: true })
                }
            }
        })

        cy.get('body').then(($body) => {
            const acceptCookie = $body
                .find('button, a')
                .filter(':visible')
                .filter((_, element) => /^\s*accept\s*$/i.test(element.innerText || element.textContent || ''))

            if (acceptCookie.length) {
                cy.wrap(acceptCookie.first()).click({ force: true })
            }
        })
    }

    static openMyLibrary() {
        this.dismissPublicOverlays()

        cy.contains(/^\s*My Library\s*$/i, { timeout: 30000 })
            .last()
            .click({ force: true })
    }

    static searchAndManageCourse(searchText, crn) {
        this.openMyLibrary()
        cy.get('[data-cy="searchbox"]', { timeout: 30000 })
            .should('be.visible')
            .clear()
            .type(searchText, { force: true })
        cy.get(`[crn="${crn}"]`, { timeout: 30000 })
            .should('exist')
            .contains(/manage|open|launch/i)
            .click({ force: true })
    }

    static openStudentDashboard() {
        const courseCrn = Cypress.env('STUDENT_COURSE_CRN') || 'Demo.AA1'
        const searchText = Cypress.env('STUDENT_COURSE_SEARCH') || 'Platform Demo'
        this.searchAndManageCourse(searchText, courseCrn)
    }

    static studentDashboard(crn) {
        this.openMyLibrary()
        cy.get(crn).should('exist').contains('Manage').click({ force: true })
    }

    static openurl() {
        const courseCrn = Cypress.env('DEMO_COURSE_CRN') || 'Demo.AA1'
        const searchText = Cypress.env('DEMO_COURSE_SEARCH') || 'Platform Demo'
        this.searchAndManageCourse(searchText, courseCrn)
        LoginPage.visitOnClick('.span13 > .btn-outline-primary')
    }

    static terminateTest() {
        cy.get('body').then(($body) => {
            if ($body.text().includes('Last test was not completed. Do you want to continue?')) {
                cy.get('#terminate_test').should('be.visible').click({ force: true })
                cy.get('.terminate_current_test, [data-cy="terminate_currecnt_test"]')
                    .filter(':visible')
                    .first()
                    .click({ force: true })
            }
        })
    }

    static clickOnNext() {
        cy.get('[intro-id="item_info"]').invoke('text').then((firstItem) => {
            cy.get('[intro-id="item_next"]').should('be.enabled').click({ force: true })
            cy.get('[intro-id="item_info"]').should(($item) => {
                expect($item.text().trim()).not.to.eq(firstItem.trim())
            })

            cy.get('[intro-id="item_next"]').should('be.enabled').click({ force: true })
            cy.get('[intro-id="item_info"]').should(($item) => {
                expect($item.text().trim()).not.to.eq(firstItem.trim())
            })
        })
    }

    static goTotest() {
        cy.get('.icomoon-256px-practice-performance').should('be.visible').click()
        cy.contains('Go to test history').should('be.visible').click({ force: true })
        cy.get('.icomoon-new-24px-gear-1').first().click({ force: true })
    }

    static endTest() {
        cy.get('#show_result').should('be.visible').click({ force: true })
        cy.get('#btn-confirmed', { timeout: 30000 }).should('be.visible').click({ force: true })
    }

    static clickOnBrowse() {
        cy.get('.navbar_shop > li').each(($item) => {
            cy.wrap($item).trigger('mouseover', { force: true })
        })
    }

    static terminatePreAssessment() {
        cy.get('body').then(($body) => {
            if ($body.text().includes('Last test was not completed. Do you want to continue?')) {
                cy.get('#terminate_test_pre').should('be.visible').click({ force: true })
                cy.get('.terminate_current_test, [data-cy="terminate_currecnt_test"]')
                    .filter(':visible')
                    .first()
                    .click({ force: true })
            }
        })
    }

    static setSelectionText(paraid) {
        cy.get(paraid)
            .trigger('mousedown')
            .then(($el) => {
                const el = $el[0]
                const document = el.ownerDocument
                const range = document.createRange()
                range.selectNodeContents(el)
                document.getSelection().removeAllRanges()
                document.getSelection().addRange(range)
            })
            .trigger('mouseup')
        cy.document().trigger('selectionchange')
    }

    static visitCourse(url, courseCode, classCode) {
        const targetUrl = url || Cypress.config('baseUrl')
        const targetCourseCode = courseCode || Cypress.env('COURSE_CODE') || '03Hy5'
        const targetClassCode = classCode || Cypress.env('CLASS_CODE') || '05SOh'

        cy.visit(`${targetUrl}/?func=load_course&course_code=${targetCourseCode}&class_code=${targetClassCode}`)
    }

    static visitLOAplusCompleteCourse() {
        const courseCrn = Cypress.env('STUDENT_COURSE_CRN') || 'Demo.AA1'
        const searchText = Cypress.env('STUDENT_COURSE_SEARCH') || 'Platform Demo'

        this.searchAndManageCourse(searchText, courseCrn)
        cy.contains(/POST\s*ASSESSMENT/i, { timeout: 30000 }).should('be.visible')
    }

    static loadCourse() {
        const courseName = Cypress.env('AUTHOR_COURSE_SEARCH') || 'PHP From Beginning'
        cy.get('[data-cy="project"] > .ml').should('be.visible').click({ force: true })
        cy.get('[data-cy="searchbox"]').should('be.visible').clear().type(courseName, { force: true })
        cy.get('[data-cy="author"]').first().click({ force: true })
    }
}
