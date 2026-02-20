/*
@author: Anirudha Pratap
@last_updated_on: 
@master_project_id: 6621
@phase_id: 
@story_id: 10946
@story_name: Validate Item in Knowledge Check
@path: final/6621
@test_case_name: Validate Item in Knowledge Check.js
@description: 
@test_steps:
^validate item id knowledge check 1
-Fill provided data and click the Submit button

^validate item id knowledge check 2
-Fill provided data and click the Submit button

^Validate item in knowledge check 3
-Fill provided data and click the Submit button

@test_data: 
Title= Quiz
Title= Test
Item Id = 02QTp
Item Id = asdf3
Item Id = 05vTs,05y9d

@result: You will get an error msg. Invalid Item id.
*/
import { Navbar, login_username, login_password, LoginPage, EditorPage } from '../../../../page-objects/pages/index' 
describe("embed (knowledge check) testing", function() {
    it('embed and player tag (knowledge check)', function() {
            cy.fixture('global').then(data => {
                cy.visit(data.url)
                Navbar.clickOnLogin()
                LoginPage.loginPage(login_username, login_password)
                EditorPage.visitEditor(data.url)
                cy.get('.multiple_choice').click({ force: true })
            })
        /** By Selecting "embed (knowledge check)" */
        cy.wait(5000)
        cy.get('#title').type('Testing', { force: true }).then(() => {
            cy.get('#stem > .controls_button > .block-controls > .block-controls__container > .block-controls__bar > .block-controls__tools > .block-controls__add > .icomoon-new-24px-add-circle-1').click({ force: true })
            cy.get('#searchText').type('embed', { force: true }).then(() => {
                cy.get('#embed').click({ force: true })
                cy.get('.item_labelClass').contains('Knowledge Check').click({ force: true })
                cy.wait(2000)
                cy.get('#items_list').click({ force: true })
                cy.get('[type="ebook-item"] > player').eq(0).click({ force: true })
            })
        })
        cy.get('[placeholder="Enter the title"]').type('Quiz', { force: true })
        cy.get('#asset').clear().type('02QTp', { force: true })
        cy.get('.btn-secondary').click({ force: true })
        cy.contains('Item id (02QTp) does not match with the selected player type.').should('be.visible')
        cy.get('#asset').clear().type('asdf3', { force: true })
        cy.get('.btn-secondary').click({ force: true })
        cy.contains('Invalid Item id.').should('be.visible')
        cy.get('#asset').clear().type('05vTs,05y9d', { force: true })
        cy.get('.btn-secondary').click({ force: true })
    })
})