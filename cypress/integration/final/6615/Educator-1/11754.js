/*
@author: Anirudha Pratap
@last_updated_on:2020-10-08 
@master_project_id: 6615
@phase_id: 
@story_id: 11754
@story_name: Invite & Enroll - Search using access code
@path: final/6615
@test_case_name: Invite & Enroll - Search using access code.js
@description: n/a
@test_steps:
    ^Invite tab/ Access code search option
    -Click on Invite tab;      
    -Select Access Code Search option;      
    -Enter the required Access codes;    
    -Click Search button;
@test_data: n/a
@result:Entered access code details shows up.
 */
import { Navbar, login_username, login_password, LoginPage, InstructorPage } from '../../../../page-objects/pages/index'
describe('Instructor Area', function() {
    it('1.9.3 Invite tab/ Access code search option', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            InstructorPage.visitCourseSupport()
        })
        cy.get('[aria-label="Invite"]').click({ force: true })
        cy.wait(6000)
        cy.get('#have_student_voucher').click();
        cy.get('#next_btn').click()
        cy.get('#access_codes').clear({ force: true }).type('LXAD-XUDU-STC2-LRRH', { force: true })
    })
});