/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id:
@story_id: 10916
@story_name: Track Practice
@path: final/6615
@test_case_name: Track Practice
@test_steps:
^Practice tab
-Click on Practice tab

@test_data: n/a 
@result: Students score for Assessments shows up
*/
import { Navbar, login_username, login_password, LoginPage, InstructorPage } from '../../../../page-objects/pages/index'
describe('Instructor Area', function() {
    // Track tab Practice tab
    it('Track tab Practice tab', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            InstructorPage.visitTechCourse();
        })
        cy.get('[data-cy=track]').click()
        cy.get('[aria-label="Practice"] > .ml-sm').click()
    })
});