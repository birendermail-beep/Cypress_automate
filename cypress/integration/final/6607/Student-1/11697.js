/*
@author: Anirudh Pratap
@master_project_id: 6607
@phase_id: 
@story_id: 11697
@story_name: Active Course
@path: final/6607/Student-1
@test_case_name: Active Course.js
@description: N/A   
@test_steps: 
^Active
-on the left pane of my Library, click on Active

@test_data: n/a
@result:Should be able to see the number of active courses
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
            //active courses
        cy.get('#active_course').click({ force: true })
    })
})