/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id: 9327
@story_id: 10886
@story_name: Pre-assessment Configuration
@path: final/6615
@test_case_name: Pre-assessment Configuration.js
@description: opening the Design tab area
@test_steps:
^click on Tab in Design area
-click on one by one tab

@test_data: n/a
@result: opening the Design tab area 
*/

import { Navbar, login_username, login_password, LoginPage, InstructorPage } from '../../../../page-objects/pages/index'
describe('Instructor Area', function() {
    //Testing of Design Page
    it('Visit uceritfy Design Page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            InstructorPage.visitCourseSupport()
        })
        cy.get('[intro-id="design"] > [data-cy=educator_design]').click()
        cy.wait(2000);
        cy.get('[href="#chapter_settings"]').click()
        cy.wait(1000)
        cy.get('[href="#practice_set_settings"]').click()
        cy.wait(1000)
        cy.get('[href="#post_assess_test_settings"]').click()
        cy.wait(1000)
        cy.get('[href="#myAssignments"]').click()
        cy.wait(1000)
        cy.get('[href="#tests_set_settings"]').click()
    })
})