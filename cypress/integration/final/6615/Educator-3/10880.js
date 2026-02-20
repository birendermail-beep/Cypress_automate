/*
@author: Anirudha Pratap 
@master_project_id: 6615
@phase_id: 
@story_id: 
@story_name: LTI Help
@path: final/6615
@test_case_name: LTI Help.js
@description: n/a
@test_steps:
^Design tab/ LTI help button
-On Design tab, select the LTI help button;       
-Select the LMS name from the drop down list;       
-Go though the instructions for the required LMS;
@test_data: n/a
@result: Design tab LTI help button
*/

import { Navbar, login_username, login_password, LoginPage, InstructorPage } from '../../../../page-objects/pages/index'
describe('Instructor Area', function() {
    it('1.12.1.3.1 Design tab/ LTI help button', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            InstructorPage.visitCourseSupport()
        })
        cy.get('[intro-id="design"] > [data-cy=educator_design]').click()
        cy.wait(2000);
        cy.get('.load_lti_help').click()
        cy.wait(2000);
        cy.contains('LTI Help').click()
        // cy.get('#lms_select').select('D2L', { force: true })
    })
});