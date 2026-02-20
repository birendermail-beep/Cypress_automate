/*
@author: Anirudh Pratap
@master_project_id: 4623
@phase_id: 
@story_id: 
@story_name: Create Design
@path: final/Create
@test_case_name: Create Design.js
@description: 
@test_steps: 
^To test the "Design" link functionality
-Click on "My Library" after logging in your account
-Click on "My Projects" tab given in tab bar.
-Click on "Author" button that is appeared in your desired project thumbnail.
-Click on "Design" thumbnail.

^To test the "Setting"->Grade Scale tab functionality
-Follow steps 1 to 4 as given in test case 1.
-Click on Grade Scale tab in setting dialog.
-Click on circled plus (add later grade) button.
-Input in Min % 
-Input in Max %
-Input in Grade.
-Click on Save button.
-Click on Save button
-Click on Go Back button
-Click on design thumbnail
-Click on Setting

^To test the "Setting"->Gradebook setting tab functionality
-Follow steps 1 to 4 as given in test case 1.
-Click on Gradebook setting tab.
-Click on Show gradebook toggle button
-Click on visible to student toggle button

^To test the "Setting"->Sequence tab functionality
-Follow steps 1 to 4 as given in test case 1.
-Click on Sequence tab.
-Drag and drop any of the items under sequence label
-Click on Save button

^To test the "LTI help" button functionality
-Follow steps 1 to 4 as given in test case 1.
-Click on LTI help button

^To test the "LTI help" Deep Linking link functionality
-Follow steps 1 to 4 as given in test case 1.
-Click on arrow button placed just next to LTI help button

^To test the "Lessons"-> Lesson Name (e.-Lesson 1)  functionality
-Follow steps 1 to 4 as given in test case 1.
-Click on any of the lesson names 

^To test the "Visibility"-> Toggle Button functionality
-Follow steps 1 to 4 as given in test case 1.
-Slide toggle button to left.
-Slide toggle button to right 
-Slide toggle button to left 

^To test the "Graded"-> Toggle Button functionality
-Follow steps 1 to 4 as given in test case 1.
-Click on graded toggle button

^To test the "Excercise row"-> Visibility Toggle Button functionality
-Follow steps 1 to 4 as given in test case 1.
-Silde  Visibility toggle button of excercise row to left side.

^To test the "Setting button"-> Action column functionality
-Follow steps 1 to 4 as given in test case 1.
-Click on Setting button.
-Click of Start date of the modal
-Click on time label.
-Select beginning time.
-Input n-of days.
-Click of Start date of the modal
-Click on time label.
-Select beginning time.
-Input n-of days.
-Click on OK butto-

^To test the "Search" functionality
-Follow steps 1 to 4 as given in test case 1.
-Input in search bar
-Press Enter button

^To test the "All-My" button group functionality
-Follow steps 1 to 4 as given in test case 1.
2.Click on "All" button or "My" button

^To test the Assessment List -> Visibility Toggle Button functionality
-Follow steps 1 to 4 as given in test case 1.
-Silde Visibility toggle button of any assessment to left side.

^To test Action column setting button of Assessment list->Schedule List
-Follow steps 1 to 4 as given in test case 1
-Click on Setting button of Action column of any assessment.
-Input  Assessment Tag
-Click on start date or end date time label .
-Choose start date.
-Click on Protected by checkbox
-Input password
-Click on OK Button

^To check Save button functionality
-Follow steps 1 to 4 as given in test case 1
-Click on Setting button of Action column of any assessment.
-Input Assessment Tag
-Click on start date.
-Select "Beginning of the course" option.
-Click on End Date
-Select "End of the course" option.
-Click on OK Button
-Click on Save button

^To check Scheduling functionality
-Follow steps 1 to 4 as given in test case 1
-Click on Setting button of Action column of any assessment.
-Input Assessment Tag
-Click on start date
-Choose beginning date and time.
-Click on end date
-Choose end date and time.
-Click on OK button

^To check Reset button functionality
-Follow steps 1 to 4 as given in test case 1
- Click on Reset button
-Click on OK button

^To test LTI help page content list
-Follow steps 1 to 4 as given in test case 1.
-Click on LTI help button
-Select any option
-Click on any of section in content lis-

^To test LTI help page search bar
-Follow steps 1 to 4 as given in test case 1.
-Click on LTI help button
-Select any option
-Input any search key in seach bar

^To test Deep Linking Functionality
-Follow steps 1 to 4 as given in test case 1.
-Click on on arrow button next to LTI help button
-Click on create LTI link.
-Select CRN
-Select Module
-Select Lesson
-Check the checkbox of generated link
-Click on Export Cartidge 

@test_data: n/a
@result: Create Design will open.
*/
import { Navbar, login_username, login_password, LoginPage, CreateArea } from '../../../../page-objects/pages/index'
describe('Create Area', () => {
    beforeEach('This is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        CreateArea.openLibrary()
        CreateArea.myProjectPHP()
        CreateArea.design()
    })
    it('Click on any lesson', () => {
        cy.get('#chapter_settings > tbody > .toc_objective_parent_05WqY > [tabindex="0"] > .pointer').click()
        cy.get('#chapter_guid_05Wqy > [tabindex="0"] > .toc_objectives').should('be.visible')
    })
    it('Check visibility toggle', () => {
        cy.get('.switch_button').eq(1).check({ force: true })
        cy.get('.btn-group > #save_assessment').click()
        CreateArea.goBack()
        CreateArea.goBack()
        CreateArea.studentVisit()
        cy.get('[data-cy=chapters]').click({ force: true })
        CreateArea.goBack()
        CreateArea.goBack()
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/educator/project/index.php?author_course=1&func=load_course&course=VTVYOZURJ1JDNE1O')
        })
        CreateArea.design()
        cy.get('.switch_button').eq(1).click({ force: true })
        cy.get('.btn-group > #save_assessment').click()
        CreateArea.goBack()
        CreateArea.goBack()
        CreateArea.studentVisit()
        cy.get('[data-cy=chapters]').click({ force: true })
    })
    it('Reset Button click', () => {
        cy.get('.btn-group > #rest_subaction').click()
        cy.get('.confirm').click()
    })
    it('Check  Action Setting', () => {
        cy.get('.set_modal_values').eq(3).click({ force: true })
        cy.get('#test_setup-tab').click({ force: true })
        cy.get('.icomoon-pencil-3').click({ force: true })
        cy.fixture('global').then(data => {
            cy.get('#rename_name').clear({ force: true }).type(data.createtest1, { force: true })
        })
        cy.get('#test_mode').select('Review Mode', { force: true })
        cy.get('.btn-group > #save_assessment').click({ force: true })
        CreateArea.goBack()
        CreateArea.goBack()
        CreateArea.studentVisit()
        cy.get('[data-cy=chapters]').click({ force: true })
        CreateArea.goBack()
        CreateArea.goBack()
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/educator/project/index.php?author_course=1&func=load_course&course=VTVYOZURJ1JDNE1O')
        })
        CreateArea.design()
        cy.get('.btn-group > #rest_subaction').click()
        cy.get('.confirm').click()
        cy.get('.btn-group > #save_assessment').click({ force: true })
    })
    it('Input in search bar', () => {
        cy.fixture('global').then(data => {
            cy.get('#search_obj').clear().type(data.createtest2).type('{enter}')
        })
    })
    it('Click on "All" button or "My" button', () => {
        cy.get('#btnMy').click()
        cy.wait(2000)
        cy.get('#btnAll').click()
    })
})