/*
@author: Vikas Shukla
@master_project_id: 6621
@phase_id: 10974-Fix Issues of XML Extraction
@story_id: 11001
@story_name: Slider
@test_case_name: Slider
@description: 
@path: final/6621
@test_steps: 
^Title of the Slider.
-Go to the URL : https://www.ucertify.com/editor/?action=new
-Search Slider and click slider
-Click on Title textbox.
-Enter the title in the box.

^Add sliders
-Click on the add icon.
-Slider should be added.

^Add sliders until the warning comes.
-Click on the add icon..
-Warning message should come after adding 10 sliders

^Delete sliders
-Click on the delete icon of the slider.
-A dialog box appears, Click Yes

^Delete sliders
-Click on the delete icon of the slider.
-A dialog box appears, Click No

^Delete sliders until the warning comes.
-Click on the delete icon of the last slider.
-A warning message should appear

^Increase Min value from Max value.
-Click on Min textbox.
-Type number greater than Max value.
-Blur from that field.

^Decrease Max value from Min value.
-Click on Max textbox.
-Type number less than Min value.
-Blur from that field.

^Default min and max value 
-Type 10 in Min and Type 100 in Max
-Type number less than 10 or greater than 100 in Default text box.
-Blur from that field.

^Correct answer
-Drag the slider for the correct answer, eg-0.
-Go to the preview set the slider to 50 i-hould show correct

^Define Step
-Define the value of step field in which interval value will increase when dragged, eg-.
-Go to the preview scroll the the slider then you will see that slider will increase- decrease in given step value

^Change the value of title
-Go to editor area using given url:https://demo-a.ucertify.com:8009/editor/?action=new
-Search the slider in search bar then click on slider item.
-In open module enter the text in title field and add some text in middle of the added text, you will see that cursor is not going to end of the last content of the title field.

@test_data: 
-Title
-Min Textbox
-What is your name

@result: open all tabs and export of educator page
*/
import { Navbar, login_username, login_password, LoginPage, EditorPage } from '../../../../page-objects/pages/index' 
describe('ebook area testing', function() {
    beforeEach('This is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/editor/?action=new");
            cy.get('.grid-item').contains("Slider").click({ force: true })
        })
    })

    //** Add title. */ 
    it('Add title', function() {
        cy.get('#titleID0').type('Question 1')
        cy.get(".slider_heading_test").should("contain", "Question 1")
    })

    //** Add Option Until Warning. */ 
    it('Add Option Until Warning', function() {
        cy.get('.add-option').click()
        cy.wait(500)
        cy.get('.add-option').click()
        cy.wait(500)
        cy.get('.add-option').click()
        cy.wait(500)
        cy.get('.add-option').click()
        cy.wait(500)
        cy.get('.add-option').click()
        cy.wait(500)
        cy.get('.add-option').click()
        cy.wait(500)
        cy.get('.add-option').click()
        cy.wait(500)
        cy.get('.add-option').click()
        cy.wait(500)
        cy.get('.add-option').click()
        cy.wait(500)
        cy.get('.add-option').click()
        cy.wait(500)
        cy.get('.add-option').click()
        cy.get("#errmsg").should("contain", "You can not add more than 10 sliders")
    })

    //** Delete slider. */ 
    it('Delete Slider Until Warning', function() {
        cy.get('.removeitem').click()
        cy.wait(500)
        cy.get('.row > .col-md-12').should("contain", "Are you sure you want to delete it?")
        cy.get('.editor_modal_action').contains('Yes').click();
        cy.get('.removeitem').click()
        cy.wait(500)
        cy.get('.row > .col-md-12').should("contain", "Are you sure you want to delete it?")
        cy.get('.editor_modal_action').contains('Yes').click();
        cy.get('.removeitem').click()
        cy.get('.editor_modal_action').contains('Yes').click();
        cy.get('[data-cy=errormsg]').should("contain", "You can not delete the default slider")
    })

    //** Check Minimum value field. */ 
    it('Check Minimum value field', function() {
        cy.get('#minID0').type("101")
        cy.get('#editor > :nth-child(1)').click()
        cy.get('[data-cy=errormsg]').should("contain", "Minimum value must be less than or equal to the maximum value.")
    })

    //** Check Maximum value field. */
    it('Check Maximum value field', function() {
        cy.get('#maxID0').type('{backspace}{backspace}{backspace}')
        cy.get('#maxID0').type('-1')
        cy.get('#editor > :nth-child(1)').click()
        cy.get('[data-cy=errormsg]').should("contain", "Value must be greater than or equal to 0 and less than or equal to 999")
    })

    //** Check Default value field. */
    it('Check Default value field', function() {
        cy.get('#defaultansID0').clear()
        cy.wait(2000)
        cy.get('#minID0').type('20')
        cy.get('#defaultansID0').type('10')
        cy.get('#editor > :nth-child(1)').click()
        cy.get('[data-cy=errormsg]').should("contain", "Value must be greater than or equal to 20 and less than or equal to 100")
        cy.get('#defaultansID0').clear()
        cy.wait(2000)
        cy.get('#defaultansID0').type('101')
        cy.get('#editor > :nth-child(1)').click()
        cy.get('[data-cy=errormsg]').should("contain", "Value must be greater than or equal to 20 and less than or equal to 100")
    })

    //** set correct answer and check coorect answer in preview area. */
    it('Check Default value field', function() {
        cy.get('#a_ID0').trigger('center')
            // pending some steps
    })
});