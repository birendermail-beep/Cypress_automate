/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id:
@story_id: 10915 
@story_name: Track Class Ranking Report
@path: final/Remove/6615
@test_case_name: Track Class Ranking Report
@test_steps:
^More tab/Study Planner
-Click on More;    
-Select Study Planner

@test_data: 
-Click on More;    
-Select Study Planner

@result: The Study Planner page opens up
*/

import { Navbar, login_username, login_password, LoginPage, InstructorPage } from '../../../../page-objects/pages/index'
describe('Instructor Area', function() {
    // Track tab More tab Study Planner
    it('Track tab More tab Study Planner', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            InstructorPage.visitTechCourse();
        })
        cy.get('[data-cy=track]').click()
        cy.get('[data-cy=analytics_track_cy]').click({ force: true })
        cy.get('[data-cy=study_plan_analytics_cy]').click()
    })
});