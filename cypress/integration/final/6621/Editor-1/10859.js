/*
@author: Vikas Shukla
@master_project_id: 6621
@phase_id: 10166, 10858, 10974
@story_id: 10859
@story_name: Histogram
@area: final/6621
@test_case_name: Histogram.js
@description: n/a
@test_steps: 

^add bar
-login to page
-visit the editor dashboard
-Click on the Plus (+) icon button to add more bars

^Delete bars added lastly
-login to page
-visit the editor dashboard
-Click on the Delete icon button to delete the last bar added

^Delete last bar left
-login to page
-visit the editor dashboard
-Click on the Delete icon button to delete the bars 
-Delete all the bars and when last bar is left and you click on delete it should a dialog box with message saying "Default Item(s) cannot be Deleted".
-Click OK. Last bar should not be deleted

^width of chart
-login to page
-visit the editor dashboard
-click on the pencil icon and the open modal box
-in the modal box there is first option of Width
-width field is require value you can't leave blank
-There is set default value as 550
-you can change the width according to you
-after that click on the ok Button

^height of chart
-login to page
-visit the editor dashboard
-click on the pencil icon and the open modal box
-in the modal box there is option of Height
-Height field is require value you can't leave blank
-There is set default value as 500
-you can change the Height according to your requirement.
-after that click on the ok Button

^Set the chart title
-login to page
-visit the editor dashboard
-click on the pencil icon and the open modal box
-in the modal box there is option of Title
-There is set default Title as Line chart
-click on the Title field and give Title 
-after that click on the ok Button

^give the X-axis Title 
-login to page
-visit the editor dashboard
-click on the pencil icon and the open modal box
-in the modal box there is option of X-axis Title
-There is set default X-axis Title  as Years
-click on the Title field and give X-axis Title 
-after that click on the ok Button

^give the Y-axis Title 
-login to page
-visit the editor dashboard
-click on the pencil icon and the open modal box
-in the modal box there is option of Y-axis Title
-There is set default Y-axis Title  as Years
-click on the Title field and give Y-axis Title 
-after that click on the ok Button

^X (enter multiple values)
-login to page
-visit the editor dashboard
-click on the pencil icon and the open modal box
-in the modal box there is option of X (enter multiple values): in this field there are three filed min max and interval
-Enter the min value less than 1, it should show a message "Value must be greater than 1"
-Enter the max value equal to the interval value, it should show a message "Value must be greater than interval"
-Enter the internal value less than 1, it should show a message "Value must be greater than 1"
-Now enter the correct values in Min, Max and Interval
-Click the OK button

^Y (enter multiple values)
-login to page
-visit the editor dashboard
-click on the pencil icon and the open modal box
-in the modal box there is option of Y (enter multiple values): in this field there are three filed min max and interval
-Enter the min value less than 1, it should show a message "Value must be greater than 1"
-Enter the max value equal to the interval value, it should show a message "Value must be greater than interval"
-Enter the internal value less than 1, it should show a message "Value must be greater than 1"
-Now enter the correct values in Min, Max and Interval
-Click the OK button

^Reset the previous set data
-login to page
-visit the editor dashboard
-click on the pencil icon and the open modal box 
-Set all the values in the fields given.
-Click Reset.
-It resets the previous values

^check correct answer
-login to page
-visit the editor dashboard
-Add the + icon to add more bars
-Drag the bars to set the correct answer in the authoring area
-In the preview area, add bars and drag the bars as you have set the correct answer in authoring area
-It should correct answer message
-Click the review toggle to show the correct answers.

^check incorrect answer 
-login to page
-visit the editor dashboard
-Add the + icon to add more bars
-Drag the bars to set the correct answer in authoring area
-In the preview area, add bars and drag the bars incorrectly
-It should incorrect answer message
-Click the review toggle to get the correct answers.

^change the type of chart
-login to page
-visit the editor dashboard
-click on the pencil icon and the open modal box
-in the modal box there is option of Type
-there is 3 type of chart and default type is Column
-Click on the Type field and select the type
-after that click on the ok Button

@test_data: n/a
@result: open all tabs and export of educator page
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe('ebook area testing', function() {
    beforeEach('This is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/editor/?action=new");
            cy.get('.grid-item').contains("Histogram").click({ force: true })
            cy.wait(5000);

        })
    })

    //** Add bars. */ 
    it('Add title', function() {
        cy.get('.ui-resizable > .align_author > :nth-child(1) > [data-original-title="Add"]').click()
        cy.get('.ui-resizable > .align_author > :nth-child(1) > [data-original-title="Add"]').click()
        cy.get('.ui-resizable > .align_author > :nth-child(1) > [data-original-title="Add"]').click()

        //** Delete bar */
        cy.get('.ui-resizable > .align_author > :nth-child(1) > [data-original-title="Delete"]').click()
        cy.get('.ui-resizable > .align_author > :nth-child(1) > [data-original-title="Delete"]').click()

        //** Delete bar while warnigs not showing  */
        cy.get('.ui-resizable > .align_author > :nth-child(1) > [data-original-title="Delete"]').click()
        cy.get('.ui-resizable > .align_author > :nth-child(1) > [data-original-title="Delete"]').click()
        cy.get('.ui-resizable > .align_author > :nth-child(1) > [data-original-title="Delete"]').click()
        cy.get('.ui-resizable > .align_author > :nth-child(1) > [data-original-title="Delete"]').click()
        cy.wait(5000);
        cy.get('h2').contains('Default Item(s) can not be Deleted')
    })

    //** Add bars. */ 
    it('Add title', function() {
        cy.get('#option-toolbar > .btn-group > .btn').click()
        cy.get('#chart-width').type('{selectall}{backspace}')
        cy.get('#chart-height').clear().type('400')
        cy.get('#chart-width').type('450')
        cy.get('#chart_title').clear().type('Histogram')
        cy.get('#xlabel').clear().type('Year')
        cy.get('#ylabel').clear().type('Quantity')
        cy.get('#xmin').clear().type('10')
        cy.get('#xmax').clear().type('150')
        cy.get('#xinterval').clear().type('10')
        cy.get('#ymin').clear().type('10')
        cy.get('#ymax').clear().type('200')
        cy.get('#yinterval').clear().type('20')
        cy.get('button').contains('OK').click()
        cy.get('#option-toolbar > .btn-group > .btn').click({ force: true })
        cy.wait(10000)
        cy.get('.resetElement').click({ force: true })
    })

    //** Change type of graph */ 
    it('Change type of graph', function() {
        cy.get('#option-toolbar > .btn-group > .btn').click();
        cy.wait(2000);
        cy.get('#chart-type').select('Column');
        cy.get('.addElement').click();
        //cy.get('#highcharts-f4a3jc5-12 > .highcharts-root > .highcharts-series-group > .highcharts-series > [x="175.5"]').should('exist');
        cy.get('#option-toolbar > .btn-group > .btn').click();
        cy.wait(2000);
        cy.get('#chart-type').select('Line');
        cy.get('.addElement').click();
        cy.wait(2000);
        //cy.get('#highcharts-j8264kb-52 > .highcharts-root > .highcharts-series-group > .highcharts-series > .highcharts-tracker').should('exist');
    })
});