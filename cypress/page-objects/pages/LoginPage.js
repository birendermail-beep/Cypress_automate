import BasePage from '../BasePage'
export default class LoginPage extends BasePage {
    static loginPage(username, password) {
        cy.get('#email').clear().type(username)
        cy.get('#password').clear().clear().type(password)
        cy.get('#submit').click()
            /** This is for handeling the uncaught:exception */
        Cypress.on('uncaught:exception', (error, runnable) => {
            return false;
        })
    }
    static visitOnClick(datacy) {
        cy.get(datacy).should('have.attr', 'href').then((href) => {
            cy.visit(href)
        })
    }
    static visitOnFooter(contain) {
        cy.get('.text-dark > .outline1').contains(contain).should('have.attr', 'href').then((href) => {
            cy.visit(href)
        })
    }
    static clickOnCourseCat() {
        cy.get('#course_categories').trigger('mouseover', { force: true })
        cy.contains('IT / Computer Science').click({ force: true })
        cy.get('#course_categories').trigger('mouseover', { force: true })
        cy.contains('Project Management').click({ force: true })
        cy.get('#course_categories').trigger('mouseover', { force: true })
        cy.contains('Vocational Training').click({ force: true })
        cy.get('#course_categories').trigger('mouseover', { force: true })
        cy.contains('Coding').click({ force: true })
    }
}