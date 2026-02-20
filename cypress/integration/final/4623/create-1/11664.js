/*
@author: Anirudh Pratap
@master_project_id: 4623
@phase_id: 10518
@story_id: 
@story_name: Using Grammarly
@path: final/Create
@test_case_name: Using Grammarly.js
@description: 
@test_steps: 
^Using this we can export the cartridge for LMS
-Firstly we need to go to "My Library".
-Then click on "My Projects".
-Click on "Author> Project Set Up".
-Then click on "Export > Export QTI Document".
-Then open a modal, select "Test | Assignment | Chapter | Custom Guid".
-Finally, click on "Export QTI" buttom.
-Then file is downloaded in zip.

@test_data: Grammarly extension must be installed.
@result: File downloaded successfully.
*/
import { Navbar, login_username, login_password, LoginPage, CreateArea } from '../../../../page-objects/pages/index'
describe('Create Area', () => {
    beforeEach('This is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        CreateArea.openLibrary()
        CreateArea.myProject()
        CreateArea.projectSetup() 
    })
    it('Project Setup', () => {
        cy.get('[data-cy="testset"]').click({ force: true })
        cy.get('[data-cy="posttest"]').click({ force: true })
        cy.get('[data-cy="testset"]').click({ force: true })
        cy.get('#save_btn').click()
        cy.get('[data-cy=yesbutton]').click()
        cy.wait(5000)
        cy.get('[data-cy="testset"]').click({ force: true })
        cy.get('[data-cy="posttest"]').click({ force: true })
        cy.get('[data-cy="testset"]').click({ force: true })
        cy.wait(5000)
        cy.get('#save_btn').click()
        cy.wait(5000)
        cy.get('[data-cy=yesbutton]').click()
    })
    it('Export QTI', () => {
        cy.get('[data-original-title="Plan"]').click()
        cy.get('[data-original-title="Export"]').click({ force: true })
        cy.get('#create_tool_form > .dropdown-menu > li > .dropdown-item').click()
    })
})