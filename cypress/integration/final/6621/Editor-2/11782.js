/*
@author: Anirudha Pratap
@master_project_id: 6621
@phase_id: 
@story_id:
@story_name: Plot cosine
@path: final/6621
@test_case_name: Plot cosine.js
@description: Plot cosine
@test_steps:
^delete _points
-Click on the delete icon.
-A dialog box will appear with message "Click the last plotted point of the item to delete the item!"
-Click OK, Now the delete icon becomes active.
-Click on the required point which you want to delete.Click the last plotted point of the item.
-Repeat step 1 to 4 if you want to delete more cosine waves.
-Note: The last plotted point will be the crest and trough point of the cosine wave. (https://www.screencast.com/t/3TFZnmwo3nPh)
-Also on hover of the point Delete word will appear on the last plotted point but not on the first plotted point of that cosine wave.

^Graph width
-Click on the pencil icon
-Leave the width textbox blank, it should should a message to fill out this field
-Now, fill the value for the width and Click OK.

^Graph Height
-Click on the pencil icon
-Leave the height textbox blank, it should should a message to fill out this field
-Now, fill the value for the height and Click OK.

^set the X and Y Axis coordinate value
-Click on the pencil icon
-Enter the x-axis and y-axis value as 1 & 1 respecitively
-It should show a message that "Value must be greater than or equal to 2."
-Then enter the correct values

^set the X-interval and Y-interval Axis coordinate value
-Click on the pencil icon
-Leave the x-interval and y-interval blank, it should show message to fill out this field.
-Now give the values in x-interval and y-interval.
-Click on the OK button.

^Check correct answer
-Click on the pencil icon
-Fill out all the fields
-Click OK.
-Plot the correct answer in the authoring area (You need to give 2 points to make a cosine wave)
-Go to the preview area and mark the correct answer by clicking on the correct points to make the correct cosine waves.
-It should message of correct answer

^Check incorrect answer
-Click on the pencil icon
-Fill out all the fields
-Click OK.
-Plot the correct answer in the authoring area (You need to give 2 points to make a cosine wave)
-Go to the preview area and mark the incorrect answer by clicking on the incorrect points to make the incorrect cosine waves
-It should message of incorrect answer

^Graph Type
-click on the pencil icon
-Choose any other type of graph
-Click OK

@test_data: n/a
@result: Plot cosine modal open
*/
import { Navbar, login_username, login_password, LoginPage, EditorPage } from '../../../../page-objects/pages/index'
describe("Plot Lines open", function() {
    beforeEach('This is login', function() {
            cy.fixture('global').then(data => {
                cy.visit(data.url)
                Navbar.clickOnLogin()
                LoginPage.loginPage(login_username, login_password)
                EditorPage.visitEditor(data.url)
                cy.get('.icomoon-cosine').click({ force: true })
            })
        })
        //plot polygon edit
    it('plot cosine for edit', function() {
        cy.get('.icomoon-24px-edit-1').click({ force: true })
        cy.get('#graph-width').clear().type('500', { force: true })
        cy.get('#graph-height').clear().type('500', { force: true })
        cy.get('#graph-type').select('Polygon Graph', { force: true })
        cy.get('#polygon_type').select('X', { force: true })
        cy.get('#xaxis').clear().type('8', { force: true })
        cy.get('#yaxis').clear().type('8', { force: true })
        cy.get('#xtickdistance').clear().type('2', { force: true })
        cy.get('#ytickdistance').clear().type('2', { force: true })
        cy.get('[type="button"]').contains('OK').click({ force: true })
        cy.get('#edi_tabs > :nth-child(2) > a').click({ force: true })
        cy.get('#ID0Preview_foreignObj').click({ force: true })
        cy.wait(3000);
        EditorPage.plotReview()
    })

    //plot with delete
    it('plot for delete', function() {
            cy.get('#ID0_foreignObj').click({ force: true })
            cy.get('#deleteElm > .btn > .icomoon-new-24px-delete-1').click({ force: true })
            cy.get('.confirm').click({ force: true })
            cy.get('#ID0_foreignObj').click({ force: true })
        })
        //plot\ check answer
    it('plot for answer', function() {
        cy.get('#edi_tabs > :nth-child(2) > a').click({ force: true })
        cy.get('#ID0Preview_foreignObj').click({ force: true })
        EditorPage.plotReview()
    })
})