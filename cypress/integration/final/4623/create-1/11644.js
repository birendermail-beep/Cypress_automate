/*
@author: Anirudh Pratap
@master_project_id: 4623
@phase_id: 10414
@story_id: 
@story_name: preview Item
@path: final/Create
@test_case_name: preview Item.js
@description: 
@test_steps: 
^quick preview
-Firstly we need to go to "My Library".
-Then click on "My Projects".
-Click on "Author> Item Bank".
-We need to click on "Preview" icon.
-Then open a modal with a item details.
-Note: Only showing publish contents details.

@test_data: n/a
@result: If details exist then showing.
*/
import { Navbar, login_username, login_password, LoginPage, CreateArea } from '../../../../page-objects/pages/index'
describe('Create Area', () => {
    it('Publish', () => {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        CreateArea.openLibrary()
        CreateArea.myProject()
        CreateArea.itemBank();
        cy.contains('Computer Networking').click({force:true});
        cy.get('[data-value="mytodo"]').click();
        cy.get('.table-responsive').should('exist');
    })
})