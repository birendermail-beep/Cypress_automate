/*
@author: Anirudh Pratap
@master_project_id: 4623
@phase_id: 10997
@story_id: 
@story_name: Embedded Assets Diagnostic
@path: final/Create
@test_case_name: Embedded Assets Diagnostic.js
@description: 
@test_steps:
^Basic Page
-Open module https://www.ucertify.com/ext/content_diagnostic/
-select course as Diagnostic testing.
-Click on Exam objectives Diagnostic  option open button.
-A new page will open.

^Advanced Error page
-Click on advanced button in top right part
-Advanced errors page will open

^Detailed page
-Click on detailed button in top right part
-Detailed page will open

@test_data: n/a
@result: Exam objectives diagnostic basic page will open
*/
import { Navbar, login_username, login_password, LoginPage, CreateArea } from '../../../../page-objects/pages/index'
describe('Create Area', () => {
    it('Exam Objective', () => {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        CreateArea.openLibrary()
        CreateArea.myProjectPHP()
        cy.get('.settingup').click()
        cy.get(':nth-child(4) > .btn').click()
        cy.get(':nth-child(5) > .span1 > [data-cy=open]').click()
    })
})