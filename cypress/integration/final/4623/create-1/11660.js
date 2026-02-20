/*
@author: Anirudh Pratap
@master_project_id: 4623
@phase_id: 10518
@story_id: 
@story_name: Import QTI
@path: final/Create
@test_case_name: Import QTI.js
@description: 
@test_steps: 
^Import QTI questions
-Firstly we need to go to "My Library".
-Then click on "My Projects".
-Click on "Author> Project Setup".
-Then right side click on "Export" tab.
-Then click on "Export QTI document".
-Then open a modal, need to chosse according to your requirement.
-Finally, click on "D2l Export | Zip Export | Export" button.

@test_data: n/a
@result: Successfully download file.
*/
import { Navbar, login_username, login_password, LoginPage, CreateArea } from '../../../../page-objects/pages/index'
describe('Create Area', () => {
    it('Export Zip File', () => {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        CreateArea.openLibrary()
        CreateArea.myProject()
        CreateArea.projectSetup()
        cy.get('[data-original-title="Plan"]').click()
        cy.get('[data-original-title="Export"]').click({ force: true })
        cy.get('#create_tool_form > .dropdown-menu > li > .dropdown-item').click()
    })
})