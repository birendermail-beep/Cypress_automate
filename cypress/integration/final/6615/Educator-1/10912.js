/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id:
@story_id: 10912
@story_name: Track Class Performance 
@path: final/6615
@test_case_name: Track Class Performance
@test_steps:
^More tab/Analytics/Class Performance
-Click on More;    
-Select Analytics;     
-Click on Class Performance;

@test_data: 
-Click on More;    
-Select Analytics;     
-Click on Class Performance;

@result: The Class Performance page opens up
*/
import { Navbar, login_username, login_password, LoginPage, InstructorPage } from '../../../../page-objects/pages/index'
describe('Instructor Area', function() {
    // Track tab More tab Analytics Class Performance
    it('Track tab More tab Analytics Class Performance', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            InstructorPage.visitTechCourse();
        })
        cy.get('[data-cy=track]').click()
        cy.get('[data-cy=analytics_track_cy]').click({ force: true }).click()
        cy.get('[data-cy=performance_analytics_cy]').click({ force: true })
    })
});