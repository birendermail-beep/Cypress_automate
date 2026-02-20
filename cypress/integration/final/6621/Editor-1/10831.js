/*
@author: Anirudha Pratap
@master_project_id: 6621
@phase_id: 10858
@story_id: 10831
@story_name: Align Match
@path: final/6607/Student
@test_case_name: Align Match.js
@test_steps:
    ^Open Align Match Module
    -visit the website(url + "/editor/?action=new")
    -Login into website
    -go to editor area 
    -Search Align Match and click Align Match

    ^Add Category
    -visit the website(url + "/editor/?action=new")
    -Login into website
    -go to editor area 
    -Search Align Match and click Align Match
    -Click the Add Category button
    -It will generate 1 column of category

    ^Delete Category
    -visit the website(url + "/editor/?action=new")
    -Login into website
    -go to editor area 
    -Search Align Match and click Align Match
    -Click the delete icon given in the columns
    -It will delete the category.

    ^Minimum limit of categories to be deleted.
    -visit the website(url + "/editor/?action=new")
    -Login into website
    -go to editor area 
    -Search Align Match and click Align Match
    -Click the delete icon given in the columns
    -When 2 categories are left then a warning message should appear

    ^Maximum limit of category.
    -visit the website(url + "/editor/?action=new")
    -Login into website
    -go to editor area 
    -Search Align Match and click Align Match
    -Click on Add Category button.
    -When 4 categories are there it should give a warning message

    ^Add Items
    -visit the website(url + "/editor/?action=new")
    -Login into website
    -go to editor area 
    -Search Align Match and click Align Match
    -Click the Add Items button
    -It will generate 1 row of items.

    ^Maximum limit of Items to be added.
    -visit the website(url + "/editor/?action=new")
    -Login into website
    -go to editor area 
    -Search Align Match and click Align Match
    -Click on Add Items button.
    -When 4 items are there it should give a warning message

    ^Delete Items
    -visit the website(url + "/editor/?action=new")
    -Login into website
    -go to editor area 
    -Search Align Match and click Align Match
    -Click the delete icon given in the rows
    -It will delete the items.

    ^Minimum limit of Items to be deleted.
    -visit the website(url + "/editor/?action=new")
    -Login into website
    -go to editor area 
    -Search Align Match and click Align Match
    -Click the delete icon given in the rows
    -When 2 rows are left then a warning message should appear

    ^Upload image
    -visit the website(url + "/editor/?action=new")
    -Login into website
    -go to editor area 
    -Search Align Match and click Align Match
    -Click on the upload image icon.
    -Select the image which you want to upload
    -The image should be uploaded

    ^Checking the answer
    -visit the website(url + "/editor/?action=new")
    -Login into website
    -go to editor area 
    -Search Align Match and click Align Match
    -After creating question
    -Go to the review area
    -Match the correct answer by clicking on the previous and next button
    -Click on match
    -Match all the options accordingly.
    -It should show correct

    ^You need to create new question from editor area
    -visit the website(url + "/editor/?action=new")
    -Login into website
    -go to editor area 
    -Search Align Match and click Align Match
    -Click on "Create New Question" button
    -Now add 2 category name for example -(State, Capital)
    -Now add 2 Items and add image/ or write name for example - (In state - uttarpradesh, maharashtra and In capital - lucknow, mumbai)
    -Now perform the task in preview mode and check answer 

    ^Add multiple categories
    -visit the website(url + "/editor/?action=new")
    -Login into website
    -go to editor area 
    -Search Align Match and click Align Match
    -Try to add more than 4 categories
    -Try to add more than 4 items
    ^Correctly perform the question
    -visit the website(url + "/editor/?action=new")
    -Login into website
    -go to editor area 
    -Search Align Match and click Align Match
    -match all the items correctly

    ^Try to match 1 item incorrectly
    -visit the website(url + "/editor/?action=new")
    -Login into website
    -go to editor area 
    -Search Align Match and click Align Match
    -try to mismatch one item

    ^You can provide text or can upload image in the item field
    -visit the website(url + "/editor/?action=new")
    -Login into website
    -go to editor area 
    -Search Align Match and click Align Match
    -Add item in the question
    -click on image icon
    -Upload image
@test_data: n/a
@result: Open Align Match Module
*/

