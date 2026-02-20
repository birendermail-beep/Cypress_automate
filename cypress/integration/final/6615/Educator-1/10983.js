/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id: 
@story_id: 10983
@story_name: Show All Students
@path: final/6615
@test_case_name: Show All Students
@description: n/a
@test_steps:
^Check the option of "to view all students across all sections."
-1. Click on the option of "to view all students across all sections."

^Check the option of "All Tags" on 'All Students" tab
-Click the "All Tags" drop-down;       
-Select the required tag; 

@test_data:N/A
@result: Check the option of "to view all students across all sections."
*/

import { Navbar, login_username, login_password, LoginPage, InstructorPage } from '../../../../page-objects/pages/index'
describe('Instructor Area', function() {
    beforeEach('this is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            InstructorPage.showManage()
        })
    })
    it('1.7.4 Check the option of "to view all students across all sections."', function() {
        cy.get('[data-cy=all_student]').click({ force: true })
        cy.wait(5000)
        cy.get('.mt-xl > .btn').click({ force: true })
    })
    it('1.7.5 Check the option of "All Tags" on All Students" tab', function() {
        cy.get('[data-cy=all_student]').click({ force: true })
        cy.wait(6000)
        cy.get('[data-cy=student_across_section_cy]').click()
    })
});