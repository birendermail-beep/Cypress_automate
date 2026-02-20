/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id: 9327
@story_id: 11011
@story_name: Perform flashcard in fill in the blank mode
@path: final/6607/Student
@test_case_name: Perform flashcard in fill in the blank mode
@description: N/A
@test_steps:

^Perform flashcard in fill in the blank mode
-fill in the blank 

^test case of flash card
-visit the website
-login into page
-Open the chapter and lesson.
-Click on the Card ("flashcard").
-Click on the setting button.
-Select the "Fill in the blank" option, then start
-Click on sidepane of flashcard

@test_data: n/a
@result: Perform flashcard in fill in the blank mode
*/

import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
describe('Complete uCertify Testing', function() {
    beforeEach('This will open card', function() {
            cy.fixture('global').then(data => {
                cy.visit(data.url)
                Navbar.clickOnLogin()
                LoginPage.loginPage(login_username, login_password)
            })
        })
        /** This will test the Flash Card in Fill in the blanks Mode */
    it('Card in Fill in the blanks Mode', function() {
        cy.fixture('global').then(data => {
            StudentPage.visitLOAplusCompleteCourse(data)
        })
        cy.get('[data-cy=chapters]').click({ force: true }).then(() => {
            cy.get('#ebook_toc').should('exist')
        })
        cy.get('[data-cy=cards]').eq(1).click()
        cy.get('[data-original-title="Start Flashcard"]').click()
        cy.get('[data-type="2"]').click({force: true})
        cy.get('#card_start').click({force: true})
        cy.get('#btntxt').click()
            /** Here we check the all bottom button are exists or not. */
        cy.get('#fcdisabletimer').should('exist')
        cy.get('[intro-id="timer"]').should('exist')
        cy.get('#pause').should('exist')
        cy.get('#manage_settg').should('exist')
        cy.get('[intro-id="global_goback"]').should('exist')
        cy.wait(3000)
        cy.get('#fcdisabletimer').click({ force: true })
        cy.get('[intro-id="timer"]').should('be.hidden')
        cy.get('#pause').should('be.hidden')
        cy.get('#submit_btn').should('be.hidden')
        cy.get('#answer_text').type('Answer', { force: true }).then(() => {
            cy.get('#submit_btn').should('be.visible')
        })
        cy.get('#answer_text').clear({ force: true }).then(() => {
            cy.get('#submit_btn').should('be.hidden')
        })
        cy.get('.icomoon-24px-go-back-2').click({ force: true })
        cy.get('.col-md').should('exist')
    })
    it('This will test the Flashcard in fill in the blank mode', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/?func=load_course&course_code=02pzx&class_code=04ehS')
        })
        cy.get('[data-cy=chapters]').click();
        cy.get('[data-cy=cards]').eq(1).click()
        cy.get('[data-original-title="Start Flashcard"]').click().then(() => {
            cy.get('#advance_panel > div > div > div > .card_mode_btn').contains("Fill in the blanks").click();
            cy.get('#card_start').click();
        })
        cy.get('.icomoon-24px-go-back-2').click({ force: true })
        cy.get('.col-md').should('exist')
    })
})