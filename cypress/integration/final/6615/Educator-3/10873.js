/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id:
@story_id: 10873
@story_name: Modify Schedule of Assessment
@path: final\6615
@test_case_name: Modify Schedule of Assessment.js
@description: n/a
@test_steps:
^Assessment tab/ Action button/ Modify Schedule
-Click on Action button for an scheduled assessment;        
-Select Modify schedule option from the drop-down list;        
-Modify the scheduling of the Assessment;        
-Click on Save button;        
-Click on Save button available on Assessment tab;

@test_data: n/a
@result: Assessment tab Action button Modify Schedule
*/

import { Navbar, login_username, login_password, LoginPage, InstructorPage } from '../../../../page-objects/pages/index'
describe('Instructor Area', function() {
    it('1.11.8.8 Assessment tab/ Action button/ Modify Schedule', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            InstructorPage.visitTechCourse();
        })
        cy.get('[href="#myAssignments"]').click();
        cy.get('#settting_a_965187').click()
        cy.get('#settings-tab').should('exist')
        cy.get('#assignment_tag').should('exist')
        cy.get('#assessment_start_date2').should('exist')
        cy.get('#assessment_end_date2').should('exist')
        cy.get('#time_zone').should('exist')
        cy.get('#assignment_tag').clear({ force: true }).type('testag', { force: true })
        cy.get('#modal_to_settings').click();
    })
});