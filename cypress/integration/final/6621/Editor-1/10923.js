/*
@author: Anirudha Pratap
@master_project_id: 6621
@phase_id:
@story_id: 10923
@story_name: Line Chart
@path: final/6621
@test_case_name: Line Chart
@description : na
@test_steps:
^add Point
-Click on the Plus (+) icon button to add more points

^Delete Point
-Click on the Delete icon button to delete the last point added

^Delete Point
-Click on the Delete icon button to delete the points
-Delete all the points and when last point is left and you click on delete it should a dialog box with message saying "Default Item(s) cannot be Deleted".
-Click OK. Last point should not be deleted

^width of chart
-click on the pencil icon and the open modal box
-in the modal box there is first option of Width
-width feild is require value you can't leave blank
-There is set default value as 550
-you can change the width according to you
-after that click on the ok Button

^height of chart
-click on the pencil icon and the open modal box
-in the modal box there is option of Height
-Height feild is require value you can't leave blank
-There is set default value as 500
-you can change the Height according to your requirement.
-after that click on the ok Button

^Set the chart title
-click on the pencil icon and the open modal box
-in the modal box there is option of Title
-There is set default Title as Line chart
-click on the Title feild and give Title 
-after that click on the ok Button

^give the X-axis Title 
-click on the pencil icon and the open modal box
-in the modal box there is option of X-axis Title
-There is set default X-axis Title  as Years
-click on the Title feild and give X-axis Title 
-after that click on the ok Button

^give the Y-axis Title 
-click on the pencil icon and the open modal box
-in the modal box there is option of Y-axis Title
-There is set default Y-axis Title  as Years
-click on the Title feild and give Y-axis Title 
-after that click on the ok Button

^X (enter multiple values):
-click on the pencil icon and the open modal box
-in the modal box there is option of X (enter multiple values): in this field there are three filed min max and interval
-Enter the min value less than 1, it should show a message "Value must be greater than 1"
-Enter the max value equal to the interval value, it should show a message "Value must be greater than interval"
-Enter the internal value less than 1, it should show a message "Value must be greater than 1"
-Now enter the correct values in Min, Max and Interval
-Click the OK button

^Y (enter multiple values):
-click on the pencil icon and the open modal box
-in the modal box there is option of Y (enter multiple values): in this field there are three filed min max and interval
-Enter the min value less than 1, it should show a message "Value must be greater than 1"
-Enter the max value equal to the interval value, it should show a message "Value must be greater than interval"
-Enter the internal value less than 1, it should show a message "Value must be greater than 1"
-Now enter the correct values in Min, Max and Interval
-Click the OK button

^change color
-click on the pencil icon and the open modal box
-in the modal box there is option of Set Color in this section there are four option to set the color
-Select any of the option
-After that click on the ok Button.

^Reset the previous set data
-click on the pencil icon and the open modal box 
-Set all the values in the fields given.
-Click Reset.
-It resets the previous values

^check correct answer
-Add the + icon to add more points
-Drag the points to set the correct answer in the authoring area
-In the preview area, add points and drag the points as you have set the correct answer in authoring area
-It should correct answer message
-Click the review toggle to show the correct answers.

^check incorrect answer
-Add the + icon to add more points
-Drag the points to set the correct answer in authoring area
-In the preview area, add bars and drag the points incorrectly
-It should incorrect answer message
-Click the review toggle to get the correct answers.

^type_of_chart
-click on the pencil icon and the open modal box
-in the modal box there is option of Type
-there is 3 type of chart and default type is Column
-Click on the Type feild and select the type
-after that click on the ok Button

@test_data: n/a
@result: open line chart module
*/
import { Navbar, login_username, login_password, LoginPage, EditorPage } from '../../../../page-objects/pages/index' 
describe("line_chart testing", function() {
    beforeEach('This is login', function() {
            cy.fixture('global').then(data => {
                cy.visit(data.url)
                Navbar.clickOnLogin()
                LoginPage.loginPage(login_username, login_password)
                EditorPage.visitEditor(data.url)
                cy.get('.icomoon-linechart').click({ force: true })
            })
        })
        //Add points and Delete Point
    it('Add points and Delete Point', function() {
            cy.get('.ui-resizable > .align_author > :nth-child(1) > [data-original-title="Add"] > .icomoon-plus').click({ force: true })
            cy.get('.ui-resizable > .align_author > :nth-child(1) > [data-original-title="Delete"] > .icomoon-new-24px-delete-1').click({ force: true })
        })
        //click and delete points
    it('click and delete points', function() {
            cy.wait(5000)
            cy.get('.ui-resizable > .align_author > :nth-child(1) > [data-original-title="Delete"] > .icomoon-new-24px-delete-1').click({ force: true })
            cy.wait(2000)
            cy.get('.ui-resizable > .align_author > :nth-child(1) > [data-original-title="Delete"] > .icomoon-new-24px-delete-1').click({ force: true })
            cy.wait(2000)
            cy.get('.ui-resizable > .align_author > :nth-child(1) > [data-original-title="Delete"] > .icomoon-new-24px-delete-1').click({ force: true })
            cy.contains('Default Item(s) can not be Deleted').should('be.visible')
            cy.get('.confirm').click({ force: true })
        })
        //Edit the line chart
    it('Edit the line chart', function() {
            cy.get('.icomoon-24px-edit-1').click({ force: true })
            cy.get('#chart-width').clear().type('400', { force: true })
            cy.get('#chart-height').clear().type('400', { force: true })
            cy.get('#xlabel').clear().type('Years', { force: true })
            cy.get('#ylabel').clear().type('Quantity', { force: true })
            cy.get('#color').select('Primary', { force: true })
            cy.get('#xmin').clear().type('10', { force: true })
            cy.get('#xmax').clear().type('150', { force: true })
            cy.get('#xinterval').clear().type('10', { force: true })
            cy.get('#ymin').clear().type('10', { force: true })
            cy.get('#ymax').clear().type('200', { force: true })
            cy.get('#yinterval').clear().type('10', { force: true })
            cy.get('.addElement').click({ force: true })
            EditorPage.editorPreview()
            cy.contains('Review').click({ force: true })
            cy.get('#sm_controller > :nth-child(1)').click({ force: true })
            cy.get('#sm_controller > :nth-child(1)').should("have.class", "active")
            cy.get('.your-ans').click({ force: true })
            cy.get('.your-ans').should("have.class", "active")
        })
        //Edit the Histogram
    it('Edit the Histogram', function() {
            cy.get('.icomoon-24px-edit-1').click({ force: true })
            cy.get('#chart-width').clear().type('400', { force: true })
            cy.get('#chart-height').clear().type('400', { force: true })
            cy.get('#chart-type').select('Histogram', { force: true })
            cy.get('#xlabel').clear().type('Years', { force: true })
            cy.get('#ylabel').clear().type('Quantity', { force: true })
            cy.get('#chart_title').clear().type('Histogram', { force: true })
            cy.get('#color').select('Primary', { force: true })
            cy.get('#xmin').clear().type('10', { force: true })
            cy.get('#xmax').clear().type('150', { force: true })
            cy.get('#xinterval').clear().type('10', { force: true })
            cy.get('#ymin').clear().type('10', { force: true })
            cy.get('#ymax').clear().type('200', { force: true })
            cy.get('#yinterval').clear().type('10', { force: true })
            cy.get('.addElement').click({ force: true })
        })
        //reset the line chart
    it('reset the line chart', function() {
        cy.get('.icomoon-24px-edit-1').click({ force: true })
        cy.get('.resetElement').click({ force: true })
    })
})