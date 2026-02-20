/*
@author: Anirudha Pratap
@master_project_id: 6621
@phase_id: 
@story_id: 10966
@story_name: Plot Circles
@path: final/6621
@test_case_name: Plot Circles.js
@description: Plot Circles
@test_steps:
^delete _points
-Click on the delete icon.
-A dialog box will appear with message "Click the plotted points to delete them."
-Click OK, Now the delete icon becomes active.
-Click on the required point which you want to delete. You can click any of the 2 points of the circle, the center or the point on the circumference of the circle to delete the cirlce
-Repeat step 1 to 4 if you want to delete more points.

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
-Plot the correct answer in the authoring area
-Go to the preview area and mark the correct answer by clicking on the correct points to make the correct circles.
-It should message of correct answer

^Check incorrect answer
-Click on the pencil icon
-Fill out all the fields
-Click OK.
-Plot the correct answer in the authoring area
-Go to the preview area and mark the incorrect answer by clicking on the incorrect points to make the incorrect circles
-It should message of incorrect answer

^Graph Type
-click on the pencil icon
-Choose any other type of graph
-Click OK

@test_data: n/a
@result: plot circle module open
*/

import { Navbar, login_username, login_password, LoginPage, EditorPage } from '../../../../page-objects/pages/index'
describe("Plot circle", function() {
    beforeEach('This is login', function() {
            cy.fixture('global').then(data => {
                cy.visit(data.url)
                Navbar.clickOnLogin()
                LoginPage.loginPage(login_username, login_password)
                EditorPage.visitEditor(data.url)
                cy.get('.icomoon-stats-up').click({ force: true })
                cy.get('.icomoon-circle').click({ force: true })
                cy.wait(4000);
            })
        })
        //plot all edit
    it('plot circle for edit', function() {

            cy.get('.icomoon-24px-edit-1').click({ force: true })
            cy.get('#graph-width').clear().type('500', { force: true })
            cy.get('#graph-height').clear().type('500', { force: true })
            cy.get('#graph-type').select('Circle Graph', { force: true })
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
        cy.get('#ID0_foreignObj').click()
        cy.get('#deleteElm > .btn').click()
        cy.wait(5000);
        cy.get('.confirm').click({ force: true })
        cy.get('#ID0_foreignObj').click()
    })
        //plot\ check answer
    it('plot for answer', function() {
        cy.get('#edi_tabs > :nth-child(2) > a').click({ force: true })
        cy.get('#ID0Preview_foreignObj').click({ force: true })
        EditorPage.plotReview()
    })
})