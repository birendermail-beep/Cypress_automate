import {
    Navbar,
    login_username,
    login_password,
    LoginPage,
} from '../page-objects/pages/index'

export const restoreStudentLogin = (sessionScope = 'jigyaasa') => {
    cy.session(['student-login', sessionScope, login_username], () => {
        cy.visit('/')
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
    })
}

export const visitDemoCourse = () => {
    restoreStudentLogin()
    cy.visit('/')
    cy.fixture('global').then(data => {
        cy.visit(data.url + '/app/?func=load_course&course=Demo.AA1')
    })
}

export const openDemoLesson = () => {
    visitDemoCourse()

    cy.get('[intro-id="chapters"], [data-cy="chapters"]', { timeout: 30000 })
        .filter(':visible')
        .first()
        .click({ force: true })

    cy.contains(':visible', /^\s*Read\s*$/i, { timeout: 30000 })
        .first()
        .click({ force: true })

    cy.location('search', { timeout: 30000 }).should(search => {
        const chapter = new URLSearchParams(search).get('chapter_no')
        expect(chapter, 'opened lesson chapter').to.not.equal('0')
    })
    cy.get('body').should('be.visible')
        .and('not.contain.text', 'Default blank page')
}
