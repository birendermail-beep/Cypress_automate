/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id:
@story_id: 
@story_name: Archive Unarchive  Assessment
@path: final\6615
@test_case_name: Archive Unarchive  Assessment.js
@description: n/a
@test_steps:
^Assessment tab/ Action button/ Archive
-Click on Action button for an unscheduled assessment;        
-Select Archive option from the drop-down list;        
-Select Ok button to Archive the Assessment;

^Assessment tab/ Action button/ Unarchive
-Select Archived tab under Assessment tab;     
-Click on Action button for an archived assessment;        
-Select Unarchive option from the drop-down list;        
-Select Ok button to Unarchive the Assessment;

@test_data: n/a
@result: Assessment tab Action button Archive and Unarchive
*/
import { Navbar, login_username, login_password, LoginPage, InstructorPage } from '../../../../page-objects/pages/index'
describe('Instructor Area', function() {
    it('1.11.8.5 Assessment tab/ Action button/ Archive', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            InstructorPage.visitTechCourse();
            cy.get('[href="#myAssignments"]').click();
        })
            cy.get('[data-cy="action_assignment_btn"]').eq(0).click()
            cy.wait(2000);
            // cy.get('#assignment_965187 > .width90 > .dropdown > .dropdown-menu > :nth-child(5) > [data-cy=action_arun_btn]').click();
            // cy.wait(3000)
            // cy.get('[data-cy=yesbutton]').click();
    })
    
});