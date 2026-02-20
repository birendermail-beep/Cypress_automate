/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id: 
@story_id: 10881
@story_name: Gradebook Settings
@path: final/6615
@test_case_name: Gradebook Settings.js
@description: n/a
@test_steps:
^Design tab/ Setting button/ Grade book settings/ Show gradebook
-On Design tab, select the Settings button;       
-On Gradebook setting tab, switch ON or OFF the Show gradebook button;       
-Click on Save button;       
-Click on Save button on Design tab;

^Design tab/ Setting button/ Grade book settings/ Visible to students
-On Design tab, select the Settings button;       
-On Gradebook setting tab, switch ON or OFF the Visible to Students button;       
-Click on Save button;       
-Click on Save button on Design tab;

^Design tab/ Setting button/ Grade book settings/ Sequence
-On Design tab, select the Settings button;       
-On Sequence tab, arrange the sequence of the components;       
-Click on Save button;       
-Click on Save button on Design tab;

@test_data: n/a
@result: Design tab Setting button Grade book settings Show gradebook.
 */

import { Navbar, login_username, login_password, LoginPage, InstructorPage } from '../../../../page-objects/pages/index'
describe('Instructor Area', function() {
    beforeEach('this is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            InstructorPage.visitCourseSupport()
            cy.get('[intro-id="design"] > [data-cy=educator_design]').click()
        })
    })
    it('1.12.1.2.2 Design tab/ Setting button/ Grade book settings/ Show gradebook', function() {
        cy.get('[aria-label="Settings"]').click({ force: true })
        cy.get('.clearfix > .nav > :nth-child(2) > .nav-link').click({ force: true })
        cy.get('.modal-footer > #save_assessment').click()
        cy.get('#save_assessment > .toolbar-label').click({ force: true })
    })
    it('1.12.1.2.4 Design tab/ Setting button/ Grade book settings/ Sequence', function() {
        cy.get('[aria-label="Settings"]').click({ force: true })
        cy.get('.clearfix > .nav > :nth-child(3) > .nav-link').click({ force: true })
        cy.get('.modal-footer > #save_assessment').click()
    })
    it('1.12.1.2.3 Design tab/ Setting button/ Grade book settings/ Visible to students', function() {
        cy.get('[aria-label="Settings"]').click({ force: true })
        cy.get('.clearfix > .nav > :nth-child(2) > .nav-link').click({ force: true })
        cy.get(':nth-child(2) > :nth-child(2) > .ios-switch-label > .switchery').click({ force: true })
        cy.get('.modal-footer > #save_assessment').click()
        cy.get('#save_assessment > .toolbar-label').click({ force: true })
    })
});