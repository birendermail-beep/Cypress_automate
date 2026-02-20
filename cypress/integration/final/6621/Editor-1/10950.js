/*
@author: Anirudha Pratap
@master_project_id: 6621
@phase_id: 
@story_id: 10950
@story_name: Loading Live Lab Player
@path: final/6621
@test_case_name: Loading Live Lab Player.js
@description: Loading Live Lab Player
@test_steps:
^Loading Live Lab Player
-Load Simulation lab player by clicking on Simulation tag showing left side and Modal box will be opened
-Click the type DDL and select the terminal option
-terminal palyer will be loaded
-Fill provided data and click the submit button

^Load live lab player with learn mode
-Load live lab player by clicking on lablink tag showing left side and Modal box will be opened
-Check the Learn Mode check box
-Fill provided data and click the submit button

@test_data: n/a
@result: live Lab player will be loaded
*/
import { Navbar, login_username, login_password, LoginPage, EditorPage } from '../../../../page-objects/pages/index' 
describe("embed (knowledge check) testing", function() {
    beforeEach('This is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            EditorPage.visitEditor(data.url)
            cy.get('.multiple_choice').click({ force: true })
            cy.wait(5000)
            cy.get('#title').type('Testing', { force: true }).then(() => {
                cy.get('#stem > .controls_button > .block-controls > .block-controls__container > .block-controls__bar > .block-controls__tools > .block-controls__add > .icomoon-new-24px-add-circle-1').click({ force: true })
                cy.get('#searchText').type('embed', { force: true }).then(() => {
                    cy.get('#embed').click({ force: true })
                    cy.get('[data-type="embed"] > .item_labelClass').contains('Lab').click({ force: true })
                    cy.wait(2000)
                    cy.get('#items_list').click({ force: true })
                    cy.get('[type="ebook-item"] > player').eq(0).click({ force: true })
                })
            })
        })
    })

    /** Load live lab player */
    it('embed and player tag (knowledge check) for Lab Load live lab player', function() {
        cy.get('#type').select('Live Lab', { force: true })
        cy.get('[placeholder="Enter the title"]').type('Visio 2016', { force: true })
        cy.get('#asset').clear().type('03AJ4', { force: true })
        cy.get('.btn-secondary').click({ force: true })
    })
        /** Load live lab player */
    it('embed and player tag (knowledge check) for Lab Load live lab player with learn', function() {
        cy.get('#type').select('Live Lab', { force: true })
        cy.get('[placeholder="Enter the title"]').type('Test', { force: true })
        cy.get('#asset').clear().type('05y9d', { force: true })
        cy.contains('Learn Mode').click({ force: true })
        cy.get('.btn-secondary').click({ force: true })

    })
})