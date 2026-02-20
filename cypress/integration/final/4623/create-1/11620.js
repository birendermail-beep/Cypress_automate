/*
@author: Anirudh Pratap
@master_project_id: 4623
@phase_id: 
@story_id: 
@story_name: Item Bank Filter
@path: final/Create
@test_case_name: Item Bank Filter.js
@description: 
@test_steps: 
^Testing "Filter by Lesson Drop Down"
-Follow steps 1 to 4 as given in test case 39.
-Select any of the option from the "Filter By Lesson" dropdown.

^Testing "Filter by Item State Drop Down"
-Follow steps 1 to 4 as given in test case 39.
-Select any of the option from the "Filter By Item State" dropdown.

^Testing "Filter by Type Drop Down"
-Follow steps 1 to 4 as given in test case 39.
-Select any of the option from the "Filter By Type" dropdown.

^Testing "Filter by Item State" Button
-Click on "My Library" after logging in your account
-Click on "My Projects" tab given in tab bar.
-Click on "Author" button of specified project.
-Click On "Item Bank"
-Click on "Filter by Item State" button.
-Click on "Published" / "In Draft" Link of dropdown

@test_data: n/a

@result: Item Bank will open
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
        CreateArea.myProjectPHP()
        CreateArea.itemBank()
    })
    it('Item bank search bar', () => {
        cy.wait(5000)
        cy.get('[data-cy=lesson_obj]').eq(0).click()
        cy.wait(10000)
        cy.fixture('global').then(data => {
            cy.get('[data-cy=searchbar]').clear().type(data.guiditem)
        })
    })
    it('Select any of the option from the "Filter By Lesson" dropdown', () => {
        cy.get('#preview_tab').click()
    })
    it('Select any of the option from the "Filter By Item State" dropdown', () => {
        cy.get('#item_tab').click()
    })
})