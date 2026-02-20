/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id: 9327
@story_id: 11012
@story_name: Perform flashcard in quiz mode
@path: final/6607/Student
@test_case_name: Perform flashcard in quiz mode
@description:
@test_steps:
^Perform flashcard in quiz mode
-quiz

^Courses Cards 1
-Open My library
-Open any course
-Open Chapters and lessons.
-Open Cards
-Click on settings icon and choose Quiz
-Quiz mode will be opened

^Courses Cards 2
-follow steps in upper row.
-when clicked on I dont know button. it will show correct answer.

@test_data: n/a
@result: Perform flashcard in quiz mode 
*/

import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
describe('Complete uCertify Testing', function() {
    /** This will test the Flash Card in Quiz Mode */
    it('Card in Fill in the quiz Mode', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            StudentPage.visitLOAplusCompleteCourse(data)
            cy.get('[data-cy=chapters]').click({ force: true }).then(() => {
                cy.get('#ebook_toc').should('exist')
            })
            cy.get('[data-cy=cards]').eq(1).click()
            cy.get('[data-original-title="Start Flashcard"]').click()

        })
        cy.get('[data-type="3"]').click()
        cy.get('#card_start').click()

        /** Here we check the all bottom button are exists or not. */
        cy.get('#fcdisabletimer').should('exist')
        cy.get('[intro-id="timer"]').should('exist')
        cy.get('#pause').should('exist')
        cy.get('#manage_settg').should('exist')
        cy.get('[intro-id="global_goback"]').should('exist')

        //Pankaj:ucauto
        cy.wait(5000);
        cy.get('#fcdisabletimer').click({ force: true })
        //Pankaj:ucauto
        cy.wait(5000);
        cy.get('[intro-id="timer"]').should('be.hidden')
        cy.get('#pause').should('be.hidden')
        cy.get('.center-block > div.answersdiv').its('length').should('eq', 4)
        cy.get('[data-guid="dontknow"]').click()
        cy.get('.text-dark > .font18').contains("Go Back").click({ force: true })
        cy.get('#item-container-grid-view').should('exist')
    })
})