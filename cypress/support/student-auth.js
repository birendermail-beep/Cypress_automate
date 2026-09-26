import {
    Navbar,
    login_username,
    login_password,
    LoginPage,
} from '../page-objects/pages/index'

export const restoreStudentLogin = (sessionScope = 'jigyaasa') => {
    cy.session(
        ['student-login', sessionScope, login_username],
        () => {
            cy.visit('/app/')
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
        },
        {
            cacheAcrossSpecs: true,
            validate() {
                cy.request({
                    url: '/app/',
                    failOnStatusCode: false,
                }).then(response => {
                    expect(response.status, 'student session response').to.be.lessThan(400)
                    expect(
                        response.redirectedToUrl || '',
                        'student session must not redirect to login'
                    ).not.to.include('login.php')
                    expect(
                        String(response.body),
                        'student session must not return the login form'
                    ).not.to.match(/name=["']?(?:email|password)["']?/i)
                })
            },
        }
    )
}

export const visitDemoCourse = () => {
    restoreStudentLogin()
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
    cy.contains('button, a, [role="button"]', labelPattern, {
        timeout: 30000,
    }).filter(':visible').last()
        .should('be.visible')
        .click({ force: true })
}
