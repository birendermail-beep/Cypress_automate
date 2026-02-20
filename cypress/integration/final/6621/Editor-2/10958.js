/*
@author: Anirudha Pratap
@master_project_id: 6621
@phase_id: 
@story_id: 10958
@story_name: Load PDF player
@path: final/6621
@test_case_name: Load PDF player.js
@description: Load PDF player
@test_steps:
^Load PDF player
-Load download player by clicking on download tag showing left side and Modal box will be opened 
-Click the type DDL and select the PDF option
-PDF palyer will be loaded
-Fill provided data and click the submit button

@test_data: n/a
@result: PDF player will be loaded
*/
import { Navbar, login_username, login_password, LoginPage, EditorPage } from '../../../../page-objects/pages/index' 
describe("embed (knowledge check) testing", function() {
    it('embed and player tag for Load PDF player', function() {
        cy.fixture('global').then(data => {
                cy.visit(data.url)
                Navbar.clickOnLogin()
                LoginPage.loginPage(login_username, login_password)
                EditorPage.visitEditor(data.url)
                cy.get('.multiple_choice').click({ force: true })
            })
            //Load PDF player
        cy.wait(5000)
        cy.get('#title').type('Testing', { force: true }).then(() => {
            cy.get('#stem > .controls_button > .block-controls > .block-controls__container > .block-controls__bar > .block-controls__tools > .block-controls__add > .icomoon-new-24px-add-circle-1').click({ force: true })
            cy.get('#searchText').type('embed', { force: true }).then(() => {
                cy.get('#embed').click({ force: true })
                cy.get('[data-type="embed"] > .item_labelClass').contains('Link').click({ force: true })
                cy.wait(2000)
                cy.get('#items_list').click({ force: true })
                cy.get('[type="ebook-item"] > player').eq(0).click({ force: true })
            })
        })
        cy.get('#type').select('PDF', { force: true })
        cy.get('[placeholder="Enter the title"]').type('Test', { force: true })
        cy.get('#asset').clear().type(JIGYAASA_DOWNLOAD + 'c228/Child_abuse_law.pdf', { force: true })
        cy.get('.btn-secondary').contains('Submit').click({ force: true })
    })
})