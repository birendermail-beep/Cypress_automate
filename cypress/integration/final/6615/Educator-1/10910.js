/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id:
@story_id: 10910
@story_name: Track Activities 
@path: final/6615
@test_case_name: Track Activities
@test_steps:
^More tab/Activities
-Click on More tab;    
-Select Activities from the drop-down; 

^More tab/Activities/Search Test option
-Type in the required Test name

^More tab/Activities/Select Test Mode filter
-Select the required Test mode 

^More tab/Activities/Select Test Type filter
-Select the required Test Type

@test_data: n/a
@result: The selected Test Type test details shows up
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
        // Track tab More tab Activities
    it('Track tab More tab Activities', function() {
            cy.get('[intro-id="track"] > .nav-link').click()
            cy.get('[data-cy=analytics_track_cy]').click({ force: true })
            cy.get('[data-cy=activities_analytics_cy]').click({ force: true })
        })
        // Track tab More tab Activities Search Test option
    it('Track tab More tab Activities Search Test option', function() {
            //track button
            cy.get('[data-cy=track]').click({ force: true })
                //all analytics tab of dropdown
            cy.get('[data-cy=analytics_track_cy]').click({ force: true })
                //activities btn
            cy.get('[data-cy=activities_analytics_cy]').click({ force: true })
            cy.wait(5000)
            cy.get('.history_search_panel > :nth-child(1) > .input-group > #search').type('Lab', { force: true })
        })
        // Track tab More tab Activities Select Test Mode filter
    it('Track tab More tab Activities Select Test Mode filter', function() {
            //track button
            cy.get('[data-cy=track]').click({ force: true })
                //all analytics tab of dropdown
            cy.get('[data-cy=analytics_track_cy]').click({ force: true })
                //activities btn
            cy.get('[data-cy=activities_analytics_cy]').click({ force: true })
            cy.wait(5000)
            cy.get("#test_mode_select").select('Test Mode', { force: true })
        })
        // Track tab More tab Activities Select Test Type filter
    it('Track tab More tab Activities Select Test Type filter', function() {
        //track button
        cy.get('[data-cy=track]').click({ force: true })
            //all analytics tab of dropdown
        cy.get('[data-cy=analytics_track_cy]').click({ force: true })
            //activities btn
        cy.get('[data-cy=activities_analytics_cy]').click({ force: true })
        cy.wait(5000)
        cy.get("#test_type_select").select('Lab', { force: true })
    })
});