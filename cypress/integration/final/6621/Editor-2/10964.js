/*
@author: Anirudha Pratap
@master_project_id: 6621
@phase_id: 
@story_id: 10964
@story_name: Validing URL
@path: final/6621
@test_case_name: Validing URL.js
@description: Validing URL
@test_steps:
^Validation of URL (if asset is empty)
-open editor
-Add video player tag in section, question or fact.(Any of them).
-In url field don't add the asset URL and click add transcript.
-A message will be shown 'URL can't be empty'

^Validation of URL (If asset is not empty & transcript id is found)
-open editor
-Add video player tag in section, question or fact (Any of them).
-After filling the URL and title click Add transcript button.
- If transcript is found then transcript id will be added automatically and a message will shown.

^Validation of VTT (If asset is not empty & transcript id is not found & vtt is valid)
-open editor
-Add video player tag in section, question or fact (Any of them).
-After filling the URL and title click Add transcript button. If transcript is not found then modal will open
-Add the VTT text and then click add if VTT is valid then guid will be added.

^Validation of VTT (If asset is not empty & transcript id is not found & vtt is invalid)
-open editor
-Add video player tag in section, question or fact (Any of them).
-After filling the URL and title click Add transcript button. If transcript is not found then modal will open
-Add the VTT text and then click add if VTT is invalid then it will show the error.

@test_data: n/a
@result: Message will be shown if there is error
*/

import { Navbar, login_username, login_password, LoginPage, EditorPage, InstructorPage } from '../../../../page-objects/pages/index' 
describe("embed (knowledge check) testing", function() {
    beforeEach('This is login', function() {
            cy.fixture('global').then(data => {
                cy.visit(data.url)
                Navbar.clickOnLogin()
                LoginPage.loginPage(login_username, login_password)
                InstructorPage.showManage();
                cy.get('[data-cy=view_course]').click();
                cy.wait(2000);
                EditorPage.visitEditor(data.url)
                cy.get('.multiple_choice').click({ force: true })
            })
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
            cy.wait(5000);
        })

    it('Validation of URL (if asset is empty)', function() {
        cy.get('#type').select('Video', { force: true })
        cy.get('[placeholder="Enter the title"]').type('Test', { force: true })
        cy.get('#group_guids').type('068Fa', { force: true })
        cy.get('.add_transcript').click({ force: true })
        cy.get('[data-cy=errormsg]').should('exist');
    })
        //Add Transcript if transcript is found
    it('embed and player tag for Load video player with Add Transcript if transcript is found', function() {
            cy.get('#type').select('Video', { force: true })
            cy.get('[placeholder="Enter the title"]').type('Test', { force: true })
            cy.get('#asset').clear().type('lpic1/chapter1-2-using-streams-redirection-and-pipes.mp4', { force: true })
            cy.get('#group_guids').type('068Fa', { force: true })
            cy.get('.add_transcript').click({ force: true })
        })
        //click on edit Transcript
    it('embed and player tag for click on edit Transcript', function() {
        cy.get('#type').select('Video', { force: true })
        cy.get('[placeholder="Enter the title"]').type('Test', { force: true })
        cy.get('#asset').clear().type('lpic1/chapter1-2-using-streams-redirection-and-pipes.mp4', { force: true })
        cy.get('#group_guids').type('068Fa', { force: true })
        cy.get('.edit_transcript').click({ force: true })
    })
})