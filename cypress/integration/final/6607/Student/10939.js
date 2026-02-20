/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id: 
@story_id: 10939
@story_name: Open Quiz
@path: final/6607/Student
@test_case_name: Open Quiz.js
@description: 
@test_steps:
^Open quiz of chapter
-Open the given prepkit
-Open any chapter.
-Scroll at the bottom of the chapter
-Click open in front of quiz option

@test_data: n/a
@result: It will open the quiz of the chapter
*/
import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
describe('next steps in ebook area testing', function() {
    //toc.next_steps1
    it('attempt quiz in 1st option', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            StudentPage.visitLOAplusCompleteCourse(data)
        })
        cy.get('[intro-id="chapters"]').click()
        cy.contains('Operating System Fundamentals').click({ force: true })
        cy.scrollTo('100%', '100%')
        cy.get('[data-cy="quiz_open"]').click({ force: true })
    })
})