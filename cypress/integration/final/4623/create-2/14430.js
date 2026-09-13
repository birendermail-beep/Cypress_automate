/*
@author: Ankit Kumar
@master_project_id: 4623
@phase_id: NA
@story_id: NA
@story_name: Create Dashboard
@path: final/Create
@test_case_name: Create Dashboard
@description: Checking the functionality of create dashboard.
@test_steps: 

^Help Videos
-Click on My Library after logging in your account
-Click on My Projects tab given in tab bar.
-Click on the Author button of the specified project.
-Click on Help Videos dropdown.
-Click on desired link 

^Project Setup
-Click on My Library after logging in your account
-Click on My Projects tab given in tab bar.
-Click on the Author button of the specified project.
-Click Project Setup

^Knowledge Domains
-Click on My Library after logging in your account
-Click on My Projects tab given in tab bar.
-Click on the Author button of the specified project.
-Click Knowledge Domains

^Item Bank
-Click on My Library after logging in your account
-Click on My Projects tab given in tab bar.
-Click on the Author button of the specified project.
-Click Item Bank

^Assessment
-Click on My Library after logging in your account
-Click on My Projects tab given in tab bar.
-Click on the Author button of the specified project.
-Click Assessment

^Design
-Click on My Library after logging in your account
-Click on My Projects tab given in tab bar.
-Click on the Author button of the specified project.
-Click Design

^Resources
-Click on My Library after logging in your account
-Click on My Projects tab given in tab bar.
-Click on the Author button of the specified project.
-Click Resources

^Exam Objectives
-Click on My Library after logging in your account
-Click on My Projects tab given in tab bar.
-Click on the Author button of the specified project.
-Click Exam Objective

^Content Diagnostic
-Click on My Library after logging in your account
-Click on My Projects tab given in tab bar.
-Click on the Author button of the specified project.
-Click Content Diagnostic


^Todo List
-Click on My Library after logging in your account
-Click on My Projects tab given in tab bar.
-Click on the Author button of the specified project.
-Click Todo List

^Student View
-Click on My Library after logging in your account
-Click on My Projects tab given in tab bar.
-Click on the Author button of the specified project.
-Click Student View

@test_data:
- Clicked Link: Project Setup
- Clicked Link: Project Setup
- Clicked Link: Knowledge Domains
- Clicked Link: Item Bank
- Clicked Link: Assessment
- Clicked Link: Design
- Clicked Link: Resources
- Clicked Link: Exam Objective
- Clicked Link: Content Diagnostic
- Clicked Link: Todo List
- Clicked Link: Student View
@result: Checking the functionality of create dashboard.
 */
import { Navbar, login_username, login_password, LoginPage, CreateArea } from '../../../../page-objects/pages/index'
describe('Create Area', () => {
    beforeEach('This is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        CreateArea.openLibrary()
        CreateArea.myProject()
    })
    it('Project Setup', () => {
        CreateArea.projectSetup();
        cy.get('#course_name').should('exist');
    })
    it('Item Bank', () => {
        CreateArea.itemBank();
    })
    it('Assessment', () => {
        CreateArea.examObjective()
        cy.get('.assesment_accordian > .card > .card-header').click();
    })
    it('Design', () => {
        CreateArea.design()
    })
    it('Resources', () => {
        CreateArea.examObjective()
        cy.get('.resources_accordian > .card > .card-header').click({force:true})
        cy.get('[chap_guid="instructor"] > .flex-parent').should('exist');
        cy.get('[chap_guid="student"] > .flex-parent').should('exist');
    })
    it('Exam Objective', () => {
        CreateArea.examObjective()
        cy.get('.tags_accordian > .card > .card-header').click({force:true});
        cy.contains('Exam Objective').should('exist');
    })
    it('Content Diagnostic', () => {
        CreateArea.contentDiagnosticOpen()
        cy.get('.container-fluid > .p').should('exist');
    })
    it('Student View', () => {
        CreateArea.studentView()
        cy.get('[data-cy=studyplanner]').click()
        Cypress.on('uncaught:exception', () => {
            return false;
        })
    })
})