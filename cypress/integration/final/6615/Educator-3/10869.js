/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id:
@story_id: 10869
@story_name: Preview Assessment
@path: final\6615
@test_case_name: Preview Assessment.js
@description: n/a
@test_steps:
^Assessment tab/ Action button/ Preview Assessment
-Click on Action button for an unscheduled assessment;        
-Select Preview Assessment option from the drop-down list;        
-Select Start button to attempt the Assessment as student OR preview to preview it with complete remidiation;

@test_data: n/a
@result: Assessment tab Action button Preview Assessment
*/
import { Navbar, login_username, login_password, LoginPage, InstructorPage } from '../../../../page-objects/pages/index'
describe('Instructor Area', function() {
    it('1.11.8.4 Assessment tab/ Action button/ Preview Assessment', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            InstructorPage.visitTechCourse();
        })
        cy.get('[data-cy="action_assignment_btn"]').eq(0).click({ force: true })
        cy.get('[data-cy=action_preview_btn]').eq(0).click({ force: true })
        cy.wait(3000)
        cy.get('[data-cy="preview"]').click()
        if(cy.get('#open_test_session').should('contain','Continue with the test session')){
            cy.get('#continue_test').click();
        }
        // cy.get('[data-cy=practice_tests]').click();
        // cy.get(3000);
        // cy.get(':nth-child(1) > .test-inner-container > [data-cy=test_tests] > .test-info > .test-info-front > .position-absolute').click();
        // cy.wait(4000);
        // cy.get('[data-cy=test_mode]').click();
        // cy.get('#show_result').click();
        cy.get('#show_result').click({ force: true })
        // cy.wait(3000)
        //cy.get('[data-cy=confirmmodal]').contains('End').click({ force: true })
        // cy.get('#filters-action > :nth-child(1)').should('contain','Result');
    })
});