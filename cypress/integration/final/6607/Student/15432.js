/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id: 
@story_id: 15432
@story_name: Open Flashcard
@path: final/6607/Student
@test_case_name: Open Flashcard.js
@description: 
@test_steps:
^Open flashcard of chapter
-Open the given prepkit
-Open any chapter.
-Scroll at the bottom of the chapter
-Click open in front of flashcards option

@test_data: n/a
@result: It will open the flashcard of the chapter
*/
import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
describe('next steps in ebook area testing', function() {
    //toc.next_steps
    it('here you will see these option to read next topics', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            StudentPage.visitLOAplusCompleteCourse(data)
        })
        cy.get('[intro-id="chapters"]').click()
        cy.contains('Operating System Fundamentals').click({ force: true })
        cy.scrollTo('100%', '100%')
        cy.get('[data-cy="flashcard_open"]').click({ force: true })
    })
})