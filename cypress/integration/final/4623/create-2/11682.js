/*
@author: Anirudh Pratap
@master_project_id: 4623
@phase_id: 10660
@story_id: 
@story_name: Create Plan
@path: final/Create
@test_case_name: Create Plan.js
@description: 
@test_steps: 
^Licensed column
-Firstly we need to go to "My Library".
-Then click on "My Projects".
-Click on "Author> TODO List".
-Then click on "Create Plan" button.
-Fill the only integer number in licensed column.
-Note: On focus out changes reflect in table

^Assigned column
-Firstly we need to go to "My Library".
-Then click on "My Projects".
-Click on "Author> TODO List".
-Then click on "Create Plan" button.
-Fill the only integer number in assigned column.
-Note: On focus out changes reflect in table.

^To Be Created column
-Firstly we need to go to "My Library".
-Then click on "My Projects".
-Click on "Author> TODO List".
-Then click on "Create Plan" button.
-Fill the only integer number in to be created column.
-Note: On focus out changes reflect in table.

^Listed column
-Firstly we need to go to "My Library".
-Then click on "My Projects".
-Click on "Author> TODO List".
-Then click on "Create Plan" button.
-In this column showing total listed | Created item [Like Quiz, test prep, labs etc].
-Note: On focus out changes reflect in table.

^Un-listed column
-Firstly we need to go to "My Library".
-Then click on "My Projects".
-Click on "Author> TODO List".
-Then click on "Create Plan" button.
-In this column showing total unlisted number.
-Note: On focus out changes reflect in table.

^Review Per Day column
-Firstly we need to go to "My Library".
-Then click on "My Projects".
-Click on "Author> TODO List".
-Then click on "Create Plan" button.
-Fill the only integer number in to "Review Per Day" column.
-Note: On focus out changes reflect in table.

^Create Per Day column
-Firstly we need to go to "My Library".
-Then click on "My Projects".
-Click on "Author> TODO List".
-Then click on "Create Plan" button.
-Fill the only integer number in to "Create Per Day" column.
-Note: On focus out changes reflect in table.

^Total Number column
-Firstly we need to go to "My Library".
-Then click on "My Projects".
-Click on "Author> TODO List".
-Then click on "Create Plan" button.
-In this column showing total number of items.
-Note: On focus out changes reflect in table.

^Create Duration column
-Firstly we need to go to "My Library".
-Then click on "My Projects".
-Click on "Author> TODO List".
-Then click on "Create Plan" button.
-In this column showing total number of items.
-Note: On focus out changes reflect in table.

^Review Duration column
-Firstly we need to go to "My Library".
-Then click on "My Projects".
-Click on "Author> TODO List".
-Then click on "Create Plan" button.
-In this column showing total create duration of items.
-Note: On focus out changes reflect in table.

^Total Duration column
-Firstly we need to go to "My Library".
-Then click on "My Projects".
-Click on "Author> TODO List".
-Then click on "Create Plan" button.
-In this column showing overall total duration of items.
-Note: On focus out changes reflect in table.

^Total Verificaton row
-Firstly we need to go to "My Library".
-Then click on "My Projects".
-Click on "Author> TODO List".
-Then click on "Create Plan" button.
-In this column we can add total verification days only integer format.
-Note: Using this value also calculate overall "Project Duration" on the top of table.

^Start date and end date
-Firstly we need to go to "My Library".
-Then click on "My Projects".
-Click on "Author> TODO List".
-Then click on "Create Plan" button.
-Add start date automatically calculated automatically calculate the end excluding saturday and sunday based on "Project Duartion".

^Using this we can create plan how to work content team.
-Firstly we need to go to "My Library".
-Then click on "My Projects".
-Click on "Author> TODO List".
-Then click on"Create Plan" button.
-Then report is open, We can fill according your requirement.
-Then click on bottom bar "Save" option.
-Note: Now we have saved all things related "Create Plan" in separate API (educator_obj_config_set) using index object_type=pt.

^Project Planner
-Firstly we need to go to "My Library".
-Then click on "My Projects".
-Click on "Author> TODO List > Create Plan Tab".
-Then click on footer bar "Project Planner" button.
-Then open a modal with all details of project.

-Formula: ((Total Published / Total Number) * 100) = Planner Percent
-Note : 
-Total Published: This is showing final published items in course.
-Total Number: This is used from "Create Plan" table specific column's [Like: Knowledge Checks, Quizzes etc.]

^Export project planner
-Firstly we need to go to "My Library".
-Then click on "My Projects".
-Click on "Author> TODO List > Create Plan Tab".
-Then click right side "Export" button.

@test_data: n/a
@result: Create App will open.
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
    })
    it('Todo', () => {
        CreateArea.myProject()
        CreateArea.openTodo()
    })
    it('Todo Search Box', () => {
        CreateArea.myProject()
        CreateArea.openTodo()
        cy.fixture('global').then(data => {
            cy.get('[data-cy="searchbar"]').type(data.testdata)
        })
    })
    it('Todo Edit Task', () => {
        CreateArea.myProjectPHP()
        CreateArea.openTodo()
        cy.fixture('global').then(data => {
            cy.get('[data-cy=searchbar]').clear().type(data.guidtodo)
        })
        CreateArea.todoVisit()
        cy.fixture('global').then(data => {
            cy.get('#title').clear().type(data.typedata)
        })
        cy.get('#save_xml').click()
        cy.get('#approve').click()
        cy.wait(2000)
        cy.go('back')
        cy.fixture('global').then(data => {
            cy.get('[data-cy=searchbar]').clear().type(data.guidtodo)
        })
    })
    it('Todo Show Option', () => {
        CreateArea.myProject()
        CreateArea.openTodo()
        cy.get('#todo_advance_search').click()
        cy.wait(2000)
        cy.get('#custom_search').click({ force: true })
        cy.get('[title="Settings"]').eq(0).click()
    })
    it('Todo Log Show', () => {
        CreateArea.myProject()
        CreateArea.openTodo()
        cy.get('#todo_advance_search').click()
        cy.wait(2000)
        cy.get('#custom_search').contains('Search').click({ force: true })
        cy.wait(2000)
        cy.get('[title="Settings"]').eq(0).click()
        cy.get('[data-cy="logshow"]').eq(0).click({ force: true })
        cy.wait(2000)
        cy.get('[data-cy="logcontent"]').should('be.visible')
    })
    it('Todo Preview', () => {
        CreateArea.myProject()
        CreateArea.openTodo()
        cy.get('#todo_advance_search').click()
        cy.wait(2000)
        cy.get('#custom_search').click({ force: true })
        cy.wait(2000)
        cy.get('[title="Settings"]').eq(0).click()
        cy.contains('Open').eq(0).click({ force: true })
    })
    it('Advance search', () => {
        CreateArea.myProjectPHP()
        CreateArea.openTodo()
        cy.get('#todo_advance_search').click()
        cy.wait(2000)
        cy.get('#custom_search').click({ force: true })
    })
    it('Badge in comments section', () => {
        CreateArea.myProject()
        CreateArea.openTodo()
        cy.get('#todo_advance_search').click()
        cy.wait(2000)
        cy.get('#custom_search').click({ force: true })
        cy.wait(2000)
        cy.get('[title="Settings"]').eq(0).click()
        cy.contains('Open').eq(0).click({ force: true })
        cy.wait(20000)
    })
})