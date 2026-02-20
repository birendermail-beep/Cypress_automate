/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id: 
@story_id: 15371
@story_name: Inbox Tab
@path: final/6607/Student
@test_case_name: Inbox Tab
@test_steps:

^Inbox Tab
-visit the website
-Login into website
-Click on My Library
-click on Inbox Tab
-if message show then click on Any one row
-show a modal box

@test_data: n/a
@result: Dashboard of Student Area
*/
import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
describe('ebook area testing', function() {
    it('Inbox Tab', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        cy.get('[data-cy=mylibrary]').click()
        cy.get('[data-cy=inbox]').click()
        cy.get('#inbox_table').should('be.visible')
        cy.contains('Enrollment: uCertify TestKit').click()
        cy.get('#view_email_modal').should('be.visible')
    })
})