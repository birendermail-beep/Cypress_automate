/*
@author: Anirudha Pratap 
@master_project_id: 6607
@phase_id:
@story_id: 14864
@story_name: bulk import table
@path: final/6607/Student	
@test_case_name: bulk import table	
@description: Opening the pe-bulk-table_new page.	
@test_steps:

^bulk import table	
-visit the website	
-login into page	
-Fill the email data.url	
-click on the login button.	
-Go to library
-Open any course
-Go to instructor area
-Click on Invite tab	
-Click on the bulk import button.	
-Fill the values.	
-Click on the Import button	

@test_data:n/a	
@result: Opening the pe-bulk-table_new page.	
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('bulk table page', function() {

    it('Opening the bulk table page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/?func=load_course&course=LO-Aplus-complete&class_code=05qrv')
        })
        cy.get('[data-cy=manage_as_instructor]').click()
        cy.get('[data-cy=invite]').click()
        cy.get('#have_student_voucher').click();
        cy.get('#next_btn').click()
        cy.fixture('global').then(data => {
            cy.get('.px-3 > .tab_radio > :nth-child(2) > .form-check-label').click().then(() => {
                cy.get('#multiple_email').clear().type(data.auditor_email[0] + ",ankit,yadav,,XCXL-KEUW-PDXN-CEBC");
            })
        })
        cy.get("#parse_bulk").click();
    })
})