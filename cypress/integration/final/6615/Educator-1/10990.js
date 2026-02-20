/*
@author: Anirudh Pratap
@master_project_id: 6615
@phase_id: 11024
@story_id: 10990
@story_name: Send Message to Student
@path: final/6615
@test_case_name: Send Message to Student.js
@description: Send Message to Student
@test_steps:
^Send message option available on All Student
-Click on the Action drop-down;
-Select Send Message option;
-Type in the email;
-Click on Send button;

@test_data: n/a

@result: Email is sent
*/

import { Navbar, login_username, login_password, LoginPage, InstructorPage } from '../../../../page-objects/pages/index'
describe('Instructor Area', function() {
    it('1.7.9.3 Checking the use of Send Message option', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
        })
        InstructorPage.showManage()
        cy.get('[data-cy=all_student]').click({ force: true })
        cy.wait(6000)
        cy.get(':nth-child(7) > .dropdown > .btn').eq(0).click()
        cy.get('[data-cy=send_message]').eq(0).click()
        cy.wait(6000)
        cy.get('#send_preview_email').click()
        ''
    })
});