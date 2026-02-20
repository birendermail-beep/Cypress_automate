/*
@author: Anirudha Pratap
@master_project_id: 6621
@phase_id: n/a
@story_id: 11252
@story_name: Fill in the blanks (with dropdown)
@path: final/6621
@test_case_name: Fill in the blanks (with dropdown).js
@description: n/a
@test_steps: 
    ^Open module
    - Visit to website.
    - Login to website.
    - visit editor area
    - click on Fill In the Blanks (with drop down)

    ^Add Response dialog opens
    - Visit to website.
    - Login to website.
    - visit editor area
    - click on Fill In the Blanks (with drop down)
    - Write a paragraph as a question
    - Right click where you want to add drop down box
    - Click on Add Response

    ^Drop down box added
    - Visit to website.
    - Login to website.
    - visit editor area
    - click on Fill In the Blanks (with drop down)
    - Click on plus button to add list for drop down
    - Write text in each option
    - Click on any radio button for correct answer 
    - Click on done button

    ^Text in each option (leave any one blank) and box should not be added
    - Visit to website.
    - Login to website.
    - visit editor area
    - click on Fill In the Blanks (with drop down)
    - Click on plus button to add list for drop down
    - Write text in each option (leave any one blank)
    - Click on any radio button for correct answer 
    - Click on done button

    ^Don't click on any radio button for correct answer and dropdown should not be added
    - Visit to website.
    - Login to website.
    - visit editor area
    - click on Fill In the Blanks (with drop down)
    - Click on plus button to add list for drop down
    - Write text in each option 
    - Don't click on any radio button for correct answer 
    - Click on done button

    ^Check for correct answer
    - Visit to website.
    - Login to website.
    - visit editor area
    - click on Fill In the Blanks (with drop down)
    - In Preview area Select your correct answer
    - Click on review button

    ^Check for incorrect answer
    - Visit to website.
    - Login to website.
    - visit editor area
    - click on Fill In the Blanks (with drop down)
    - In Preview area Select incorrect answer 
    - Click on review button

    ^Check for correct answer
    - Visit to website.
    - Login to website.
    - visit editor area
    - click on Fill In the Blanks (with drop down)
    - In Preview area Select your answer 
    - Click on preview button
    - Click on correct answer

    ^Check for default option
    - Visit to website.
    - Login to website.
    - visit editor area
    - click on Fill In the Blanks (with drop down)
    - Click on plus button to add list for drop down
    - Write text in each option, use plus symbol to make a default option selected
    - Click on any radio button for correct answer 
    - Click on done button
    - In the preview area, check if default option is shown in the dropdown added
    
    ^Check for comma in option
    - Visit to website.
    - Login to website.
    - visit editor area
    - click on Fill In the Blanks (with drop down)
    - Click on plus button to add list for drop down
    - Write text in each option, use #cm if you are using comma in any option
    - Click on any radio button for correct answer 
    - Click on done button
    - In the preview area, check if default option is shown in the dropdown added
    
@test_data: n/a
@result: fill in the blank drop down page open
*/
import { Navbar, login_username, login_password, LoginPage, EditorPage } from '../../../../page-objects/pages/index' 
describe("To test Fill In the Blanks", function() {
    beforeEach('This is login', function() {
            cy.fixture('global').then(data => {
                cy.visit(data.url)
                Navbar.clickOnLogin()
                LoginPage.loginPage(login_username, login_password)
                EditorPage.visitEditor(data.url)
                cy.get('.icomoon-fill-drop-down').click({ force: true })
                cy.wait(2000)
            })
        })
        /** By Selecting "Fill In the Blanks (with drop downs) and click on add response" */
    it("Fill In the Blanks (with drop downs) and add response", function() {
            EditorPage.writeTitle()
            EditorPage.editorAddResponse()
            cy.get('#dropDown0').type('Testing1')
            cy.get('[aria-label="Add"]').click({ force: true })
            cy.get('#dropDown1').type('Testing2')
            cy.get('[aria-label="Add"]').click({ force: true })
            cy.get('#dropDown2').type('+Testing3')
            cy.get('[aria-label="Add"]').click({ force: true })
            cy.get('#dropDown3').type('Testing4')
            cy.get('.text-white > span').contains('Done').click({ force: true })
            cy.contains('Please select atleast one correct answer').should('be.visible')
            cy.get('#dropDown1').clear()
            cy.get('.text-white > span').contains('Done').click({ force: true })
            cy.contains('Please select atleast one correct answer').should('be.visible')
            cy.get('#dropDown1').type('Testing2')
            cy.get('#correct1').click({ force: true })
            cy.get('.text-white > span').contains('Done').click({ force: true })
            EditorPage.editorPreview()
            cy.get('#elem0 > .fillintheblank').select('Testing2', { force: true })
            cy.get('#elem1 > .fillintheblank').select('man', { force: true })
            cy.get('#elem2 > .fillintheblank').select('conditions', { force: true })
            EditorPage.viewReview()
        })
        /** By Selecting "Fill In the Blanks (with drop downs) with right answer" */
    it("Fill In the Blanks (with drop downs) and add response", function() {
        EditorPage.writeTitle()
        EditorPage.editorPreview()
        cy.get('#elem0 > .fillintheblank').select('human', { force: true })
        cy.get('#elem1 > .fillintheblank').select('conditions', { force: true })
        EditorPage.viewReview()
    })
})