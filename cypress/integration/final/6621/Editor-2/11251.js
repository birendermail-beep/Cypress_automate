/*
@author: Anirudha Pratap
@master_project_id: 6621
@phase_id: n/a
@story_id: 11251
@story_name: Fill in the blanks (with drag and drop)
@path: final/6621
@test_case_name: Fill in the blanks (with drag and drop).js
@description:
@test_steps: 
    ^Open the module
    -Visit to website.
    -Login to website.
    -visit editor area 
    -Search Fill in the blanks (with drag and drop)
    -Click on Fill in the blanks (with drag and drop)
    
    ^Add Drag and drop box
    -Visit to website.
    -Login to website.
    -visit editor area 
    -Search Fill in the blanks (with drag and drop)
    -Click on Fill in the blanks (with drag and drop)
    -Write a paragraph as a question
    -Right click where you want to add drag and drop box
    -Click Add Response

    ^Check on any checkbox button for correct answer and Drag and drop box added
    -Visit to website.
    -Login to website.
    -visit editor area 
    -Search Fill in the blanks (with drag and drop)
    -Click on Fill in the blanks (with drag and drop)
    -Click on plus button to add list for drag and drop
    -Write text to add drag and drop 
    -Check on any checkbox button for correct answer
    -Click on done button

    ^Leave any of the option blank and check Drag and drop box not added
    -Visit to website.
    -Login to website.
    -visit editor area 
    -Search Fill in the blanks (with drag and drop)
    -Click on Fill in the blanks (with drag and drop)
    -Click on add response 
    -Click on plus button to add list for drag and drop 
    -Leave any of the option blank 
    -Check any checkbox button for correct answer 
    -Click on done button
    
    ^Don't check any check box button for correct answer
    -Visit to website.
    -Login to website.
    -visit editor area 
    -Search Fill in the blanks (with drag and drop)
    -Click on Fill in the blanks (with drag and drop)
    -Click on add response 
    -Click on plus button to add list for drag and drop 
    -Write text to add drag and drop
    -Don't check any check box button for correct answer 
    -Click on done button

    ^Check drag single
    -Visit to website.
    -Login to website.
    -visit editor area 
    -Search Fill in the blanks (with drag and drop)
    -Click on Fill in the blanks (with drag and drop)
    -Click on add response 
    -Click on plus button to add list for drag and drop 
    -Write text to add drag and drop 
    -Check any check box button for correct answer 
    -Drag Single 
    -Click on done button

    ^Check drag single functionality in review
    -Visit to website.
    -Login to website.
    -visit editor area 
    -Search Fill in the blanks (with drag and drop)
    -Click on Fill in the blanks (with drag and drop)
    -In Preview area, drag any one content and drop on blank box
    -Click Review

    ^Uncheck Drag Single and check functionality
    -Visit to website.
    -Login to website.
    -visit editor area 
    -Search Fill in the blanks (with drag and drop)
    -Click on Fill in the blanks (with drag and drop)
    -Click on drag and drop box
    -Uncheck Drag Single
    -Click on done button
    -In preview area drag your answer and drop
    -Click Review

    ^Uncheck Drag Single and check for correct answer
    -Visit to website.
    -Login to website.
    -visit editor area 
    -Search Fill in the blanks (with drag and drop)
    -Click on Fill in the blanks (with drag and drop)
    -Click on drag and drop box
    -Uncheck Drag Single
    -Click on done button
    -In preview area drag all your correct answer and drop
    -Click Review
    
    ^Uncheck Drag Single and check for incorrect answer
    -Visit to website.
    -Login to website.
    -visit editor area 
    -Search Fill in the blanks (with drag and drop)
    -Click on Fill in the blanks (with drag and drop)
    -Click on drag and drop box
    -Uncheck Drag Single
    -Click on done button
    -In preview area drag all answers incorrectly and drop
    -Click Review

@test_data: n/a
@result: fill in the blank drag and drop area
*/
import { Navbar, login_username, login_password, LoginPage, EditorPage } from '../../../../page-objects/pages/index' 
describe("To test Fill In the Blanks", function() {
    beforeEach('This is login', function() {
            cy.fixture('global').then(data => {
                cy.visit(data.url)
                Navbar.clickOnLogin()
                LoginPage.loginPage(login_username, login_password)
                EditorPage.visitEditor(data.url)
                cy.get('.icomoon-fill-drag-drop').click({ force: true })
                cy.wait(2000)
            })
        })
        /** By Selecting "Fill In the Blanks (with drag drop)" */
    it('Fill In the Blanks (with drag drop)', function() {
        EditorPage.writeTitle()
            //Add the response
        EditorPage.editorAddResponse()
        cy.get('[aria-label="Add"]').click({ force: true })
        cy.get('#dragDrop0').type('Testing', { force: true })
        cy.get('[aria-label="Add"]').click({ force: true })
        cy.get('#correctDrag2').click()
        cy.get('.text-white > span').contains('Done').click({ force: true })
        cy.contains('All fields are required').should('be.visible')
        cy.get('#correctDrag1').click()
        cy.get('#correctDrag0').click()
        cy.get('.text-white > span').contains('Done').click({ force: true })
        cy.contains('Please select atleast one correct answer').should('be.visible')
            //check the preview
        EditorPage.delOptions()
        cy.get('#correctDrag0').click({ force: true })
        cy.get('.text-white > span').contains('Done').click({ force: true })
        EditorPage.editorPreview()
        EditorPage.editorDragDrop('#ID2', '#elem1')
        EditorPage.editorDragDrop('#ID0', '#elem2')
        EditorPage.editorDragDrop('#ID2', '#elem3')
        EditorPage.editorDragDrop('#ID3', '#elem0')
        EditorPage.viewReview()
        EditorPage.editorHelp()
    })
    it('Fill In the Blanks (with drag drop) with single drag', function() {
        cy.wait(2000)
        EditorPage.writeTitle()
        cy.get('#fillAuthor').rightclick()
        cy.get('#addToken').click({ force: true })
        cy.get('#drag_single').click({ force: true })
        cy.get('#dragDrop0').type('Testing', { force: true })
        cy.get('.text-white > span').contains('Done').click({ force: true })
        EditorPage.editorPreview()
        EditorPage.editorDragDrop('#ID0', '#elem1')
    })
    it('Fill In the Blanks (with drag drop) with correct answer', function() {
        cy.wait(2000)
        EditorPage.writeTitle()
        EditorPage.editorPreview()
        EditorPage.editorDragDrop('#ID2', '#elem2')
        EditorPage.editorDragDrop('#ID1', '#elem1')
        EditorPage.editorDragDrop('#ID0', '#elem0')
        EditorPage.viewReview()
    })
})