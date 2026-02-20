/*
@author: Anirudha Pratap
@master_project_id: 6621
@phase_id: 
@story_id: 10952
@story_name: Loading Audio Player
@path: final/6621
@test_case_name: Loading Audio Player.js
@description: Loading Audio Player
@test_steps:
^Loading Audio Player
-Load 3D lab player by clicking on insight tag showing left side and Modal box will be opened  
-Click the lab and select the Media option
-Media palyer will be loaded and Audio is seleted as type
-Fill provided data and click the submit button

@test_data: n/a
@result: Loading Audio Player will be loaded
*/

import { Navbar, login_username, login_password, LoginPage, EditorPage } from '../../../../page-objects/pages/index' 
describe("embed (knowledge check) testing", function() {
    it('embed and player tag for Load audio player', function() {
            cy.fixture('global').then(data => {
                cy.visit(data.url)
                Navbar.clickOnLogin()
                LoginPage.loginPage(login_username, login_password)
                EditorPage.visitEditor(data.url)
                cy.get('.multiple_choice').click({ force: true })
            })
        /** Load audio player */
        cy.wait(5000)
        cy.get('#title').type('Testing', { force: true }).then(() => {
            cy.get('#stem > .controls_button > .block-controls > .block-controls__container > .block-controls__bar > .block-controls__tools > .block-controls__add > .icomoon-new-24px-add-circle-1').click({ force: true })
            cy.get('#searchText').type('embed', { force: true }).then(() => {
                cy.get('#embed').click({ force: true })
                cy.get('[data-type="embed"] > .item_labelClass').contains('Media').click({ force: true })
                cy.wait(2000)
                cy.get('#items_list').click({ force: true })
                cy.get('[type="ebook-item"] > player').eq(0).click({ force: true })
            })
        })
        cy.get('[placeholder="Enter the title"]').type('Test', { force: true })
        cy.get('#asset').clear().type('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', { force: true })
        cy.get('.btn-secondary').click({ force: true })
    })
})