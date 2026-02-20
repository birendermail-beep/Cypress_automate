/*
@author: Anirudha Pratap
@master_project_id: 6621
@phase_id: 
@story_id: 10953
@story_name: Loading Video Player
@path: final/6621
@test_case_name: Loading Video Player.js
@description: Loading Video Player
@test_steps:
^Loading Video Player
-Load Audio player by clicking on Audio tag showing left side and Modal box will be opened  
-Click the type DDL and select the video option
-video palyer will be loaded
-Fill provided data and click the submit button

Load video with security configuration
-Load video player by clicking on Video tag showing left side and Modal box will be opened
-Check the This is required security configuration checkbox
-Fill provided data and click the submit button

Load video with intervals
-Load video player by clicking on Video tag showing left side and Modal box will be opened
-Check the Add Interval checkbox
-Use Add Interval to append row in table
-Fill provided data and click the submit button

@test_data: n/a
@result: Loading Video Player will be loaded
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
                    cy.get('[data-type="embed"] > .item_labelClass').contains('Media').click({ force: true })
                    cy.wait(2000)
                    cy.get('#items_list').click({ force: true })
                    cy.get('[type="ebook-item"] > player').eq(0).click({ force: true })
                })
            })
        })
        //Load video player
    it('embed and player tag for Load video player', function() {
        cy.get('#type').select('Video', { force: true })
        cy.get('[placeholder="Enter the title"]').type('Test', { force: true })
        cy.get('#asset').clear().type('lpic1/chapter1-2-using-streams-redirection-and-pipes.mp4', { force: true })
        cy.get('#group_guids').type('03qq5', { force: true })
        cy.get('.btn-secondary').click({ force: true })
    })
        //Load video with security configuration
    it('embed and player tag for Load video with security configuration', function() {
        cy.get('#type').select('Video', { force: true })
        cy.get('[placeholder="Enter the title"]').type('Test', { force: true })
        cy.get('#asset').clear().type('lpic1/chapter1-2-using-streams-redirection-and-pipes.mp4', { force: true })
        cy.get('#group_guids').type('03qq5', { force: true })
        cy.contains('This is required security configuration').click({ force: true })
            //cy.get('#security').type('{"loid":"400842","token":"109727","wID":"275143"}{{}mycommand', { mycommand })
        cy.get('.btn-secondary').click({ force: true })
    })
        //Load video with intervals
    it('embed and player tag for Load video with intervals', function() {
        cy.get('#type').select('Video', { force: true })
        cy.get('[placeholder="Enter the title"]').type('Creating an Employees Table', { force: true })
        cy.get('#asset').clear().type(JIGYAASA_CONTENT_STREAM + '70-461-videos/Creating%20a%20table.mp4', { force: true })
        cy.contains('Add Interval').click({ force: true })
        cy.get('#num_input').type('0,96', { force: true })
        cy.get('#caption_input').type('Writing a SQL query, Seeing the structure of the table created', { force: true })
        cy.get('.btn-secondary').contains('Submit').click({ force: true })
    })
})