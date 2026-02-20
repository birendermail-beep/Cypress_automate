/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id: 
@story_id: 10897
@story_name: Edit Section Detail
@path: final/6615
@test_case_name: Edit Section Detail.js
@description: n/a
@test_steps:
^Edit a Section Tag
-Edit the Section tag of the section;       
-Click the save button

^Edit a Class Name
-Edit the Class Name of the section;       
-Click the save button

^Edit the Start date & End date of the section
-Edit the Start date & End date of the section;       
-Click the save button

^Edit the Mastery Level of the section
-Edit the Mastery Level  of the section;       
-Click the save button

^Check the use of Description option
-Type in the required description in the Description box;        
-Click the Save button;

^Check the use of Welcome option
-Select the Welcome tab;       
-Type in the required message in the Welcome box;        
-Click the Save button;

^Check the use of Announcement option
-Select the Announcement tab;       
-Click on Add anouncement button;      
-Type in the required Announement message in the Announement message box;        
-Select the required Start & End date for the Announcement;          
-Click the Save button;

@test_data: n/a
@result: The Section Tag is changed
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
    it('1.8.4.1 Check the Copy button for Section KeyEdit a Section Tag', function() {
        cy.get('#class_name').clear({ force: true }).type('abc', { force: true })
        cy.get('#save_assessment > .toolbar-label').click()
    })
    it('1.8.4.2 Edit a Class Name', function() {
        cy.get('#name').clear({ force: true }).type('abc', { force: true })
        cy.get('#save_assessment > .toolbar-label').click()
    })
    it('1.8.4.3 Edit the Start date & End date of the section', function() {
        cy.get('#class_start_date').clear({ force: true }).type('07/03/2019')
        cy.get('#class_end_date').clear({ force: true }).type('02-sep-2019', { force: true })
        cy.get('#grade_scale').click()
        cy.get('#save_assessment > .toolbar-label').click({ force: true })
    })
    it('1.8.4.4 Edit the Mastery Level of the section', function() {
        cy.get('#grade_scale').clear({ force: true }).type('190')
        cy.get('#save_assessment > .toolbar-label').click()
    })
    it('1.8.5.1 Check the use of Description option', function() {
        cy.get('#description').clear({ force: true }).type('Description written', { force: true })
        cy.get('#save_assessment > .toolbar-label').click()
    })
    it('1.8.5.2 Check the use of Welcome option', function() {
        cy.contains('Welcome Message').click({ force: true })
        cy.get('#description').clear({ force: true }).type('Welcome msg written', { force: true })
        cy.get('#save_assessment > .toolbar-label').click()
    })
    it('1.8.5.3 Check the use of Announcement option', function() {
        cy.contains('Announcement').click({ force: true })
        cy.get('.add_announcement').click({ force: true })
        cy.get('#announcement_textbox_1').clear({ force: true }).type('New Announcement', { force: true })
        cy.get('#start_date_1').clear({ force: true }).type('07/03/2019')
        cy.get('#end_date_1').clear({ force: true }).type('09/09/2019')
    })
});