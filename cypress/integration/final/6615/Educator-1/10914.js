/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id:
@story_id: 10914
@story_name: Track Class Ranking Report
@path: final/Remove/6615
@test_case_name: Track Class Ranking Report
@test_steps:
^More tab/Class Ranking report
-Click on More;    
-Select Class Ranking report

@test_data: 
-Click on More;    
-Select Class Ranking report

@result: The Best score shows up of each section students shows up
*/
import { Navbar, login_username, login_password, LoginPage, InstructorPage } from '../../../../page-objects/pages/index'
describe('Instructor Area', function() {
    // Track tab More tab Class Ranking report
    it('Track tab More tab Class Ranking report', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            InstructorPage.visitTechCourse();
        })
        cy.get('[data-cy=track]').click()
        cy.get('[data-cy=analytics_track_cy]').click({ force: true })
        cy.get('[data-cy=class_ranking_analytics_cy]').click()
    })
});