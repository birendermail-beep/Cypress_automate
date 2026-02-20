/*
@author: Anirudh Pratap
@master_project_id: 4623
@phase_id: 10660
@story_id: 
@story_name: Project Setup
@path: final/Create
@test_case_name: Project Setup.js
@description: 
@test_steps: 
^Using this we can hide the tabs.
-Firstly we need to go to "My Library".
-Then click on "My Projects".
-Click on "Author> Project SetUp".
-Hide "Export" tab and "Content Diadognostic" for external user.

^Using this we can delete stage.
-Firstly we need to go to "My Library".
-Then click on "My Projects".
-Click on "Author> Project SetUp".
-Then click on"Delete Stage" button.
-Then click on bottom bar "Save" option.
Note: -Min 1 stage are mandatory.
-if stage is using in member table then can't be deleted.

^Using this we can add stage and update stage name.
-Firstly we need to go to "My Library".
-Then click on "My Projects".
-Click on "Author> Project SetUp".
-Then click on"Add Stage" button.
-Fill the stage name.
-Then click on bottom bar "Save" option.
-Note: Max 4 stage are allowded at a time.

^Using this we can update stage names.
-Firstly we need to go to "My Library".
-Then click on "My Projects".
-Click on "Author> Project SetUp".
-Then we can put a name in stage text box.
-Finally click on bottom bar "Save" option.

^When user status is not active then showing their status.
-Firstly we need to go to "My Library".
-Then click on "My Projects".
-Click on "Author> Project SetUp".
-In member table.
-Note: 1: Active, 0: Not Active, -1: Disabled
-By default [Active] user not showing any status.

^By default add owner if have permission for create project in that course.
-Firstly we need to go to "My Library".
-Then click on "My Projects".
-Click on "Author".
-If you have manage course | create course permission [Menas product_permission > 30-Then automatically added owner permission.

^Using this we can save custom image.
-Firstly we need to go to "My Library".
-Then click on "My Projects".
-Click on "Author> Project SetUp ".
-Then click top right "Upload" button.
-Then open a modal and choose a image and click on "Crop and Upload".
-Then image is uploaded, and click on bottom bar "Save" option.

@test_data: n/a
@result: Project Setup will open.
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
    it('Stages and Workflow add team member', () => {
        cy.get('[data-original-title="WorkFlow"]').click()
        cy.get('[data-cy="teamadd"]').click({ force: true })
        cy.fixture('global').then(data => {
            cy.get('#user_email').type(data.author_email[2])
        })
        cy.wait(5000)
        cy.get('.new_role_row > :nth-child(3)').click()
        cy.get('[data-cy="selectrole"]').select('Editor', { force: true })
        cy.get('[data-cy="addrolebtn"]').click({ force: true })
        cy.wait(2000)
        cy.get('#add_new_row').click({ force: true })
        cy.get('#save_btn').click({ force: true })
        cy.wait(5000)
        cy.get('[data-cy=yesbutton]').click()
        cy.wait(10000)
        cy.get('[user_guid="04p0f"] > .text-right > nobr > .btn').click()
        cy.wait(5000)
        cy.get('[data-cy=yesbutton]').click()
        cy.get('#save_btn').click({ force: true })
        cy.wait(5000)
        cy.get('[data-cy=yesbutton]').click()
    })
    it('Image Upload Check Feature', () => {
        cy.get('[data-cy="upload_btn"]').click({ force: true })
        cy.get('#update-course-img').should('be.visible')
    })
})