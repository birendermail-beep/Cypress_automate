/*
@author: Anirudh Pratap
@master_project_id: 6607
@phase_id: 
@story_id: 11698
@story_name: Archived Course
@path: final/6607/Student
@test_case_name: Archived Course.js
@description: 
@test_steps: 

^To see number of Archived courses
-on the left pane of my Library, click on Archive

^To see number of Archived courses by move course from active to Archive and Archive to active
-on the left pane of my Library, click on Archive

@test_data: n/a
@result: Should be able to see the number of archived courses
*/
import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
describe('login page description', () => {
    it('Course access in Library', () => {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        cy.get('[data-cy="mylibrary"]').click({ force: true })
            //To see number of  Archived courses
        cy.get('[intro-id="archived"]').click({ force: true })
            //To see number of Archived courses by move course from active to Archive and Archive to active
        cy.get('#active_course').click({ force: true })
        cy.get('#l > .d-inline-block').click({ force: true });
        cy.get('.icomoon-menu-2').eq(1).click({ force: true })
        cy.get('[data-cy="active_to_archive"]').eq(1).click({ force: true })
        cy.get('[data-cy="yesbutton"]').click({ force: true })
        cy.wait(5000)
        cy.get('#archive').click({ force: true })
        cy.get('.icomoon-menu-2').eq(0).click({ force: true })
        cy.wait(3000)
        cy.get('[data-cy="archive_to_active"]').eq(1).click({ force: true })
        cy.wait(3000)
        cy.get('[data-cy="yesbutton"]').click({ force: true })
    })
})