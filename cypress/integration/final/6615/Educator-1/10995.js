/*
@author: Anirudh Pratap
@master_project_id: 6615
@phase_id: 11024
@story_id: 10995
@story_name: Share Section
@path: final/6615
@test_case_name: Share Section.js
@description: Share Section
@test_steps:
^Use of 'Share' option in List view
-Click on drop down menu;    
-Select 'Share' option;     
-Enter the Email, Salutation, First Name & Last Name;       
-Click the 'Share' button;

@test_data: n/a


@result: Section is shared with the required person and is added as a teacher to the shared Section;
*/

import { Navbar, login_username, login_password, LoginPage, InstructorPage } from '../../../../page-objects/pages/index'
describe('Instructor Area', function() {

    it('1.6.4.1 Use of Share option in list view', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/?func=get_course_list&show=courses')
        })
        cy.get('button').contains('Manage').click({ force: true })
        cy.get(':nth-child(1) > .clearfix > .px-0 > .icomoon-menu-2').click({ force: true })
        cy.get('.clearfix > .dropdown-menu > :nth-child(3) > .share_section').contains("Share").click({ force: true })
        cy.get('#user_email').clear().type('abc@gmail.com')
        cy.get('#user_salutation').select('Mr.', { force: true })
        cy.get('#modal-share_with > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click({ force: true })
    })
});