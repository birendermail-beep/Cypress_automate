/*
@author: Anirudha Pratap
@master_project_id: 6621
@phase_id: 
@story_id: 10959
@story_name: Load Weblink player
@path: final/6621
@test_case_name: Load Weblink player.js
@description: Load Weblink player
@test_steps:
^Load Weblink player
-Load pdf player by clicking on pdf tag showing left side and Modal box will be opened 
-Click the type DDL and select the Weblink option
-Weblink palyer will be loaded
-Fill provided data and click the submit button

^Load weblink player in new tab
-Load weblink player by clicking on Weblink tag showing left side and Modal box will be opened
-Change inline value into new tab
-Fill provided data and click the submit button

@test_data: n/a
@result: Weblink will be loaded in new tab
*/

import { Navbar, login_username, login_password, LoginPage, EditorPage } from '../../../../page-objects/pages/index' 
describe("embed (knowledge check) testing", function() {
    beforeEach('This is login', function() {
            cy.fixture('global').then(data => {
                cy.visit(data.url)
                Navbar.clickOnLogin()
                LoginPage.loginPage(login_username, login_password)
                EditorPage.visitEditor(data.url)
            })
            cy.get('.multiple_choice').click({ force: true })
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
        })
        //Load Weblink player
    it('embed and player tag for Load Weblink player', function() {
        cy.get('#type').select('Web Link', { force: true })
        cy.get('[placeholder="Enter the title"]').type('Test', { force: true })
        cy.get('#asset').clear().type('https://www.sbclearning.com/wgu/c172/Section2_Sub2_4_Interactive2/story.html', { force: true })
        cy.get('#height').type('480', { force: true })
        cy.get('.btn-secondary').contains('Submit').click({ force: true })
    })
        //Load weblink player in new tab
    it('embed and player tag for Load weblink player in new tab', function() {
        cy.get('#type').select('Web Link', { force: true })
        cy.get('[placeholder="Enter the title"]').type('Test', { force: true })
        cy.get('#asset').clear().type('http://site.ebrary.com/lib/westerngovernors/reader.action?ppg=242&docID=10627460&tm=1477364263136', { force: true })
        cy.get('.jss225 > #embed').select('New Tab', { force: true })
        cy.get('#img').type('C228-v2/Pages-211-218.png', { force: true })
        cy.get('#height').type('200px', { force: true })
        cy.get('#width').type('200px', { force: true })
        cy.get('.btn-secondary').contains('Submit').click({ force: true })
    })
})