import { Navbar, login_username, login_password, LoginPage, EditorPage } from '../../../../page-objects/pages/index'
describe("Align Match Test Case", function() {
    beforeEach('This is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            EditorPage.visitEditor(data.url)
                // for test case  ID 5.1
            cy.get('.grid-item').contains("Align Match").click({ force: true })
        })
    })
    it('Delete Category Until Warning', function() {
        // for add category button test case  ID 5.2
        cy.get('#category_2 > .d-flex > .btn_category > .icomoon-new-24px-delete-1').click()
            // Delete Category Test case ID 5.3
        cy.get('#category_3 >  .d-flex > .btn_category > .icomoon-new-24px-delete-1').click().then(() => {
            cy.wait(2000)
                // Minimum limit of categories to be deleted Test case ID 5.4
            cy.get('[data-cy=errormsg]').should("contain", "You can't have less than 2 categories.")
        })
    })

    it('Add Category Until Warning', function() {
        // Maximum limit of category. Test case ID 5.5
        cy.get('span').contains('Add Category').click()
        cy.get('span').contains('Add Category').click().then(() => {
                cy.wait(2000)
                cy.get('[data-cy=errormsg]').should("contain", "You can't have more than 4 categories.")
            })
            // Maximum limit of Items to be added. test case ID 5.7
        cy.get('span').contains('Add Item').click().then(() => {
            cy.wait(2000)
            cy.get('[data-cy=errormsg]').should("contain", "You can't have more than 4 rows.")
        })
    })

    it('Add one Item', function() {
        // Delete Items Test case ID 5.8
        cy.get('#tags_2').click()
        cy.get('#tags_3').click()
            // Minimum limit of Items to be deleted. Test case ID 5.9
        cy.get('#tags_1').click()
        cy.wait(3000)
            // Add Items Test case ID 5.6
        cy.get('span').contains('Add Item').click()
        cy.get('span').contains('Add Item').click()
        cy.wait(3000)
    })

    it('Create New Question from editor area', function() {
        // create new question from editor area Test case ID create_newItem1.
        cy.get('#category_3 > .d-flex > .btn_category > .icomoon-new-24px-delete-1').click()
        cy.get('#tags_4').click()
        cy.get('#tags_3').click()
        cy.get('#editorViewPane > .nav > :nth-child(2) > a').click()
        cy.get(':nth-child(2) > .nextbutton > .icomoon-arrow-right-2').click({force:true})
        cy.get(':nth-child(1) > .nextbutton > .icomoon-arrow-right-2').click({force:true})
        cy.get(':nth-child(2) > .nextbutton > .icomoon-arrow-right-2').click({force:true})
        cy.get('.matchbutton').click({force:true})
        cy.get(':nth-child(1) > .prevbutton > .icomoon-arrow-left').click({force:true})
        cy.get('.matchbutton').click({force:true})
        cy.get(':nth-child(1) > .prevbutton > .icomoon-arrow-left').click({force:true})
        cy.get('.matchbutton').click({force:true})
    })

    it('Add multiple categories', function() {
        // Create new question in Module. Test case ID 5.10
        cy.get('span').contains('Add Category').click()
        cy.get('span').contains('Add Category').click()
        cy.get('[data-cy=errormsg]').should("contain", "You can't have more than 4 categories.")
        cy.get('span').contains('Add Item').click()
        cy.get('[data-cy=errormsg]').should("contain", "You can't have more than 4 rows.")
    })

    it('match 1 item incorrectly', function() {
        // Try to match 1 item incorrectly.
        cy.get('#edi_tabs > :nth-child(2) > a').click()
        cy.get(':nth-child(1) > .nextbutton').click()
        cy.get(':nth-child(2) > .nextbutton').click()
        cy.get('.matchbutton').click()
    })

    it('Correctly perform the question', function() {
        // Correctly perform the question
        cy.get('#edi_tabs > :nth-child(2) > a').click()
        cy.get(':nth-child(1) > .nextbutton').click()
        cy.get(':nth-child(2) > .nextbutton').click()
        cy.get('.matchbutton').click()
        cy.get(':nth-child(3) > .nextbutton')
    })

    it('upload image', function() {
        cy.get('#item_1 > .fileUpload').click();
    })

    it('check answer', function() {
        cy.get('#edi_tabs > :nth-child(2) > a').click();
        cy.contains('Review').click();
        cy.get('#reviewCorrectAns').click();
    })

});
