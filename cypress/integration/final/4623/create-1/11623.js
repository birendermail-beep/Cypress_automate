/*
@author: Anirudh Pratap
@master_project_id: 4623
@phase_id: 
@story_id: 
@story_name: Item Bank Add Existing Item
@path: final/Create
@test_case_name: Item Bank Add Existing Item.js
@description: 
@test_steps: 
^Testing "Item Bank" -> Add Existing Item
-Click on "My Library" after logging in your account
-Click on "My Projects" tab given in tab bar.
-Click on "Author" button of specified project.
-Click On "Item Bank"
-Click on "Add Item" dropdown.
-Click on "Add Existing Item" Link
-Do not select lesson from the lesson dropdwon from the appeared modal
-Do not select section from the section dropdwon from the appeared modal
-Click on Add Button

^Testing "Item Bank" -> Add Existing Item -> Dropdown
-Click on "My Library" after logging in your account
-Click on "My Projects" tab given in tab bar.
-Click on "Author" button of specified project.
-Click On "Item Bank"
-Click on "Add Item" dropdown.
-Click on "Add Existing Item" Link
-Click on "Add" button of desired item given in action column of table.

^Testing "Item Bank" -> Add Existing Item -> Add button in Action column
-Click on "My Library" after logging in your account
-Click on "My Projects" tab given in tab bar.
-Click on "Author" button of specified project.
-Click On "Item Bank"
-Click on "Add Item" dropdown.
-Click on "Add Existing Item" Link
-Click on "Add" button of desired item given in action column of table.

@test_data: n/a

@result: Item Bank Add Existing Item will open.
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
        CreateArea.itemBank()
    })
    it('Item Bank Open and Existing Item Add', () => {
        cy.get('#item_tab').click()
        cy.wait(10000)
        cy.get('[data-original-title="Add Item"]').click({ force: true })
        cy.get('[data-cy=add_exist_btn]').click()
    })
    it('Search Button Testing', () => {
        cy.get('#item_tab').click()
        cy.wait(10000)
        cy.fixture('global').then(data => {
            cy.get('[data-cy=searchbar]').type(data.guid)
        })
    })
    it('Check Toggle Options', () => {
        cy.get('#item_tab').click()
        cy.wait(10000)
        cy.get('.icomoon-arrow-down-2').click({force: true})
        cy.get('.rounded > .dropdown > .dropdown-menu > :nth-child(1) > .dropdown-item').click()
        cy.get('#domain_advance_search').click()
        cy.wait(5000)
        cy.get('#modal_domain_advance_search').should('be.visible')
    })
})