/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id:
@story_id: 10868
@story_name: Modify Assessment
@path: final\6615
@test_case_name: Modify Assessment.js
@description: n/a
@test_steps:
^Assessment tab/ Action button/ Modify
-Click on Action button for an unscheduled assessment;        
-Select Modify option from the drop-down list;        
-Do the required modification in the Assessment;      
-Click the Save button;     
-Click the Save button on Assessment tab;

@test_data: n/a
@result: Assessment tab Action button Modify
*/

import { Navbar, login_username, login_password, LoginPage, InstructorPage } from '../../../../page-objects/pages/index'
describe('Instructor Area', function() {
    it('1.11.8.3 Assessment tab/ Action button/ Modify', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            InstructorPage.visitTechCourse();
        })
        cy.get('[data-cy="action_assignment_btn"]').eq(0).click({ force: true })
        cy.get('[data-cy=action_modify_btn]').eq(0).click({ force: true })
        cy.wait(3000)
        cy.get('#total_time_allowed').clear({ force: true }).type('90', { force: true })
        cy.get('#save_assessment > .toolbar-label').click({ force: true })
    })
});