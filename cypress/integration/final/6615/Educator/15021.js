/*
@author: Anurag Chaurasia
@master_project_id: 6615
@phase_id : 10148
@story_id: 15021
@story_name: Educator Student Lecture planner
@path: final/Educator
@test_case_name: educator_student_lecture_planner.js
@description : Educator Student Lecture planner
@test_steps:
^test case of Educator Student Lecture planner
- Login In ucertify portal
- Go to my library
- select a course 
- open this course and go to instructor tool
- Switch to design tab
- select lecture plan
- open a lacture plan 
- click on add (plus) button
- modal box to add lecture will be shown

@test_data: Login credential

@result: modal box to add lecture will be shown
*/


import { Navbar, login_username, login_password, LoginPage, InstructorPage } from '../../../../page-objects/pages/index'
describe('Educator Student Lecture planner', function() {
    it('Educator Student Lecture planner', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            InstructorPage.visitEducatorDashboard(data.url);
            cy.get('[data-cy="educator_design"]').click();
            cy.get('[data-cy="lecture_plan"]').click({ force: true });
        })
    })
})