/*
@author: Anirudha Pratap
@master_project_id: 4623
@phase_id: NA
@story_id: NA
@story_name: Adding New Project
@path: final\Create
@test_case_name: Adding New Project
@description: Checking the functionality of adding the new project.
@test_steps: 
^To add a new project without entering the project name and click on the add button
- 1. Click on My Library after logging in your account
- 2. Click on My Projects tab given in tab bar.
- 3. Click on Add New button given in appeared red alert,
- 4. Do not input Project Name in the appeared modal.
- 5. Click on Add Button

^To add a new project without entering the project name and using the enter key instead of a mouse click on the add button
- 1. Click on My Library after logging in your account
- 2. Click on My Projects tab given in tab bar.
- 3. Click on Add New button given in appeared red alert
- 4. Only focus on input field and do not input Project Name in the appeared modal.
- 5. Press enter button from keyboard 

^To add a new project by entering the project name and using the enter key instead of a mouse click on the add button
- 1. Click on My Library after logging in your account
- 2. Click on My Projects tab given in tab bar.
- 3. Click on Add New button given in appeared red alert
- 4. Input Project Name in the appeared modal.
- 5. Press enter button from keyboard

^To add a new project by entering the project name and click on the add button
- 1. Click on My Library after logging in your account
- 2. Click on My Projects tab given in tab bar.
- 3. Click on Add New button given in appeared red alert,
- 4. Input Project Name in the appeared modal.
- 5. Click on Add Button

@test_data:
- Project Name: PHP For Beginners
- Project Name: PHP For Beginners

@result: Checking the functionality of adding the new project.
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
        CreateArea.myProjectOnly()
        CreateArea.addTask()
    })
    it('Add Task Button Without Enter Name', () => {
        cy.get('[data-cy="add"]').click()
        cy.get('[data-cy="warning"]').should('be.visible')
    })
    it('Add Task Button With Enter Name', () => {
        cy.fixture('global').then(data => {
            cy.get('[data-cy="projectname"]').type(data.typedata)
        })
        cy.get('[data-cy="cancel"]').click()
    })
})