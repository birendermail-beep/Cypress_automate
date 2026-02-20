/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id:
@story_id: 10890
@story_name: Invite & Enroll - Enroll as a Student
@path: final\6615
@test_case_name: Invite & Enroll - Enroll as a Student.js
@description: n/a
@test_steps:
^Invite tab/ Enroll option/Enroll as a Student
-Select Invite tab;      
-Select Enroll from the drop-down;        
-Select 'Enroll as a Student' option;      
-Give the Student email, password, First name & Last name;        
-Enter the Access code;     
-Select instructor & section;    
-Click on Submit button;

@test_data: n/a
@result: Invite & Enroll - Enroll as a Student
*/
import { Navbar, login_username, login_password, LoginPage, InstructorPage } from '../../../../page-objects/pages/index'
describe('Instructor Area', function() {
    it('1.9.2.1 Invite tab/ Enroll option/Enroll as a Student', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            InstructorPage.visitTestingTag()
        })
        cy.get('[data-cy=invite]').click({ force: true })
        cy.get('#have_student_voucher').click()
        cy.get('#next_btn').click()
        cy.get('#students_email').clear({ force: true }).type('abc@gmail.com', { force: true })
        cy.get('#set_password').clear({ force: true }).type('1234', { force: true })
        cy.get('.enrollment_send_email > .custom_checkbox_new > .check_mark_custom').click()
        cy.get('#enroll_to_section').click()
    })
});