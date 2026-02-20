/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id:
@story_id: 11760
@story_name: Track Prepengine - Table View
@path: final/6615
@test_case_name: Track Prepengine - Table View
@test_steps:
^Prepengine tab in Table view
-Click on Prepengine tab;     
-Select Table view;   

@test_data:
-Click on Prepengine tab;     
-Select Table view;   

@result: The Outcome for each testcases shows up
*/
import { Navbar, login_username, login_password, LoginPage, InstructorPage } from '../../../../page-objects/pages/index'
describe('Instructor Area', function() {
    it('Check the Prepengine tab', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            InstructorPage.visitTechCourse();
        })

        cy.get('[intro-id="track"] > .nav-link').click()
        cy.get('[data-cy=prepengine_cy]').click()
        cy.get('[data-cy=prepengine_table_view_cy]').click()
    })
});