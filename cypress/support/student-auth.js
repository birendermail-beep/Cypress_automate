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

export const clickLessonNextStep = labelPattern => {
    cy.contains(':visible', labelPattern, { timeout: 30000 })
        .first()
        .scrollIntoView()
        .then($label => {
            let control = $label.closest('a, button, [role="button"]')

            if (!control.length) {
                let container = $label.parent()
                for (let depth = 0; depth < 7 && container.length; depth += 1) {
                    control = container.find('a, button, [role="button"]')
                        .filter(':visible')
                        .filter((_, element) =>
                            /Open|Start|Launch|Next|Continue/i.test(element.textContent))
                    if (control.length) break
                    container = container.parent()
                }
            }

            expect(control.length, 'lesson next-step action').to.be.greaterThan(0)
            cy.wrap(control.first())
                .invoke('removeAttr', 'target')
                .click({ force: true })
        })
}

export const openLessonToolbarActivity = labelPattern => {
    cy.window().then(win => {
        cy.stub(win, 'open').as('lessonActivityWindow')
    })

    cy.contains('button, a, [role="button"]', labelPattern, {
        timeout: 30000,
    }).filter(':visible').last()
        .click({ force: true })

    // Quiz and Labs are launched in a separate browser window. Cypress controls
    // only the original tab, so its URL correctly remains on the ebook page.
    // Verify the launch request instead of asserting against the parent URL.
    cy.get('@lessonActivityWindow', { timeout: 30000 })
        .should('have.been.called')
}
