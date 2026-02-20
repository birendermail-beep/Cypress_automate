/*
@author: Anirudha Pratap 
@master_project_id: 6607
@phase_id: 
@story_id: 15433
@story_name: Open Exercise
@path: final/6607/Student
@test_case_name: Open Exercise.js
@description: 
@test_steps:
^Open exercise of chapter
-Open the given prepkit
-Open any chapter.
-Scroll at the bottom of the chapter
-Click open in front of exercise option

@test_data: n/a
@result: It will open the erercise of the chapter
*/
import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
describe('next steps in ebook area testing', function() {
    //toc.next_steps2
    it('attempt excercise in 2nd option', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            StudentPage.visitLOAplusCompleteCourse(data)
        })
        cy.get('[intro-id="chapters"]').click()
        cy.contains('Operating System Fundamentals').click({ force: true })
        cy.scrollTo('100%', '100%')
        cy.get('[data-cy="exercise_open"]').click({ force: true })
    })
})