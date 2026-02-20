/*
@author: Anirudh Pratap
@master_project_id: 6615
@phase_id: 11024
@story_id: 10991
@story_name: Change Password of Student
@path: final/6615
@test_case_name: Change Password of Student.js
@description: 
@test_steps:
^Change Password of Student
-Click on the Action drop-down;
-Select Change password option;
-Select 'Change Password' or 'Send Password Reset link' option;
-Reset the password/ Send password reset email; 

@test_data: n/a

@result: Password is reset
*/

import { Navbar, login_username, login_password, LoginPage, InstructorPage } from '../../../../page-objects/pages/index'
describe('Instructor Area', function() {

    it('1.7.9.4 Checking the use of Change password option', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
        })
        InstructorPage.showManage()
        cy.get('[data-cy=all_student]').click({ force: true })
        cy.wait(6000)
        cy.get(':nth-child(7) > .dropdown > .btn').eq(0).click()
        cy.get('[data-cy=profile_set]').eq(0).click()
    })
});