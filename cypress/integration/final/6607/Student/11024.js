/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id: 9327
@story_id: 11024
@story_name: Course Dashboard
@path: final/Student/6607
@test_case_name: Course Dashboard
@description: N/A
@test_steps:

^search on my library 
-Open https://ucertify.com/ 
-Login with your account
-Click on My Library and search ICT course as -test  (you can open any one)

@test_data:N/A
@result: search on my library 
*/

import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index' 
describe('ebook area testing', function() {
    //ict.dashboard1
    it('ICT courses dahboard', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
    cy.get('[data-cy="mylibrary"]').click({ force: true })
    cy.get('[data-cy="searchbox"]').type('ict')
    cy.get('[crn="ICT-spreadsheet-test"]').contains('Manage').click({ force: true })
    cy.contains('desk copy').click({ force: true })
    })
})