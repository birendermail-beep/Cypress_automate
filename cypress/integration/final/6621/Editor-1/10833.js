/*
@author: Anirudha Pratap
@master_project_id: 6621
@phase_id: 10858
@story_id: 10833
@story_name: Bar Chart
@path: final/6607/Student
@test_case_name: Bar Chart.js
@test_steps:
^add Point
-visit the website(url + "/editor/?action=new")
-Login into website
-go to editor area 
-click search type bar chart click on bar chart
-Click on the Plus (+) icon button to add more bars

^Delete Point
-description: click and delete points
-visit the website(url + "/editor/?action=new")
-Login into website
-go to editor area 
-click search type bar chart click on bar chart
-Click on the Delete icon button to delete the last bar added

^Delete Point
-description: click and delete points
-visit the website(url + "/editor/?action=new")
-Login into website
-go to editor area 
-click search type bar chart click on bar chart
-Click on the Delete icon button to delete the bars
-Delete all the bars and when last bar is left and you click on delete it should a dialog box with message saying "Default Item(s) cannot be Deleted".
-Click OK. Last bar should not be deleted

^width of chart
-description: set the width of chart
-visit the website(url + "/editor/?action=new")
-Login into website
-go to editor area
-click search type bar chart click on bar chart
-click on the pencil icon and the open modal box
-in the modal box there is first option of Width
-width feild is require value you can't leave blank
-There is set default value as 550
-you can change the width according to you
-after that click on the ok Button

^height of chart
-description: set the height of chart
-visit the website(url + "/editor/?action=new")
-Login into website
-go to editor area 
-click search type bar chart click on bar chart
-click on the pencil icon and the open modal box
-in the modal box there is option of Height
-Height feild is require value you can't leave blank
-There is set default value as 500
-you can change the Height according to your requirement.
-after that click on the ok Button

^Set the chart title
-description: set the title of chart
-visit the website(url + "/editor/?action=new")
-Login into website
-go to editor area 
-click search type bar chart click on bar chart
-click on the pencil icon and the open modal box
-in the modal box there is option of Title
-There is set default Title as Bar chart
-click on the Title feild and give Title 
-after that click on the ok Button

^give the X-axis Title
-description: give the X-axis Title 
-visit the website(url + "/editor/?action=new")
-Login into website
-go to editor area 
-click search type bar chart click on bar chart
-click on the pencil icon and the open modal box
-in the modal box there is option of X-axis Title
-There is set default X-axis Title  as Years
-click on the Title feild and give X-axis Title 
-after that click on the ok Button

^give the Y-axis Title
-description: give the Y-axis Title 
-visit the website(url + "/editor/?action=new")
-Login into website
-go to editor area 
-click search type bar chart click on bar chart
-click on the pencil icon and the open modal box
-in the modal box there is option of Y-axis Title
-There is set default Y-axis Title  as Years
-click on the Title feild and give Y-axis Title 
-after that click on the ok Button

^X (enter multiple values)
-description: Set the min max and interval X (enter multiple values)
-visit the website(url + "/editor/?action=new")
-Login into website
-go to editor area 
-click search type bar chart click on bar chart
-click on the pencil icon and the open modal box
-in the modal box there is option of X (enter multiple values): in this field there are three filed min max and interval
-Enter the min value less than 1, it should show a message "Value must be greater than 1"
-Enter the max value equal to the interval value, it should show a message "Value must be greater than interval"
-Enter the internal value less than 1, it should show a message "Value must be greater than 1"
-Now enter the correct values in Min, Max and Interval
-Click the OK button

^Y (enter multiple values)
-description: Set the min max and interval Y (enter multiple values)
-visit the website(url + "/editor/?action=new")
-Login into website
-go to editor area 
-click search type bar chart click on bar chart
-click on the pencil icon and the open modal box
-in the modal box there is option of Y (enter multiple values): in this field there are three filed min max and interval
-Enter the min value less than 1, it should show a message "Value must be greater than 1"
-Enter the max value equal to the interval value, it should show a message "Value must be greater than interval"
-Enter the internal value less than 1, it should show a message "Value must be greater than 1"
-Now enter the correct values in Min, Max and Interval
-Click the OK button

^change color
-description: Set the color 
-visit the website(url + "/editor/?action=new")
-Login into website
-go to editor area 
-click search type bar chart click on bar chart
-click on the pencil icon and the open modal box
-in the modal box there is option of Set Color in this section there are four option to set the color
-Select any of the option
-After that click on the ok Button.

^Reset the previous set data
-description: Reset the previous data
-visit the website(url + "/editor/?action=new")
-Login into website
-go to editor area 
-click search type bar chart click on bar chart
-click on the pencil icon and the open modal box 
-Set all the values in the fields given.
-Click Reset.
-It resets the previous values

^check correct answer
-description: Check correct answer
-visit the website(url + "/editor/?action=new")
-Login into website
-go to editor area 
-click search type bar chart click on bar chart
-Add the + icon to add more bars
-Drag the bars to set the correct answer in authoring area
-In the preview area, add bars and drag the bars as you have set the correct answer in authoring area
-It should correct answer message
-Click the review toggle to show the correct answers.

^check incorrect answer
-description: Check incorrect answer
-visit the website(url + "/editor/?action=new")
-Login into website
-go to editor area 
-click search type bar chart click on bar chart
-Add the + icon to add more bars
-Drag the bars to set the correct answer in authoring area
-In the preview area, add bars and drag the bars incorrectly
-It should incorrect answer message
-Click the review toggle to get the correct answers.

^type of chart
-description: change the type of chart
-visit the website(url + "/editor/?action=new")
-Login into website
-go to editor area 
-click search type bar chart click on bar chart
-click on the pencil icon and the open modal box
-in the modal box there is option of Type
-there is 3 type of chart and default type is Column
-Click on the Type feild and select the type
-after that click on the ok Button

@test_data: n/a
@result: Open Bar Chart Module
*/
import { Navbar, login_username, login_password, LoginPage, EditorPage } from '../../../../page-objects/pages/index'
describe('ebook area testing', function() {
    beforeEach('This is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            EditorPage.visitEditor(data.url)
            cy.get('.grid-item').contains("Bar Chart").click({ force: true })
        })
    })

    it('Add Points', function() {
        // Add points
        cy.get('.ui-resizable > .align_author > :nth-child(1) > [data-original-title="Add"]').click()
        cy.get('.ui-resizable > .align_author > :nth-child(1) > [data-original-title="Add"]').click()
        cy.get('.ui-resizable > .align_author > :nth-child(1) > [data-original-title="Add"]').click()
        cy.wait(3000)
            // Delete points
        cy.get('.ui-resizable > .align_author > :nth-child(1) > [data-original-title="Delete"]').click()
            // Delete until msg not showing for Default node
        cy.get('.ui-resizable > .align_author > :nth-child(1) > [data-original-title="Delete"]').click()
        cy.get('.ui-resizable > .align_author > :nth-child(1) > [data-original-title="Delete"]').click()
        cy.get('.ui-resizable > .align_author > :nth-child(1) > [data-original-title="Delete"]').click({ force: true })
        cy.get('.ui-resizable > .align_author > :nth-child(1) > [data-original-title="Delete"]').click({ force: true })
    })

    it('Set The Cart Title', function() {
        cy.get('#option-toolbar > .btn-group > .btn').click()
        cy.get('#chart_title').clear().type('{selectall}').type('{backspace}')
        cy.get('#chart_title').type('New Title')
        cy.get('.addElement').click()
        cy.get('#option-toolbar > .btn-group > .btn').click({ force: true })
        cy.get('#chart_title').invoke('text')
            .then(text => {
                const first = text;
                console.log(first)
            })
    })

    it('To check the all edit option ', function() {
        cy.get('#option-toolbar > .btn-group > .btn').click()
            // Clear text box
        cy.get('#chart-width').clear().type('{selectall}').type('{backspace}')
            // text box should not blank
        cy.get('.error').should('contain', 'Please fill out this field')
            // fill new width 
        cy.get('#chart-width').type('400')
        cy.get('#chart-height').clear().type('{selectall}').type('{backspace}')
            // text box should not blank
        cy.get('.error').should('contain', 'Please fill out this field')
            // fill new height
        cy.get('#chart-height').type('400')
            // change the type of chart
        cy.get('#chart-type').select('Line')
        cy.get('#chart_title').clear().type('{selectall}').type('{backspace}')
            // fill new Title
        cy.get('#chart_title').type('New Title')
        cy.get('#xlabel').clear().type('{selectall}').type('{backspace}')
            // fill new x-axis title
        cy.get('#xlabel').type('Year')
        cy.get('#ylabel').clear().type('{selectall}').type('{backspace}')
            // fill new y-axis title
        cy.get('#ylabel').type('Quantity')
            // fill new color
        cy.get('#color').select('Warning')
        cy.get('#xmin').clear().type('{selectall}').type('{backspace}')
            // fill new xmin value
        cy.get('#xmin').type('10')
        cy.get('#xmax').clear().type('{selectall}').type('{backspace}')
            // fill new xmax value
        cy.get('#xmax').type('150')
        cy.get('#xinterval').clear().type('{selectall}').type('{backspace}')
            // fill new xintreval value
        cy.get('#xinterval').type('10')
        cy.get('#ymin').clear().type('{selectall}').type('{backspace}')
            // fill new ymin value
        cy.get('#ymin').type('10')
        cy.get('#ymax').clear().type('{selectall}').type('{backspace}')
            // fill new ymax value
        cy.get('#ymax').type('200')
        cy.get('#yinterval').clear().type('{selectall}').type('{backspace}')
            // fill new yinterval value
        cy.get('#yinterval').type('20')
        cy.get('.addElement').click()
        cy.get('#option-toolbar > .btn-group > .btn').click()
        cy.get('.resetElement').click()
    })
});