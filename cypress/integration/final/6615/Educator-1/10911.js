/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id:
@story_id: 10911
@story_name: Track Competency 
@path: final/6615
@test_case_name: Track Competency
@test_steps:
^More tab/Analytics/Competency
-Click on More;    
-Select Analytics;     
-Click on Competency;

@test_data: 
-Click on More;    
-Select Analytics;     
-Click on Competency;

@result: The Competency page opens up
*/

import { Navbar, login_username, login_password, LoginPage, InstructorPage } from '../../../../page-objects/pages/index'
describe('Instructor Area', function() {
    // Track tab More tab Analytics Competency
    it('Track tab More tab Analytics Competency', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            InstructorPage.visitTechCourse();
        })
        cy.get('[data-cy=track]').click()
        cy.get('[data-cy=analytics_track_cy]').click({ force: true }).click()
        cy.get('[data-cy=competency_analytics_cy]').click({ force: true })
    })
});