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
    cy.visit('/app/?func=ebook&chapter_no=1#top')

    cy.location('search', { timeout: 30000 }).should(search => {
        const chapter = new URLSearchParams(search).get('chapter_no')
        expect(chapter, 'opened lesson chapter').to.equal('1')
    })
    cy.get('body').should('be.visible')
        .and('not.contain.text', 'Default blank page')
}
