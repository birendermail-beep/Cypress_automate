/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id: 9327
@story_id: 11010
@story_name: Perform Flashcard in Classic Mode
@path: final/6607/Student
@test_case_name: Perform Flashcard in Classic Mode.js
@description:
@test_steps:
^Open Flashcard
-click on card from bottom toolbar

^3 options to perform flashcard
-you have 3 option to start the flash card

^lesson
-Go to chapter and lesson 
- Click on search TOC and Select search lesson 
-Type Lessson name
- Then click on search icon

^Perform flashcard in classic mode
-classic 

^Check next, previous, correct, incorrect
-Check the all the buttom button of card is availabed, And perform the next, and previous navigations


@test_data: n/a
@result: Perform Flashcard in Classic Mode will open 
*/

import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
describe('Complete uCertify Testing', function() {
    beforeEach('This will open card', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            StudentPage.visitLOAplusCompleteCourse(data)
            cy.get('[data-cy=chapters]').click({ force: true }).then(() => {
                cy.get('#ebook_toc').should('exist')
            })
        })
    })

    /** This will test Flash Cards */
    it('Flash Card Page', function() {
        cy.get('[data-cy=cards]').eq(1).click()
        cy.get('[data-original-title="Start Flashcard"]').click()
        cy.wait(2000)
        cy.get('#card_start').click({ force: true })
        cy.get('#next').click();
    })

    /** This will test the Flash Card in the Classic Mode */
    it('Card in Classic Mode', function() {
        cy.get('[data-cy=cards]').eq(1).click()
        cy.get('[data-original-title="Start Flashcard"]').click()
        cy.wait(2000)
        cy.get('#card_start').click({ force: true })
        cy.cardNavigation()
    })
})