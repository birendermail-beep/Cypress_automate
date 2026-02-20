/*
@author: Anirudh Pratap
@master_project_id: 6615
@phase_id: 11024
@story_id: 10997
@story_name: Delete Section
@path: final/6615
@test_case_name: Delete Section.js
@description: Delete Section
@test_steps:
^Use of 'Delete' option in List view
-Click on drop down menu;    
-Select 'Delete' option;     
-Select the required option for the students;       
-Select Delete;      

@test_data: n/a

@result: Section is deleted
*/

import { Navbar, login_username, login_password, LoginPage, InstructorPage } from '../../../../page-objects/pages/index'
describe('Instructor Area', function() {

    it('1.6.6.2 Use of Delete option in list view', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
        })
        cy.get('[data-cy=mylibrary]').click({ force: true })
        cy.get('[data-cy="searchbox"]').type('comp')
        cy.get('[crn="220-1001-220-1002"]').contains('Manage').click({ force: true })
        cy.get('.span13 > .btn-sm > .icomoon-menu-2').eq(0).click({ force: true })
        cy.get('.span13 > .dropdown-menu > :nth-child(6) > .delete_section').contains('Delete').click({ force: true })
        cy.get('#move_student_section_modal > .modal-dialog > .modal-content > .modal-footer > .btn-light').click()
    })
});