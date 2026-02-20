import BasePage from "../BasePage";
import LoginPage from '../../page-objects/pages/LoginPage'
export default class StudentPage extends BasePage {
    static openStudentDashboard() {
        cy.get('[data-cy="mylibrary"]').click({ force: true })
        cy.get('[data-cy="searchbox"]').type('lo-a', { force: true })
        cy.get('[crn="LO-Aplus-complete"]').contains('Manage').click({ force: true })
    }

    static studentDashboard(crn) {
        cy.get('[data-cy="mylibrary"]').click({ force: true })
        cy.get(crn).contains('Manage').click({ force: true })
    }
    static openurl() {
        cy.get('[data-cy="mylibrary"]').click({ force: true })
        cy.get('[data-cy="searchbox"]').type('platform Demo', { force: true })
        cy.get('[crn="Demo.AA1"]').contains('Manage').click({ force: true })
        LoginPage.visitOnClick('.span13 > .btn-outline-primary')
    }
    static terminateTest() {
        cy.get('#container').then(($text) => {
            if ($text.text().includes('Last test was not completed. Do you want to continue?')) {
                cy.get('#terminate_test').click()
                cy.get('.terminate_current_test').click()
            }
        })
    }
    static clickOnNext() {
        cy.get('[intro-id="item_next"]').click({ force: true })
        cy.wait(2000)
        cy.get('[intro-id="item_next"]').click({ force: true })
        cy.wait(2000)
    }
    static goTotest() {
        cy.get('.icomoon-256px-practice-performance').click()
        cy.contains('Go to test history').click({ force: true })
        cy.get('.icomoon-new-24px-gear-1').eq(0).click({ force: true })
    }
    static endTest() {
        cy.get('#show_result').click({ force: true })
        cy.wait(10000)
        cy.get('#btn-confirmed').click({ force: true })
    }
    static clickOnBrowse() {
        cy.get('.navbar_shop > li').each(($el, index, $list) => {
            cy.wrap($list).eq(index).trigger('mouseover', { force: true })
            cy.wait(1000)
        })
    }
    static terminatePreAssessment() {
        cy.get('#test_form').then(($text) => {
            if ($text.text().includes('Last test was not completed. Do you want to continue?')) {
                cy.get('#terminate_test_pre').click()
                cy.get('.terminate_current_test').click()
            }
        })
    }
    static setSelectionText(paraid) {
        cy.get(paraid).trigger('mousedown').then(($el) => {
            const el = $el[0]
            const document = el.ownerDocument
            const range = document.createRange()
            range.selectNodeContents(el)
            document.getSelection().removeAllRanges(range)
            document.getSelection().addRange(range)
        }).trigger('mouseup')
        cy.document().trigger('selectionchange')
    }
    static visitCourse(url) {
        cy.visit(url + '/?func=load_course&course_code=03Hy5&class_code=05SOh')
    }
    static visitLOAplusCompleteCourse(data) {
        cy.visit(data.url + '/?func=load_course&course=LO-Aplus-complete&class_code=' + data.class_code[10])
    }

    static loadCourse() {
        cy.get('[data-cy=project] > .ml').click({ force: true });
        cy.get('[data-cy=searchbox]').type('PHP From Beginning', { force: true });
        cy.get('[data-cy=author]').eq(0).click({ force: true });
    }
}