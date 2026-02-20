/*
@author: Sundaram Tripathi
@master_project_id: 6615
@phase_id: 
@story_id: 15120
@story_name: educator_edit_resource
@path: final/Dump_Test_Automation
@Test_Case_Name: educator_edit_resource.js
@description: Go to the resorce tab and open open the educator resource modal
@test_steps: 
^Test case of educator edit resource
- visit on website
- Go to the Library
- Choose any course
- Click on the "Manage" button then click on the "Instructor Tools" button.
- Click to the "Resource" tab.
- Go to the "Student Resource".
- Click on the action icon button and choose "Delete" option.
@test_data: LO CompTIA A+ : A Comprehensive Approach - Exams 220-901 & 220-902 (Course & Lab)
@result: 
- Successfully open the modal box.
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('Educator Area', function() {

    it('Resource tab open edit box', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/educator/?func=class_edit&u_course_code=02pzx.05qrv');
        })
        cy.get('[data-cy=resources] > .nav-link').click({ force: true });
        cy.contains('Student Resource').should('exist');
        cy.get(':nth-child(1) > :nth-child(3) > .dropdown > .btn').click();
        cy.wait(4000);
        cy.contains('Delete').click();
        cy.get('.sweet-alert').should('exist');
        //incomplete (need to ask)
        // cy.get(':nth-child(1) > :nth-child(3) > .dropdown > .btn').click({ force: true });
        // cy.get(':nth-child(1) > :nth-child(3) > .dropdown > .dropdown-menu > .edit_resource > .open_edit_resource_modal').click({ force: true });
    })
})