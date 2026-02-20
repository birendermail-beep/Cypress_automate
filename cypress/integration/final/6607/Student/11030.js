/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id: 10478
@story_id: 11030
@story_name: Working with 3 dots in Chapters
@path: final/6607/Student
@test_case_name: Working with 3 dots in Chapters.js
@description: 
@test_steps:
^save notes in Chapters
-Open https://ucertify.com/ 
-Login with your account
-Click on My Library and search LO-Aplus-complete course 
-open any one course as student view then dashboard will be open 
-click on chapter and lesson and open chapter 2
-click on three dot , it is coming in topic then one dialog will be open 
-write a note then it will be save in this topic

^save bookmark in Chapters
-Open https://ucertify.com/ 
-Login with your account
-Click on My Library and search LO-Aplus-complete course 
-open any one course as student view then dashboard will be open 
-click on chapter and lesson and open chapter 2
-click on three dot , it is coming in topic then one dialog will be open 
-change the bookmark button setting then it will be save

^save confidence in Chapters
-Open https://ucertify.com/ 
-Login with your account
-Click on My Library and search LO-Aplus-complete course 
-open any one course as student view then dashboard will be open 
-click on chapter and lesson and open chapter 2
-click on three dot , it is coming in topic then one dialog will be open 
-change the rating button setting then it will be save

@test_data: n/a
@result: all three options are working properly
*/

import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
describe('This will Test the eBook Area', function() {
    it('Working with 3 dots in Chapters', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
                //write a noted in topic
            StudentPage.visitLOAplusCompleteCourse(data)
        })
        cy.get('[data-cy="chapters"]').click({ force: true }).then(() => {
            cy.get('#ebook_toc').should('exist')
        })
        cy.get('[data-cy="toc_chapters"]').eq(1).click({ force: true })
        cy.get('[data-cy=tripple_dot]').eq(0).click({ force: true })
        cy.wait(1000)
        cy.get('.popover-body').should('be.visible')
        cy.wait(1000)
        cy.get('.popover-body > :nth-child(4) > .dot').click({ force: true })
        cy.get('.popover-body > .mt-md > .dot').eq(0).click({ force: true })
        cy.get('.popover-body > :nth-child(6) > #textarea_notes').clear().type('this is testing', { force: true })
    })
})