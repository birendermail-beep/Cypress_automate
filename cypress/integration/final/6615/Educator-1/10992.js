/*
@author: Anirudh Pratap
@master_project_id: 6615
@phase_id: 11024
@story_id: 10992
@story_name: Delete Student
@path: final/6615
@test_case_name: Delete Student.js
@description: Delete Student
@test_steps:
^Checking the use of Remove Student option
-Click on the Action drop-down;
-Select Remove Student option;
-Select 'Change Password' or 'Send Password Reset link' option;
-Reset the password/ Send password reset email; 

@test_data: n/a

@result: Student is removed from the section
*/

import { Navbar, login_username, login_password, LoginPage, InstructorPage } from '../../../../page-objects/pages/index'
describe('Instructor Area', function() {

    it('1.7.9.5 Checking the use of Remove Student option', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
        })
        InstructorPage.showManage()
        cy.get('[data-cy=all_student]').click({ force: true })
        cy.wait(6000)
        cy.get(':nth-child(7) > .dropdown > .btn').eq(0).click()
            //this is for removing
            //cy.get('.dropdown-menu.dropdown-menu-right.show > li').eq(4).click()
        cy.wait(6000)
    })
});