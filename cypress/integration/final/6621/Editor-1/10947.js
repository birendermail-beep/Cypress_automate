/*
@author: Anirudha Pratap
@last_updated_on: 
@master_project_id: 6621
@phase_id: 
@story_id: 10947
@story_name: Loading Coding Lab Player
@path: final/6621
@test_case_name: Loading Coding Lab Player.js
@description: 
@test_steps:
^Load coding lab player 1
-Click the knowledge check and select the Lab option
-Lab palyer will be loaded and Coding Lab is seleted as type
-Fill provided data and click the submit button

^Load coding lab player 2
-Fill provided data and click the Submit button

^Load coding lab player 3
-Fill provided data and click the Submit button

^Load coding lab player 4
-Fill provided data and click the Submit button

@test_data: 
Title= Quiz
Title= Test
Title= Visio 2016 
Item Id = 02QTp
Item Id = asdf3
Item Id = 05vTs,05y9d
Item Id = 05y9d
Item Id = 05ykm
Item Id = 03t1L
Item Id = 01rng
Item Id= 03AJ4
Item Id= 05XOF

@result: You will get an error msg. Invalid Item id.
*/
import { Navbar, login_username, login_password, LoginPage, EditorPage } from '../../../../page-objects/pages/index' 
describe("embed (knowledge check) testing", function() {
    it('This is login/embed and player tag (knowledge check) for Lab with coding lab', function() {
            cy.fixture('global').then(data => {
                cy.visit(data.url)
                Navbar.clickOnLogin()
                LoginPage.loginPage(login_username, login_password)
                EditorPage.visitEditor(data.url)
                cy.get('.multiple_choice').click({ force: true })
            })
        /** Load coding lab player */
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
        cy.get('[placeholder="Enter the title"]').type('Test', { force: true })
        cy.get('#asset').clear().type('05y9d', { force: true })
        cy.get('.btn-secondary').click({ force: true })
        cy.contains('Item id (05y9d) does not match with the selected player type.').should('be.visible')
        cy.get('#asset').clear().type('asdf3', { force: true })
        cy.get('.btn-secondary').click({ force: true })
        cy.contains('Invalid Item id.').should('be.visible')
        cy.get('#asset').clear().type('05vTs,05y9d', { force: true })
        cy.get('.btn-secondary').click({ force: true })
        cy.contains('Multiple item ids are not allowed.').should('be.visible')
        cy.get('#asset').clear().type('05ykm', { force: true })
        cy.get('.btn-secondary').click({force:true})
    })
})