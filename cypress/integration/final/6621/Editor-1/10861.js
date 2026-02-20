/*
@author: Anirudha Pratap
@master_project_id: 6621
@phase_id: 
@story_id: 10861
@story_name: Insight
@path: final/6621
@test_case_name: Insight.js
@description: N/a
@test_steps: 
^Insight
-login to page
-visit the editor dashboard
-click on search icon
-Type Insight
-click on Insight
-click on smart chat
-click on intro 
-enter begin button name
-click on characters
-click to visibility
-write player name
-select character voice
-click on mission
-click on add mission
-click on communication
-click on add step
-click on result
-write enter the name
-write the url
-click on upload
-click on reset
-click on scene
-give the scene title 
-upload the image
-click on character
-click on add character
-write character name
-select character voice
-click on visibility
-write camera number
-click to upload the character image
-click on character
-click on add character
-write character name
-select character voice
-click on visibilty
-write camera number
-click to upload the character image
-click on delete option"
-click the assets
-click the add assets
-click the add assets
-write the asset name
-click on visibility
-click to upload asset image
-click on animation
-click on add animation
-write the name of animation
-delete the animation name
-click on upload files
-click to choose the file

@test_data: n/a
@result: open Insight module open in Editor area
*/

import { Navbar, login_username, login_password, LoginPage, EditorPage } from '../../../../page-objects/pages/index' 
describe("Insight Test Case", function() {
    beforeEach('This is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url+"/editor/?action=new");
        })
    })

    it('Insight Testing', function() {
        cy.get('.icomoon-search-2').click()
        cy.get('[style="font-size: 20px; padding-left: 16px; height: 51px; background-color: rgb(76, 76, 76); width: 285px;"] > input').type('Insight')
            //cy.get('.grid-item').contains("Insight").click({ force: true})
        cy.get('[data-subtype="36"]').click({ force: true })
            //Select the smart chat
        cy.get('#choose_btn0').click()

        // Intro Tab
        cy.get('.insightTab2').click()
        cy.get('#begin_Button').type('Begin button testing')
            // Characters Tab
        cy.get('.insightTab3').click()
        cy.get('#char_visibl0').click()
        cy.get('#character_name0').type('New Player', { force: true })
        cy.get('#char_voice0').select('Female 2', { force: true })
            // Mission Tab
        cy.get('.insightTab6').click()
        cy.get('.add_step > .btn').click()

        // Communication Tab
        cy.get('.insightTab7').click()
        cy.get('.add_step > .btn').click()

        // Result Tab
        cy.get('.insightTab9').click()

    })
});