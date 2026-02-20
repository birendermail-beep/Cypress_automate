/*
@author: Anirudh Pratap
@master_project_id: 6607
@phase_id: 
@story_id: 11700
@story_name: Ungrouped Course
@path: final/6607/Student
@test_case_name: Ungrouped Course.js
@description: 
@test_steps: 
^To see the list of Ungrouped courses
-Click on ungrouped from left pane of My Library

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
            //To see the list of Ungrouped courses
        cy.get('#ungrouped').click({ force: true })
    })
})