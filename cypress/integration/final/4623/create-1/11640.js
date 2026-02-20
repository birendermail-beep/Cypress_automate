/*
@author: Anirudh Pratap
@master_project_id: 4623
@phase_id: 
@story_id: 
@story_name: Create Student View
@path: final/Create
@test_case_name: Create Student View.js
@description: 
@test_steps: 
^To test the student view thumbnail link functionality
-Click on "My Library" after logging in your account 
-Click on "My Projects" tab given in tab bar
-Click on "Author" button that is appeared in your desired project thumbnail
-Click on "Student View" thumbnail.

^To test the table of content tab functionality
-Follow steps 1 to 4 as given in test case 1.
-Click on Table of Contents Tab.

^To test the Annotation tab functionality
-Follow steps 1 to 4 as given in test case 1.
-Click on Annotation Tab.

^To test the Annotation tab-> Annotation by dropdopwn  functionality
-Follow steps 1 to 4 as given in test case 1.
-Click on Annotation Tab.
-Click on "Annotated by"dropdown.
-Click on "show my annotations" option.
-Click on Show button.

^To test the Annotation tab-> Annotation cross mark functionality
-Follow steps 1 to 4 as given in test case 1.
-Click on Annotation Tab.
-Click on cross mark icon placed on Annotation top right side..

^To test the Table of Content Tab-> Search TOC functionality
-Follow steps 1 to 4 as given in test case 1.
-Select Search TOC 
-Input any string in the search bar.

^To test the Table of Content Tab-> Search Lesson functionality
-Follow steps 1 to 4 as given in test case 1.
-Select Search Lesson 
-Input any string in the search bar.
-Press Enter or click on search icon

^To test the Table of Content Tab-> Lesson name link functionality
-Follow steps 1 to 4 as given in test case 1.
-Click on any of the lesson name or section which is given in Table of the content   

^To test the Table of Content Tab->Quizzes button functionality
-Follow steps 1 to 4 as given in test case 1.
-Click on Quizzes button.
-Click on Test button.
-Select option for given question.
-Navigate to the next question or previous question through Next button or previous button respectively.
-Click on End Test butto-.
-Click on end testt button from the appeared modal;

^To test the Table of Content Tab->Start where you left off  button functionality
-Follow steps 1 to 4 as given in test case 1.
-Start Where you left off button

^To test the Table of Content Tab->Enable bite size learning button functionality
-Follow steps 1 to 4 as given in test case 1.
-Click on enable bite size learning.

@test_data: n/a
@result: Create Student View will open.
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
        CreateArea.studentView()
    })
    it('Student View Visit', () => {
        cy.get('[data-cy="studyplanner"]').click()
        Cypress.on('uncaught:exception', (error, runnable) => {
            return false;
        })
    })
    it('Click on TOC Tab', () => {
        CreateArea.chapterButton()
        cy.get('[data-cy="annotation_tab"]').click()
        cy.get('[data-cy="toc_tab"]').click()
    })
    it('Click on Annotation Tab', () => {
        CreateArea.chapterButton()
        cy.get('[data-cy="annotation_tab"]').click()
    })
    it('Click on Chapter', () => {
        CreateArea.chapterButton()
        cy.get('[data-cy=toc_chapters]').eq(1).click({ force: true })
    })
    it('Type in search box', () => {
        CreateArea.chapterButton()
        cy.fixture('global').then(data => {
            cy.get('[intro-id="searchbox"]').type(data.testdata)
        })
    })
    it('Click on Start Where you left', () => {
        CreateArea.chapterButton()
        cy.get('[data-cy="start_left"]').click()
    })
    it('Click on Bit size Enable', () => {
        CreateArea.chapterButton()
        cy.get('[data-cy="bit_size"]').click()
    })
})