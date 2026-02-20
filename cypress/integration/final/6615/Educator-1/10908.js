/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id:
@story_id: 10908 
@story_name: Track Lessons-Exercise 
@path: final/6615
@test_case_name: Track Lessons-Exercise
@test_steps:

^Check the Student's score for Exercises in Lessons tab
-Click on the Student's score for Exercises in Lessons tab

@test_data: n/a
@result: Student's score for Exercises shows up
*/

import { Navbar, login_username, login_password, LoginPage, InstructorPage } from '../../../../page-objects/pages/index'
describe('Instructor Area', function() {
    beforeEach('this is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            InstructorPage.visitSalesStaff()
        })
    })
    it('1. Click on the Students score for Exercises in Lessons tab', function() {
        cy.get('[data-cy=track]').click()
        cy.get('[aria-label="Lessons"] > .ml-sm').click()
        cy.get('.header_05DjO > :nth-child(4)').click({force: true})
    })
})