/*
@author: Anirudha Pratap 
@master_project_id: 6607
@phase_id: 
@story_id: 10941
@story_name: Open lab
@path: final/6607/Student
@test_case_name: Open lab.js
@description: 
@test_steps:
^Open lab of chapter
-Open the given prepkit
-Open any chapter.
-Scroll at the bottom of the chapter
-Click open in front of Gain experience using hands-on lab.

@test_data: n/a
@result: It will open the lab of the chapter
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
        //toc.next_steps3
    it('perform handson in 3rd option', function() {
        cy.get('[intro-id="chapters"]').click()
        cy.contains('Operating System Fundamentals').click({ force: true })
        cy.scrollTo('100%', '100%')
        cy.get('[data-cy="lab_open"]').click({ force: true })
    })
})