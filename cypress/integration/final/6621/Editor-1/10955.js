/*
@author: Anirudha Pratap
@master_project_id: 6621
@phase_id: 
@story_id: 10955
@story_name: Load Instrction tag
@path: final/6621
@test_case_name: Load Instrction tag.js
@description: Load Instrction tag
@test_steps:
^Load 3d object player
-Load video player by clicking on Video tag showing left side and Modal box will be opened
-Click the Media and select the 3D Object option
-3D Object palyer will be loaded
-Fill provided data and click the submit button

@test_data: n/a
@result: Load Instrction tag will be loaded
*/
import { Navbar, login_username, login_password, LoginPage, EditorPage } from '../../../../page-objects/pages/index' 
describe("embed (knowledge check) testing", function() {
    it('embed and player tag for Load Instrction tag', function() {
        cy.fixture('global').then(data => {
                cy.visit(data.url)
                Navbar.clickOnLogin()
                LoginPage.loginPage(login_username, login_password)
                EditorPage.visitEditor(data.url)
                cy.get('.multiple_choice').click({ force: true })
            })
            //Load Instrction tag
        cy.wait(5000)
        cy.get('#title').type('Testing', { force: true }).then(() => {
            cy.get('#stem > .controls_button > .block-controls > .block-controls__container > .block-controls__bar > .block-controls__tools > .block-controls__add > .icomoon-new-24px-add-circle-1').click({ force: true })
            cy.get('#searchText').type('embed', { force: true }).then(() => {
                cy.wait(2000)
                cy.get('#embed').click({ force: true })
                cy.get('[data-type="embed"] > .item_labelClass').contains('Instruction').click({ force: true })
            })
        })
    })
})