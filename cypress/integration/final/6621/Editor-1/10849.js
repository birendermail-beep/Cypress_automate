/*
@author: Anirudha Pratap
@master_project_id: 6621
@phase_id: 
@story_id: 10849
@story_name: Fill in the blanks (with Multiline)
@path: final/6621
@test_case_name: Fill in the blanks (with Multiline).js
@description: n/a
@test_steps: 
^Open module
- Visit to website.
- Login to website.
- visit editor area
- click on Fill In the Blanks (Multiline)

^Add Response dialog opens
- Visit to website.
- Login to website.
- visit editor area
- click on Fill In the Blanks (Multiline)
- Write a paragraph as a question 
- Right click where you want to add textarea box

^Set the value of rows and cols
- Visit to website.
- Login to website.
- visit editor area
- click on Fill In the Blanks (Multiline)
- Click on add response 
- Write the default answer 
- Set the value of rows and cols
- Write the correct answer 
- Click on done button

^Write the correct answer one or more than one 
- Visit to website.
- Login to website.
- visit editor area
- click on Fill In the Blanks (Multiline)
- Click on add response 
- Write the default answer 
- Set the value of rows and cols
- Write the correct answer one or more than one 
- Click on done button

^Click on setting button
- Visit to website.
- Login to website.
- visit editor area
- click on Fill In the Blanks (Multiline)
- Click on setting button

^Select Multiple Correct Answer and check for correct answer
- Visit to website.
- Login to website.
- visit editor area
- click on Fill In the Blanks (Multiline)
- Click on setting button
- Select Answer setting
- Click out of the modal box
- In Preview area Enter your answer
- Click on preview

^Select Multiple Correct Answer and check for incorrect answer
- Visit to website.
- Login to website.
- visit editor area
- click on Fill In the Blanks (Multiline)
- Click on setting button
- Select Answer setting
- Click out of the modal box
- In Preview area Enter your answer
- Click on preview

^Select Case sensitive and check for incorrect answer
- Visit to website.
- Login to website.
- visit editor area
- click on Fill In the Blanks (Multiline)
- Click on setting button 
- Select Case Sensitive, Ignore Special Character, Multiple Correct Answer
- Click out of the modal box 
- In Preview area Enter the single text both of them same original text with any special symbols
- Click on preview    

^Select Ignore Special Character and check for correct answer
- Visit to website.
- Login to website.
- visit editor area
- click on Fill In the Blanks (Multiline)
- Click on setting button
- Select Answer setting
- Click out of the modal box
- Enter your answer
- Click on preview

^Select Case Sensitive, Ignore Special Character, Multiple Correct Answer and check for correct answer
- Visit to website.
- Login to website.
- visit editor area
- click on Fill In the Blanks (Multiline)
- Click on setting button
- Select Answer setting
- Click out of the modal box
- In Preview area Enter your answer
- Click on preview

^In preview area click on correct answer
- Visit to website.
- Login to website.
- visit editor area
- click on Fill In the Blanks (Multiline)
- In preview area click on correct answer
    
@test_data: n/a 
@result: Fill In the Blanks (Multiline) module page open
*/
import { Navbar, login_username, login_password, LoginPage, EditorPage } from '../../../../page-objects/pages/index'
describe("To test Fill In the Blanks", function() {
    beforeEach('This is login', function() {
            cy.fixture('global').then(data => {
                cy.visit(data.url)
                Navbar.clickOnLogin()
                LoginPage.loginPage(login_username, login_password)
                EditorPage.visitEditor(data.url)
                cy.get('#itemLogo > .icomoon-insert-template').eq(1).click({ force: true })
                cy.wait(3000)
                EditorPage.writeTitle()
            })
        })
        /** By Selecting "Fill In the Blanks (Multiline)" */
    it('Fill In the Blanks (Multiline)', function() {
        EditorPage.editorAddResponse()
        cy.get('#defaultMultiAns').type('Testing')
        cy.get('#rows').type('2')
        cy.get('#cols').type('8')
        cy.get('#multiLineCorrect').type('Testing2')
        cy.get('.text-white > span').contains('Done').click({ force: true })
        EditorPage.editorPreview()
        EditorPage.viewReview()
    })
    it('click on setting icon check case sensitive with correct answer', function() {
        EditorPage.settingCaseSensitive()
        EditorPage.editorPreview()
        cy.get('.textarea').type('Data')
        EditorPage.viewReview()
    })
    it('click on setting icon check Ignore Special character', function() {
        EditorPage.settingIgnoreSpecial()
        EditorPage.editorPreview()
        cy.get('.textarea').type('@data')
        EditorPage.viewReview()
    })
    it('click on setting icon check multiple with correct answer', function() {
        EditorPage.settingMultipleCheck()
        EditorPage.editorPreview()
        cy.get('.textarea').type('Data')
        EditorPage.viewReview()
    })
    it('click on setting icon check multiple with incorrect answer', function() {
        EditorPage.settingMultipleCheck()
        EditorPage.editorPreview()
        EditorPage.viewReview()
    })
    it('click on setting icon and click all', function() {
        cy.get('.icomoon-new-24px-gear-1').click()
        cy.get(':nth-child(1) > .jss204 > .jss105 > .jss122 > .jss216').click({ force: true })
        cy.get(':nth-child(2) > .jss204 > .jss105 > .jss122 > .jss216').click({ force: true })
        cy.get(':nth-child(3) > .jss204 > .jss105 > .jss122 > .jss216').click({ force: true })
        cy.get('.text-white > span').contains('OK').click({ force: true })
        EditorPage.editorPreview()
        EditorPage.viewReview()
    })
})