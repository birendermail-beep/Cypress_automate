/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id:
@story_id: 10888
@story_name: Invite & Enroll - Bulk Upload
@path: final\6615
@test_case_name: Invite & Enroll - Bulk Upload.js
@description: n/a
@test_steps:
^Use of Bulk upload option
-Enter the students details as per the Format;      
-Click on the Verify button;     
-Select the students;      
-Click on Enroll Selected button;      
-Check the Students status & Click the action button;        
-Select Invite / Invitation history option;

@test_data: n/a
@result: Use of Bulk upload option
*/
import { Navbar, login_username, login_password, LoginPage, InstructorPage } from '../../../../page-objects/pages/index'
describe('Instructor Area', function() {
    it('1.9.2.2 Invite tab/ Enroll option/Multiple Enroll', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            InstructorPage.visitTestingTag()
        })
        cy.get('[data-cy=invite]').click({ force: true })
        cy.get('#have_student_voucher').click()
        cy.get('#next_btn').click()
        cy.get('#enroll_as_multiple').click({ force: true })
        cy.fixture('global').then(data => {
            cy.get('#multiple_email').clear({ force: true }).type(data.auditor_email[0] + ',sundram,tripathi', { force: true })
        })
        cy.get('#parse_bulk').click()
    })
});