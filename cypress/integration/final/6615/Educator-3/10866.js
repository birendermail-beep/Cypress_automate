/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id:
@story_id: 10866
@story_name: Schedule Unschedule  Assessment
@path: final\6615
@test_case_name: Schedule Unschedule  Assessment.js
@description: n/a
@test_steps:
^Assessment tab/ Action button/ Schedule
-Click on Action button for an unscheduled assessment;        
-Select Schedule from the drop-down list;        
-Enter a tag;     
-Select Start & End date;      
-Click on Save button;       
-Click on Save button on the Assessment tab;

^Assessment tab/ Action button/ Unschedule
-Click on Action button for an scheduled assessment;        
-Select Unschedule option from the drop-down list;        
-Click on OK button;    
-Click on Save button available on Assessment tab;

@test_data: n/a
@result: Assessment tab Action button Schedule and Unschedule
*/
import { Navbar, login_username, login_password, LoginPage, InstructorPage } from '../../../../page-objects/pages/index'
describe('Instructor Area', function() {
    beforeEach('this is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            InstructorPage.visitTechCourse();
        })
    })
    it('1.11.8.1 Assessment tab/ Action button/ Schedule', function() {
        cy.get('[href="#myAssignments"]').click();
        cy.get('#settting_a_965187').click();
        cy.get('#assignment_tag').clear({ force: true }).type('testag', { force: true })
        cy.get('#assessment_start_date2').click()
        cy.get('#save_assessment > .toolbar-label').click({ force: true })
    })
    it('1.11.8.9 Assessment tab/ Action button/ Unschedule', function() {
        cy.get('[href="#myAssignments"]').click();
        cy.get('[data-cy="action_assignment_btn"]').eq(0).click()
        cy.get('.unschedule_assignment').click();
        cy.wait(2000);
        // cy.get('.dropdown > .dropdown-menu > :nth-child(2) > .unschedule_assignment').eq(0).click({ force: true })
        cy.get('#btn-confirmed').click()
        cy.get('#save_assessment > .toolbar-label').click({ force: true })
    })
});