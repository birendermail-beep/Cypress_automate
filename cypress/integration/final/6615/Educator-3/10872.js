/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id:
@story_id: 10872
@story_name: Delete Assessment
@path: final\6615
@test_case_name: Delete Assessment.js
@description: n/a
@test_steps:
^Assessment tab/ Action button/ Delete
-Click on Action button for an unscheduled assessment;        
-Select Delete option from the drop-down list;        
-Select Ok button to Delete the Assessment;

@test_data: n/a
@result: Assessment tab Action button Delete
*/
import { Navbar, login_username, login_password, LoginPage, InstructorPage } from '../../../../page-objects/pages/index'
describe('Instructor Area', function() {

    it('1.11.8.7 Assessment tab/ Action button/ Delete', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            InstructorPage.visitTechCourse();
        })
        cy.get('[data-cy="action_assignment_btn"]').eq(0).click({ force: true })
        cy.get('.delete_assignment').eq(0).click({ force: true })
        cy.wait(3000)
        cy.get('#btn-cancelled').click()
        cy.get('#save_assessment > .toolbar-label').click({ force: true })
    })
});