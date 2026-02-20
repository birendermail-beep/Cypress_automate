/*
@author: Anirudha Pratap
@master_project_id: 6621
@phase_id: n/a
@story_id: 10832
@story_name: Audio Recorder
@path: final/6621
@test_case_name: Audio Recorder.js
@test_steps: 
^create question according to recorded data
-description: create question using recording data and selected language
-Visit to website.
-Login to website.
-visit editor area
-click on image with text Audio Recorder  then go to the authoring area.
-Select the language in which language you want to record the data. Default language is html lang attribute or user agent's language.
-click on red circular recording button to start the recording and record your text that can be seen on authoring area inside textbox that is recognised.
-After that click on dark square stop button to stop the recording on authoring area.

^Play or reset recorded data
-description: Play or reset recorded data
-Visit to website.
-Login to website.
-visit editor area
-click on image with text Audio Recorder  then go to the authoring area.
-Select the language in which language you want to record the data. Default language is html lang attribute or user agent's language.
-click on red circular recording button to start the recording and record your text that can be seen on authoring area inside textbox that is recognised.
-After that click on dark square stop button to stop the recording on authoring area.
-Use text box data to create question in stem part on authoring area encluding language in which you have to speak at the time of recording on Preview area.
-If you want to listen that what is recorded then click on dark triangle button on authoring area.
-If you want to reset the recorded data then click on reset button on authoring area.

^Performing on Preview area
-description: Recording, Listening, Reset and Answer matching on preview area.
-Visit to website.
-Login to website.
-visit editor area
-click on image with text Audio Recorder  then go to the Preview area.
-click on red circular recording button to start the recording and record your text.
-Speak the data in indicated language mentioned in question part.
-After that click on dark square stop button to stop the recording accordingly on preview area.
-If you want to listen that what is recorded then click on dark triangle button.
-For Answer matching click on remediation button and you can check your answer by clicking on Your answer and Correct answer button on Preview area and data will be seen in a container.
-You can click on reset button to reset the recording.
    
@test_data: n/a
@result: Record what is your name in english (United states)
*/
import { Navbar, login_username, login_password, LoginPage, EditorPage } from '../../../../page-objects/pages/index'
describe("Audio Recorder", function() {
    beforeEach('This is login', function() {
            cy.fixture('global').then(data => {
                cy.visit(data.url)
                Navbar.clickOnLogin()
                LoginPage.loginPage(login_username, login_password)
                EditorPage.visitEditor(data.url)
                cy.get('[data-subtype="43"]').click({ force: true })
                cy.wait(2000)
                EditorPage.writeTitle()
                cy.get('#language_select').select('English (U.K.)', { force: true })
            })
        })
        //create question using recording data and selected language
    it('create question using recording data and selected language', function() {
            cy.get('#recordButton').click()
            cy.wait(2000)
            cy.get('#recordButton').click()
            cy.wait(2000)
            cy.get('#stopButton').click({ force: true })
        })
        //Play or reset recorded data
    it('Play or reset recorded data', function() {
            cy.get('#recordButton').click()
            cy.wait(2000)
            cy.get('#recordButton').click()
            cy.wait(2000)
            cy.get(':nth-child(4) > .row > .col-12 > .border > #controls_container > .w-100 > #resetButton').click({force:true})
            cy.get('.authoring_dismiss_done').click({force:true})
        })
        //Recording, Listening, Reset and Answer matching on preview area.
    it('Recording, Listening, Reset and Answer matching on preview area.', function() {
        cy.get('#edi_tabs > :nth-child(2) > a').click()
        cy.get('#preview_recordButton').click()
        cy.wait(2000)
        cy.get('#preview_recordButton').click()
        cy.wait(2000)
        EditorPage.viewReview()
    })
})