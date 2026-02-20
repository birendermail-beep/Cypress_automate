/*
@author: Anirudha Pratap
@last_updated_on:2020-10-08 
@master_project_id: 6615
@phase_id: 
@story_id: 10884
@story_name: Test Setup
@path: final/6615
@test_case_name: Test Setup.js
@description: n/a
@test_steps:
^Design tab/ Action button/ Test Setup/ Duration
-On Design tab, click on Action button for the required component;         -
-Check the Duration checkbox & type the required duration;         
-Click on OK button & click on Save button;

^Design tab/ Action button/ Test Setup/ Test mode
-On Design tab, click on Action button for the required component;         
-Check the Test Mode checkbox;        
-Select the required mode;       
-Click on OK button & click on Save button;

^Design tab/ Action button/ Test Setup/ Randomize Items
-On Design tab, click on Action button for the required component;         
-Check/Uncheck the Randomize Items option;         
-Click on OK button & click on Save button;

^Design tab/ Action button/ Test Setup/ Randomize Options
-On Design tab, click on Action button for the required component;         
-Check/Uncheck the Randomize Options option;         
-Click on OK button & click on Save button;

^Design tab/ Action button/ Test Setup/ Pausing allowed
-On Design tab, click on Action button for the required component;         
-Check/Uncheck the Pausing allowed option;         
-Click on OK button & click on Save button;

^Design tab/ Action button/ Test Setup/ Set last option as 'None of the above'
-On Design tab, click on Action button for the required component;         
-Check/Uncheck the Set last option as 'None of the above' option;         
-Click on OK button & click on Save button;

^Design tab/ Action button/ Test Setup/ Tries allowed
-On Design tab, click on Action button for the required component;         
-Set up the No. of Tries;       
-Click on OK button & click on Save button;

^Design tab/ Action button/ Test Setup/ Grader
-On Design tab, click on Action button for the required component;         
-Set up the Grader;       
-Click on OK button & click on Save button;

^Design tab/ Action button/ Test Setup/ Lock Test settings
-On Design tab, click on Action button for the required component;        
-Select the Test mode & Check/uncheck Lock Test settings option;       
-Click on OK button & click on Save button;

@test_data: n/a
@result: Component time duration is as per the setting
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
            cy.wait(3000);
            cy.get('#settting_t_-4').click()
            cy.wait(2000);
            cy.get('#test_setup-tab').click({ force: true })
            cy.wait(5000)
        })
    })
    it('1.12.2.4.1 Design tab/ Action button/ Test Setup/ Duration', function() {
        cy.get('#for_ta').click({ force: true })
        cy.get('#time_allowed').clear({ force: true }).type('30', { force: true })
        cy.get('#modal_to_settings').click({ force: true })
        cy.get('#save_assessment > .toolbar-label').click({ force: true })
    })
    it('1.12.2.4.7 Design tab/ Action button/ Test Setup/ Tries allowed', function() {
        cy.get('#tries_allowed').select('5', { force: true })
        cy.get('#modal_to_settings').click({ force: true })
        cy.get('#save_assessment > .toolbar-label').click({ force: true })
    })
    it('1.12.2.4.3 Design tab/ Action button/ Test Setup/ Randomize Items', function() {
        cy.get('#modal_to_settings').click({ force: true })
        cy.get('#save_assessment > .toolbar-label').click({ force: true })
    })
    it('1.12.2.4.4 Design tab/ Action button/ Test Setup/ Randomize Options', function() {
        cy.get('[for="for_ro"] > div').click({ force: true })
        cy.get('#modal_to_settings').click({ force: true })
        cy.get('#save_assessment > .toolbar-label').click({ force: true })
    })
    it('1.12.2.4.5 Design tab/ Action button/ Test Setup/ Pausing option', function() {
        cy.get('[for="for_cp"] > div').click()
        cy.get('#modal_to_settings').click({ force: true })
        cy.get('#save_assessment > .toolbar-label').click({ force: true })
    })
    it('1.12.2.4.6 Design tab/ Action button/ Test Setup/ Set last option as None of the above', function() {
        cy.get('[for="for_ri"] > div').click({ force: true })
        cy.get('[for="for_ro"] > div').click({ force: true })
        cy.get('[for="for_na"] > div').click()
        cy.get('#modal_to_settings').click()
        cy.get('#save_assessment > .toolbar-label').click({ force: true })
    })
    it('1.12.2.4.8 Design tab/ Action button/ Test Setup/ Grader', function() {
        cy.get('#grader_check').click()
        cy.get('#modal_to_settings').click()
        cy.get('#save_assessment > .toolbar-label').click({ force: true })
    })
    it('1.12.2.4.9 Design tab/ Action button/ Test Setup/ Lock Test settings', function() {
        cy.get('#for_test_mode').click()
        cy.get('#modal_to_settings').click()
        cy.get('#save_assessment > .toolbar-label').click({ force: true })
    })
});