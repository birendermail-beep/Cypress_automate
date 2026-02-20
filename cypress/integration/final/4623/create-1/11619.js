/*
@author: Anirudh Pratap
@master_project_id: 4623
@phase_id: 
@story_id: 
@story_name: Item Bank Search Bar
@path: final/Create
@test_case_name: Item Bank Search Bar.js
@description: 
@test_steps: 
^Testing "Search Bar"
-Follow steps 1 to 4 as given in test case 39.
-Focus in on search bar and input any text that matches with question text or question id.

@test_data: n/a

@result: A page with multiple options thumbnail like multiple choice, label an image etc. should be appear.
*/
import { Navbar, login_username, login_password, LoginPage, CreateArea } from '../../../../page-objects/pages/index'
describe('Create Area', () => {
    it('Item bank search bar', () => {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            CreateArea.openLibrary()
            CreateArea.myProject()
            CreateArea.itemBank()
            cy.wait(2000)
            cy.get('[data-cy=lesson_obj]').eq(0).click({ force: true })
            cy.get('[data-cy=searchbar]').clear().type(data.guiditem)
        })
    })
})