/*
@author: Anirudh Pratap
@master_project_id: 6607
@phase_id: 
@story_id: 11699
@story_name: Expired Course
@path: final/6607/Student
@test_case_name: Expired Course.js
@description: 
@test_steps: 
^To see the number of expired courses
-click on expired from left pane of My Library

@test_data: n/a
@result: Should show the list of expired courses
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
            //To see the number of expired courses
        cy.get('#expire').click({ force: true })
    })
})