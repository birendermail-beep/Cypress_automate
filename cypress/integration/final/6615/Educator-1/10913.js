/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id:
@story_id: 10913
@story_name: Track Test Analytics 
@path: final/Remove/6615
@test_case_name: Track Test Analytics
@test_steps:
^More tab/Analytics/Test Analytics
-Click on More;    
-Select Analytics;     
-Click on Test Analytics;

^More tab/Analytics/Test Analytics/Best Score
-Click on More;    
-Select Analytics;     
-Click on Test Analytics;    
-Select Best Score

^More tab/Analytics/Test Analytics/Last Score
-Click on More;    
-Select Analytics;     
-Click on Test Analytics;    
-Select Last Score

^More tab/Analytics/Test Analytics/All Attempts
-Click on More;    
-Select Analytics;     
-Click on Test Analytics;    
-Select All Attempts

@test_data: 
-Click on More;    
-Select Analytics;     
-Click on Class Performance;

@result: The Best score shows up of each section students shows up
*/
import { Navbar, login_username, login_password, LoginPage, InstructorPage } from '../../../../page-objects/pages/index'
describe('Instructor Area', function() {
    beforeEach('this is login', function() {
            cy.fixture('global').then(data => {
                cy.visit(data.url)
                Navbar.clickOnLogin()
                LoginPage.loginPage(login_username, login_password)
                InstructorPage.visitTechCourse();
            })
        })
        // Track tab More tab Analytics Test Analytics
    it('Track tab More tab Analytics Test Analytics', function() {
        cy.get('[intro-id="track"] > .nav-link').click()
        cy.get('[data-cy=analytics_track_cy]').click({ force: true })
        cy.get('[data-cy=test_analytics_cy]').click({ force: true })
    })

    // Track tab More tab Analytics Test Best Score
    it('Track tab More tab Analytics Test Best Score', function() {
            //track button
            cy.get('[data-cy=track]').click({ force: true })
                //all analytics tab of dropdown
            cy.get('[data-cy=analytics_track_cy]').click({ force: true })
                //test analysis btn
            cy.get('[data-cy=test_analytics_cy]').click({ force: true })
            cy.wait(5000)
            cy.get('#score_type').select('Best Score', { force: true })
        })
        // Track tab More tab Analytics Test Last Score
    it('Track tab More tab Analytics Test Last Score', function() {
            //track button
            cy.get('[data-cy=track]').click({ force: true })
                //all analytics tab of dropdown
            cy.get('[data-cy=analytics_track_cy]').click({ force: true })
                //test analysis btn
            cy.get('[data-cy=test_analytics_cy]').click({ force: true })
            cy.wait(5000)
            cy.get('#score_type').select('Last Score', { force: true })
        })
        // Track tab More tab Analytics Test All Attempts
    it('Track tab More tab Analytics Test All Attempts', function() {
        //track button
        cy.get('[data-cy=track]').click({ force: true })
            //all analytics tab of dropdown
        cy.get('[data-cy=analytics_track_cy]').click({ force: true })
            //test analysis btn
        cy.get('[data-cy=test_analytics_cy]').click({ force: true })
        cy.wait(5000)
        cy.get('#score_type').select('All Attempts', { force: true })
    })
});