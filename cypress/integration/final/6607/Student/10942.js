/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id: 
@story_id: 10942
@story_name: Go to next chapter
@path: final/6607/Student
@test_case_name: Go to next chapter.js
@description: 
@test_steps:
^Go to next chapter
-Open the given prepkit
-Open any chapter.
-Scroll at the bottom of the chapter
-Click open in front of Proceed to the next lesson.

@test_data: n/a
@result: It will redirect you to the next chapter
*/
import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
describe('next steps in ebook area testing', function() {
    beforeEach('This is login', function() {
            cy.fixture('global').then(data => {
                cy.visit(data.url)
                Navbar.clickOnLogin()
                LoginPage.loginPage(login_username, login_password)
                StudentPage.visitLOAplusCompleteCourse(data)
            })
        })
        //toc.next_steps4
    it('goto next lesson in 4rth option', function() {
        cy.get('[data-cy=chapters]').click({ force: true })
        cy.contains('Operating System Fundamentals').click({ force: true })
        cy.scrollTo('100%', '100%')
        cy.get('[data-cy="next_steps_open"]').click({ force: true })
    })
})