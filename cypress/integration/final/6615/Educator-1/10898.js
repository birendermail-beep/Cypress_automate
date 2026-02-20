/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id: 
@story_id: 10898
@story_name: Add Teaching Assistant
@path: final/6615
@test_case_name: Add Teaching Assistant.js
@description: n/a
@test_steps:

^Check the use of Teaching Assistants option
-Click on 'Add new' button for Teaching assistants;               
-Enter the Email address and First & Last name;             
-Select the role as 'Teacher' or 'Teaching assistants';                
-Click on Save button; 

@test_data: n/a
@result: Teacher or Teaching assistant is added;
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('Instructor Area', function() {
    it('1.8.5.4 Check the use of Teaching Assistants option', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/?func=get_course_list&show=courses')
            cy.get('button').contains('Manage').click({ force: true })
            cy.visit(data.url + '/educator/?func=class_edit&u_course_code=060kT.06AR7')
        })
        cy.get('#resource_add_new').click({ force: true })
        cy.get('#email').clear({ force: true }).type('abcd@gmail.com', { force: true })
        cy.get('#user_status').select('Teaching assistants', { force: true })
        cy.get('#save_resource > .s3').click()
    })
});