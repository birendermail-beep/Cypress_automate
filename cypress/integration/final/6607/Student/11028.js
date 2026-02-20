/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id: 6607
@story_id: 11028
@story_name: Perform Flashcard
@path: final/6607/Student
@test_case_name: Perform Flashcard
@description: only show the practice test and certificate test on dashboard
@test_steps:
^Complete 100% card
1. Open https://ucertify.com/ 
2. Login with your account
3. Click on My Library and search -complete course 
4. open any one course as student view then dashboard will be open 
5. click on chapter and lesson then click on card and make sure your have attempted 100% then terminate option will be coming
6. click the terminate button

^terminate the card
1. Open https://ucertify.com/ 
2. Login with your account
3. Click on My Library and search -complete course 
4. open any one course as student view then dashboard will be open 
5. click on link with instructor and click remove then click yes button
6. now student will remove from the class

^continue the card
1. Open https://ucertify.com/ 
2. Login with your account
3. Click on My Library and search -complete course 
4. open any one course as student view then dashboard will be open 
5. click on lesson and chapter and click lesson one card which have more than zero score
6. continue or terminate and review answer button will be shown 
7. then click on terminate the session

^review flashcard answers
1. Open https://ucertify.com/ 
2. Login with your account
3. Click on My Library and search LO-Aplus-complete course 
4. open any one course as student view then dashboard will be open 
5. click on lesson and chapter and click lesson one card which have more than zero score
6. continue or terminate and review answer button will be shown 
7. then click on continue with saved test session the session

@test_data: n/a
@result: https://screencast.com/t/BwAA0NYB2FW.
*/

import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
describe('Complete uCertify Testing', function() {
    beforeEach('this is login', function() {
            cy.fixture('global').then(data => {
                cy.visit(data.url)
                Navbar.clickOnLogin()
                LoginPage.loginPage(login_username, login_password)
                StudentPage.visitLOAplusCompleteCourse(data)
            })
        })
        //continue the card
    it('continue the card of testing', function() {
            cy.get('[data-cy="chapters"]').click({ force: true }).then(() => {
                cy.get('#ebook_toc').should('exist')
            })
            cy.get('[data-cy="cards"]').eq(0).click({ force: true })
            cy.get('#card_start').click({ force: true })
            cy.get('#flash_card > .top10 > .float-left').click({ force: true })
            cy.get('body').click()
            cy.get('#flash_card > .show_it').click({ force: true })
            cy.get('#correct').click({ force: true })
            cy.get('#flash_card > .show_it').click({ force: true })
            cy.get('#incorrect').click({ force: true })
            cy.fixture('global').then(data => {
                cy.visit(data.url + '/?func=load_course&course=LO-Aplus-complete&class_code=' + data.class_code[6])
            })
            cy.get('[data-cy="chapters"]').click({ force: true }).then(() => {
                cy.get('#ebook_toc').should('exist')
            })
            cy.get('[data-cy="cards"]').eq(0).click({ force: true })
        })
        //review flashcard answers
    it('review flashcard answers of testing', function() {
        cy.get('[data-cy="chapters"]').click({ force: true }).then(() => {
            cy.get('#ebook_toc').should('exist')
        })
        cy.get('[data-cy="cards"]').eq(0).click({ force: true })
    })
})