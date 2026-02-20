/*
@author: Anirudha Pratap
@master_project_id: 6621
@phase_id: 10723
@story_id:
@story_name: main_editor
@path: final/6621
@test_case_name: main_editor.js
@description:
@test_steps: 
    ^test case of editor homepage area
    - Visit to website.
    - Login to website.
    - visit editor area
    - click each sidebar items

    ^test case of editor homepage area
    - Visit to website.
    - Login to website.
    - visit editor area
    - click each search Icon
    
@test_data: n/a
@result: Editor page open
*/
import { Navbar, login_username, login_password, LoginPage, EditorPage } from '../../../../page-objects/pages/index' 
describe("Editor Testing", function() {
    beforeEach("This will run before each", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            EditorPage.visitEditor(data.url)
        })
    });
    //open the dashboard
    it("open Dashboard of Editor Page", function() {
            EditorPage.clickOnLeftSide()
        })
        //access all dashboard item
    it("click on search icon and asset and item", function() {
        cy.get('.icomoon-search-2').click({ force: true })
        cy.wait(2000)
        cy.get('.text-light > .float-right').click({ force: true })
        cy.wait(2000)
        cy.get('.text-light > .float-left').click({ force: true })
        cy.wait(2000)
        cy.get('[placeholder="Search here..."]').type('evalPro', { force: true })
    })
});