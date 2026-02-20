/*
@author: Anirudha Pratap
@master_project_id: 4623
@phase_id:
@story_id: 15231
@story_name: help
@path: final/Create
@test_case_name: help
@description: Create area
@test_steps: 
^epub help page
-Login to ucertify.com as author.
-Open the following url:(https://www.ucertify.com/author/epub/index.php).
-Click on the grid button.
-Click on the help button

^help intro page
-Login to ucertify.com as author.
-Open the following url:(https://www.ucertify.com/editor/index.php?func=help).

@test_data: N/A.
@result: Opening the help page.
*/
import { Navbar, login_username, login_password, LoginPage, CreateArea } from '../../../../page-objects/pages/index' 
describe('epub help page', function() {
    beforeEach('this is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
        })
    })
    it('test the epub help page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + "/educator/project/epub/index.php");
        })
        cy.get('[intro-id="dashboard_menu"] > .icomoon-grid').click();
        cy.get('.m-0 > :nth-child(5)').invoke("attr", "target", "_self");
        cy.get('.m-0 > :nth-child(5)').click();
    })
    it('test the help intro page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + "/editor/index.php?func=help");
        })
    })
})