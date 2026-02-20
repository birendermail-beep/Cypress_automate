/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id:
@story_id: 10919
@story_name:  knowledge check
@path: final/6607/Student
@test_case_name: knowledge check
@description : na
@test_steps:
^open knowledge check in ebook area
-Open https://www.ucertify.com/
-Go to your library area
-Open a ebook you have
-Search for knowledge check, or quiz

^Perform knowledge check in ebook
-Open https://www.ucertify.com/ 
-Go to your library area 
-Open a ebook you have 
-Search for knowledge check, or quiz
-Perform question with correct selection

^Perform knowledge check in ebook
1. Open https://ucertify.com/ 
2. Go to your library area 
3. Open a ebook you have 
4. Search for knowledge check, or quiz
5. Perform question with incorrect selection

^Open knowledge check in a new tab
1. Open https://ucertify.com/  or https://www.ucertify.com//
2. Go to your library area 
3. Open a ebook you have 
4. Search for knowledge check, or quiz
5. Inspact knowledge check and copy the link of iframe containing question
6. Open that link in to a new tab.

@test_data: n/a
@result: It takes to the All Students tab 
*/
import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
describe('knowledge check area testing', function() {
    beforeEach('This is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            StudentPage.visitLOAplusCompleteCourse(data)
        })
    })

    //ebook-toc-1, ebook-toc-2, ebook-toc-4
    it('open knowledge check in ebook area', function() {
            cy.get('[intro-id="chapters"]').click()
            cy.contains('Operating System Fundamentals').click({ force: true })
            cy.contains('Knowledge Check').should('be.visible')
        })
        //knowledge-check-19
    it('Knowledge Check Result Saving 1', function() {
        cy.get('[intro-id="chapters"]').click()
        cy.get('[data-cy="toc_chapters"]').eq(1).click({ force: true })
        cy.scrollTo("30%", "30%")
        cy.contains('Knowledge Check').should('be.visible')
    })
})