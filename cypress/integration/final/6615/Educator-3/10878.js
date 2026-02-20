/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id: 
@story_id: 10878
@story_name: Grade Scale
@path: final/6615
@test_case_name: Grade Scale.js
@description: n/a
@test_steps:
    ^Design tab/ Setting button/ Grade scale
    -On Design tab, select the Settings button;       
    -On Grade scale tab, define the required Grade scale;       
    -Click on Save button;       
    -Click on Save button on Design tab;
@test_data: n/a
@result:Design tab Setting button Grade scale.
 */
import { Navbar, login_username, login_password, LoginPage, InstructorPage } from '../../../../page-objects/pages/index'
describe('Instructor Area', function() {
    it('1.12.1.2.1 Design tab/ Setting button/ Grade scale', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            InstructorPage.visitCourseSupport()
        })
        cy.get('[intro-id="design"] > [data-cy=educator_design]').click()
        cy.get('[aria-label="Settings"]').click({ force: true })
        cy.get('.icomoon-new-24px-add-circle-1').click()
        cy.get('#new_start1').clear({ force: true }).type('21', { force: true })
        cy.get('#new_end1').clear({ force: true }).type('91', { force: true })
        cy.get('#new_grade1').clear({ force: true }).type('A', { force: true })
        cy.get('.modal-footer > #save_assessment').click({ force: true })
        cy.get('#save_assessment > .toolbar-label').click({ force: true })
    })
});