/*
@author: Anirudha Pratap
@master_project_id: 6621
@phase_id: 
@story_id: 10960
@story_name: Loading Exhibit Player
@path: final/6621
@test_case_name: Loading Exhibit Player.js
@description: Loading Exhibit Player
@test_steps:
^Load Exhibit player
-Click the type DDL and select the Exhibit option
-Exhibit palyer will be loaded and sub type will be Item
-Fill provided data and click the submit button

^Load Exhibit player with image
-Load exhibit player by clicking on Exhibit tag showing left side and Modal box will be opened
-Exhibit palyer will be loaded and sub type will be Image
-Fill provided data and click the submit button

^Load Exhibit player with text
-Load exhibit player by clicking on Exhibit tag showing left side and Modal box will be opened
-Exhibit palyer will be loaded and sub type will be Image
-Fill provided data and click the submit button

^Load exhibit player as link and overlay
-Load exhibit player by clicking on Exhibit tag showing left side and Modal box will be opened
-Exhibit palyer will be loaded and change sub type to Text
-Fill provided data and click the submit button

@test_data: n/a
@result: Exhibit player will be loaded
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
            })
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
        //Load Exhibit player
    it('embed and player tag for Load Exhibit player', function() {
            cy.get('#type').select('Exhibit', { force: true })
            cy.get('#show_caption').type('Show', { force: true })
            cy.get('#hide_caption').type('Hide', { force: true })
            cy.get('#asset').clear().type('01Tom', { force: true })
            cy.get('.btn-secondary').contains('Submit').click({ force: true })
        })
        //Load Exhibit player image
    it('embed and player tag for Load Exhibit player image', function() {
            cy.get('#type').select('Exhibit', { force: true })
            cy.get('#sub_type').select('Image', { force: true })
            cy.get('#show_caption').type('Show', { force: true })
            cy.get('#hide_caption').type('Hide', { force: true })
            cy.get('#img').type('hub-usb_000huc.png', { force: true })
            cy.get('#alt').type('The figure shows the USB A ports on the hub', { force: true })
            cy.get('.btn-secondary').contains('Submit').click({ force: true })
        })
        //Load Exhibit player Text
    it('embed and player tag for Load Exhibit player text', function() {
            cy.get('#type').select('Exhibit', { force: true })
            cy.get('#sub_type').select('Text', { force: true })
            cy.get('#show_caption').type('Show', { force: true })
            cy.get('#hide_caption').type('Hide', { force: true })
            cy.get('[placeholder="Enter the text"]').type('Answers will vary depending on the systems you have in place.', { force: true })
            cy.get('.btn-secondary').contains('Submit').click({ force: true })
        })
        //Load Exhibit player with link and overlay
    it('embed and player tag for Load Exhibit player', function() {
            cy.get('#type').select('Exhibit', { force: true })
            cy.get('#show_caption').type('Show', { force: true })
            cy.get('#hide_caption').type('Hide', { force: true })
            cy.get('#layout').select('Link', { force: true })
            cy.get('.jss224 > #embed').select('Overlay', { force: true })
            cy.get('#asset').clear().type('01Tom', { force: true })
            cy.get('.btn-secondary').contains('Submit').click({ force: true })
        })
        //Load Exhibit player image with link and overlay
    it('embed and player tag for Load Exhibit player image', function() {
            cy.get('#type').select('Exhibit', { force: true })
            cy.get('#sub_type').select('Image', { force: true })
            cy.get('#show_caption').type('Show', { force: true })
            cy.get('#hide_caption').type('Hide', { force: true })
            cy.get('#layout').select('Link', { force: true })
            cy.get('.jss224 > #embed').select('Overlay', { force: true })
            cy.get('#img').type('hub-usb_000huc.png', { force: true })
            cy.get('#alt').type('The figure shows the USB A ports on the hub', { force: true })
            cy.get('.btn-secondary').contains('Submit').click({ force: true })
        })
        //Load Exhibit player Text with link and overlay
    it('embed and player tag for Load Exhibit player text', function() {
        cy.get('#type').select('Exhibit', { force: true })
        cy.get('#sub_type').select('Text', { force: true })
        cy.get('#show_caption').type('Show', { force: true })
        cy.get('#hide_caption').type('Hide', { force: true })
        cy.get('#layout').select('Link', { force: true })
        cy.get('.jss224 > #embed').select('Overlay', { force: true })
        cy.get('[placeholder="Enter the text"]').type('Answers will vary depending on the systems you have in place.', { force: true })
        cy.get('.btn-secondary').contains('Submit').click({ force: true })
    })
})