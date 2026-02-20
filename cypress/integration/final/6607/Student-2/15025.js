/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id:
@story_id:
@story_name: Proctor Login
@path: final/6607/Student
@test_case_name: Proctor Login
@description: open the proctor modal
@test_steps:

^proctor_login_modal
-Go to my library
-Choose based on app-training course
-open chapter and lesson
-click on proctor-login button

@test_data:n/a
@result:open the proctor modal
*/
import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
describe('Student Area', function() {
    it('proctor_login_modal', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            StudentPage.visitLOAplusCompleteCourse(data)
        })
        cy.get('[data-cy="chapters"]').click({ force: true })
        cy.get('[data-cy=toc_chapters]').eq(0).click({ force: true })
        cy.contains('Proctor Login').click({ force: true })
    })

})