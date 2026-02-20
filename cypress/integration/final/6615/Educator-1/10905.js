/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id: 
@story_id: 10905
@story_name: Track Labs
@path: final/6615
@test_case_name: Track Labs
@description : n/a
@test_steps:
^Lessons tab
-Click on Lessons tab 

^Check the Student's reading level in Lessons tab
-Click on the Student's reading level in Lessons tab

@test_data: n/a
@result: Students reading level shows up
*/

import { Navbar, login_username, login_password, LoginPage, InstructorPage } from '../../../../page-objects/pages/index'
describe('Instructor Area', function() {
    beforeEach('this is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            InstructorPage.visitCourseSupport();
        })
    })
    it('Lesson tab', function() {
            cy.get('[data-cy=track]').click()
            cy.get('[aria-label="Lessons"] > .ml-sm').click()
        })
        // Check the Students reading level in Lessons tab
    it('Check the Students reading level in Lessons tab', function() {
        cy.get('[data-cy=track]').click()
        cy.get('[aria-label="Lessons"] > .ml-sm').click()
        cy.get('.peity').eq(0).click()
    })
});