/*
@author: Anirudh Pratap
@master_project_id: 6607
@phase_id: 
@story_id: 15372
@story_name: Eval Course
@path: final/6607/Student-1
@test_case_name: Eval course
@description: N/A   
@test_steps: 
^Eval
-login the page 
-visit the my library
-click on Eval

@test_data: n/a
@result:Should be able to see the number of Eval courses
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('login page description', () => {
    it('Eval Course', () => {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        cy.get('[data-cy="mylibrary"]').click({ force: true })
            //Eval courses
        cy.get('[data-cy=eval_copy]').click({ force: true })
    })
})