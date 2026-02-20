/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id:
@story_id: 10918
@story_name: Track Roaster 
@path: final/6615
@test_case_name: Track Roaster
@test_steps:
^Readiness Percentage
-Click on the Readiness Percentage

^Last Login
-Click on the Last Login

^Study Planner option under Action button for Students
-Click on Action button infront of the required student;         
-Select Study planner;   

^Use of 1st 'Click here' on Roster
-Click on 1st 'Click here to see the list of all sections created;        
-Select the required section;

^Use of 2nd 'Click here' on Roster
-Click on 2nd 'Click here to see the list of all Student;       

@test_data: n/a
@result: It takes to the All Students tab 
*/

import { Navbar, login_username, login_password, LoginPage, InstructorPage } from '../../../../page-objects/pages/index'
describe('Instructor Area', function() {
    beforeEach('this is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            InstructorPage.visitTestingTag()
        })
    })
    it('Readiness Percentage', function() {
        InstructorPage.visitCourseSupport()
        InstructorPage.trackRoster()
        cy.get(':nth-child(1) > .roster_header_width.text-center > .planner_preview').click()
    })
    it('Last login', function() {
        InstructorPage.trackRoster()
        cy.get('[intro-id="track"] > .nav-link').click()
        cy.get('[data-cy=roster_track_cy]').click()
        cy.get(':nth-child(1) > :nth-child(7) > nobr > .open_last_login_modal').click({ multiple: true })
    })
    it('Study Planner option under Action button for Students', function() {
        InstructorPage.trackRoster()
        cy.get(':nth-child(8) > .dropdown > .btn').eq(0).click()
        cy.get(':nth-child(8) > .dropdown > .dropdown-menu > :nth-child(7) > .dropdown-item').eq(0).click()
    })
    it('Click on 1st Click here to see the list of all sections created', function() {
        InstructorPage.trackRoster()
        cy.get('[data-cy=click_here_cy]').click()
    })
    it('Click here to see the list of all Student', function() {
        cy.get('[data-cy=track]').click()
        cy.get('[data-cy=class_list] > b').click()
    })
});