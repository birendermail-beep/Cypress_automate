/*
@author: Anirudha Pratap
@last_updated_on: 2020-10-08
@master_project_id: 6621
@phase_id: 10858
@story_id: 10838
@story_name: Dos Terminal
@path: final/6621
@test_case_name: Dos Terminal.js
@description: command added and result will come true
@test_steps:
^Open Dos terminal.
-visit the website
-Login into website
-go to editor area
-Click on search icon and search Dos
-Open the Dos terminal

^Write command
-visit the website
-Login into website
-go to editor area
-Click on search icon and search Dos
-Open the Dos terminal
-write command "dir"
-Press Enter
-Click on the preview area, write the same command "dir".
-Click review

^match sequence.
-visit the website
-Login into website
-go to editor area
-Click on search icon and search Dos
-Open the Dos terminal
-select match option

^Reset button.
-visit the website
-Login into website
-go to editor area
-Click on search icon and search Dos
-Open the Dos terminal
-write command "dir"
-Press Enter
-Click on reset button 

^Zoom in and Zoom out.
-visit the website
-Login into website
-go to editor area
-Click on search icon and search Dos
-Open the Dos terminal
-Click on Zoom in (+) icon -> the size of the text will be increased
-Click on Zoom out (-) icon -> the size of the text will be decreased

^Mute/unmute.
-visit the website
-Login into website
-go to editor area
-Click on search icon and search Dos
-Open the Dos terminal
-Click on speaker icon

@test_data: n/a
@result: command added and result will come true
*/
import { Navbar, login_username, login_password, LoginPage, EditorPage } from '../../../../page-objects/pages/index'
describe('ebook area testing', function() {
    beforeEach('This is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            EditorPage.visitEditor(data.url)
            cy.get('.grid-item').contains("Dos terminal").click({ force: true })
        })
    })

    it("Login and Reach Dos Terminal Section", function() {
        /** Entering invalid command */
        cy.get(".cmd").click({ force: true })
        cy.get('#authorTerminal > .cmd').then(function($index) {
            $index[0].setAttribute('contenteditable', 'true')
        }).type("cddir{enter}").then(() => {
            cy.get('.command + div').find("div>span")
        });
        /** Check preview area */
        cy.get('#editorViewPane > .nav > :nth-child(2) > a').click()
        cy.get('#previewTerminal > .cmd').then(function($index) {
            $index[0].setAttribute('contenteditable', 'true')
        }).type('dir{end}{enter}')
        cy.get('.jss190').click();
    })

    it("Login and Reach Dos Terminal Section", function() {
        /** Entering a valid command */
        cy.get('#authorTerminal > .cmd').then(function($index) {
            $index[0].setAttribute('contenteditable', 'true')
        }).type('dir{end}{enter}').then(() => {
            cy.get('.command + div').find("div>span").its('length').should('gt', 3);
        });

        /** Check preview area */
        cy.get('#editorViewPane > .nav > :nth-child(2) > a').click()
        cy.get('#previewTerminal > .cmd').then(function($index) {
            $index[0].setAttribute('contenteditable', 'true')
        }).type('dir{end}{enter}')

        /** Check the reset functionality */
        cy.get('#editorViewPane > .nav > :nth-child(1) > a').click()
        cy.get('#authorReset').click({ force: true })
        cy.get('.command + div').find("div>span").its('length').should('gt', 0);
    })

    it("Login and Reach Dos Terminal Section", function() {
        /** Click on + to zoom in */
        cy.get(".cmd").click({ force: true })
        cy.get('#authorTerminal > .cmd').then(function($index) {
            $index[0].setAttribute('contenteditable', 'true')
        }).type("Hello Testing{enter}").then(() => {
            cy.get('#authorTerminal > #terminal_font > .icomoon-plus').click()
            cy.get('#authorTerminal > #terminal_font > .icomoon-plus').click()
            cy.get('#authorTerminal > #terminal_font > .icomoon-plus').click()
            cy.wait(3000)
                /** click - to zoom out */
            cy.get('#authorTerminal > #terminal_font > .icomoon-minus').click()
            cy.get('#authorTerminal > #terminal_font > .icomoon-minus').click()
            cy.wait(2000)
                /** Click on speaker icon */
            cy.get('#voice_icon').click()
        });
    })
});