/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id: 
@story_id: 10900
@story_name: Track Assessment
@path: final/6615
@test_case_name: Track Assessment.js
@description: n/a
@test_steps:

^Assessments tab
-Click on Assessments tab

^Re-test Option in Settings of Assessment tab; 
-Click on Assessments tab;      
-Click on any Graded Assessment score;      
-Scroll down to check the Re-test option; 

^New Assessment option in Settings of Assessment tab;  
-Click on Assessments tab;      
-Click on any Graded Assessment score;      
-Scroll down to check the New Assessment option; 

^Check the list of 'All' assessments
-Click on Assessments tab;      
-Select 'All' option from the drop-down; 

^Check the list of 'Schedule' assessments
-Click on Assessments tab;      
-Select 'Schedule' option from the drop-down; 

^Check the list of 'Unschedule' assessments
-Click on Assessments tab;      
-Select 'Unschedule' option from the drop-down; 

@test_data: n/a
@result: Students score for Graded assessments shows up  
*/
import { Navbar, login_username, login_password, LoginPage, InstructorPage } from '../../../../page-objects/pages/index'
describe('Instructor Area', function() {
    beforeEach('this is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
        })
    })
    it('1.10.6.1 Assessments tab', function() {
        InstructorPage.visitTechCourse();
        cy.get('[data-cy=assessments]').click({ force: true })
    })
    it('Re - test option in setting of assessment tab', function() {
        InstructorPage.visitCourse();
        cy.get('[data-cy=track]').click()
        cy.get('#edu_tab_block a[data-cy="assessment_track_cy"]').click()
    })
    it('Track tab/ All Assessment filter', function() {
        InstructorPage.visitCourse()
        cy.get('[data-cy=track]').click()
        cy.get('#edu_tab_block [aria-label="Assessments"]').click()
        cy.get('.all_show').dblclick()
    })
    it('Check the list of Schedule assessments', function() {
        InstructorPage.visitCourse()
        //InstructorPage.filterAssessment()
        cy.get('[data-cy=track]').click()
        cy.get('#edu_tab_block [aria-label="Assessments"]').click()
        cy.get('.schedule_show').dblclick()
    })
    it('Check the list of Unschedule assessments', function() {
        InstructorPage.visitCourse();
        cy.get('[data-cy=track]').click()
        cy.get('#edu_tab_block [aria-label="Assessments"]').click()
        cy.get('.unschedule_show').dblclick()
    })
});