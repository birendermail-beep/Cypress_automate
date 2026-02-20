/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id:
@story_id: 10863
@story_name: Filter Assessment
@path: final\6615
@test_case_name: Filter Assessment.js
@description: n/a
@test_steps:
^Assessment tab/ All Assessment filter
-Click on All assessment filter

^Assessment tab/ My Assessment filter
-Click on My assessment filter

^Assessment tab/ Scheduled Assessment filter
-Click on Scheduled assessment filter

@test_data: n/a
@result: open the Assessment tab open
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
    it('1.11.7.1 Assessment tab/ All Assessment filter', function() {
        cy.get('#btnAll').click({ force: true })
    })
    it('1.11.7.3 Assessment tab/ Scheduled Assessment filter', function() {
        //setting icon click
        cy.get('[href="#myAssignments"]').click();
        cy.get('#settting_a_965187').click()
    })
    it('1.11.7.2 Assessment tab/ My Assessment filter', function() {
        cy.get('#assignment_965187 > .width90').click({ force: true });
    })
});