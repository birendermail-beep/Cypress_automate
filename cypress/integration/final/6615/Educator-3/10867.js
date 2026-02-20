/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id:
@story_id: 10867
@story_name: Assign Assessment
@path: final\6615
@test_case_name: Assign Assessment.js
@description: n/a
@test_steps:
^Assessment tab/ Action button/ Assign to
-Click on Action button for an unscheduled assessment;        
-Select Assign to option from the drop-down list;        
-Select required students name from the list;       
-Select test start date & end date and time limit;     
-Click on Assign button;      
-Click on Save button on Assessment tab;

@test_data: n/a
@result: Assessment tab Action button Assign to
*/

import { Navbar, login_username, login_password, LoginPage, InstructorPage } from '../../../../page-objects/pages/index'
describe('Instructor Area', function() {

    it('1.11.8.2 Assessment tab/ Action button/ Assign to', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            InstructorPage.visitTechCourse();
        })
        cy.get('[data-cy="action_assignment_btn"]').eq(0).click()
        cy.get('.assign_to').eq(0).click({ force: true })
        cy.wait(3000)
        cy.get('.col-12 > .w-100 > .select2-container > .selection > .select2-selection').click({ force: true })
        cy.wait(3000)
        cy.get('#student_name').select('Rahul SHUKLA', { force: true })
        cy.wait(3000)
        cy.get('#end_date').clear({ force: true }).type('06-Dec-20', { force: true })
        cy.get('#new_assessment').click()
        cy.get('#save_assessment > .toolbar-label').click({ force: true })
    })
});