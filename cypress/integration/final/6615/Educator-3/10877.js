/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id: 
@story_id: 
@story_name: Design Tab Scroll Feature
@path: final/6615
@test_case_name: Design Tab Scroll Feature.js
@description: n/a
@test_steps:
    ^Design tab/ Scrolling option for all components
    -Select the area that needs to be designed
@test_data: n/a
@result:Scrolling should be visible.
 */

import { Navbar, login_username, login_password, LoginPage, InstructorPage } from '../../../../page-objects/pages/index'
describe('Instructor Area', function() {
    it('1.12.2.1 Design tab/ Visibility button', function() {
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
    })
});