/*
@author: Anirudh Pratap
@master_project_id: 4623
@phase_id: 
@story_id: 
@story_name: Create Content Diagnostic
@path: final/Create
@test_case_name: Create Content Diagnostic.js
@description: 
@test_steps: 
^To test the "Content Diagnostic" link functionality
1. Click on "My Library" after logging in your account 
2. Click on "My Projects" tab given in tab bar. 
3. Click on "Author" button that is appeared in your desired project thumbnail. 
4. Click on "Exam Objectives" thumbnail.

^To test the "Open" button functionality
1. Follow steps 1 to 4 as given in test case 1.
2. Click on Open button of any of the coumn displayed in table.

^To test the "Image Diagnostic" accordian functionality
1. Follow steps 1 to 4 as given in test case 1.
2. Click on "Image Diagnostic" Accordian

^To test the "Image Diagnostic" accordian -> Search Bar functionality
1. Follow steps 1 to 4 as given in test case 1.
2. Click on "Image Diagnostic" Accordian
3. Input any image url in search bar.

^To test the "Image Diagnostic" accordian -> "Download CSV" button functionality
1. Follow steps 1 to 4 as given in test case 1.
2. Click on "Image Diagnostic" Accordian
3. Click on "Download CSV" button.

^To test the "Image URL" functionality
1. Follow steps 1 to 4 as given in test case 1.
2. Click on "Image URL"

^To test the "Image URL"-> "Next" button functionality
1. Follow steps 1 to 4 as given in test case 1.
2. Click on "Image URL"
3. Click on next button.

^To test the "Image URL"-> "Previous" button functionality
1. Follow steps 1 to 4 as given in test case 1.
2. Click on "Image URL"
3. Click on Previous button.

^To test the "Image URL"-> "Cancel" button functionality
1. Follow steps 1 to 4 as given in test case 1.
2. Click on "Image URL"

^To test the "XML and SXML not match Diagnostic" accordian->Search bar functionality
1. Follow steps 1 to 4 as given in test case 1.
2. Click on "XML and SXML not match Diagnostic"
3. Input in search bar.

^To test the "XML and SXML not match Diagnostic" accordian->Dropdown beside search bar functionality
1. Follow steps 1 to 4 as given in test case 1.
2. Click on "XML and SXML not match Diagnostic"
3. Click on dropdown button
4. Select any of the options in selectbox

^To test the "XML and SXML not match Diagnostic" accordian->Download CSV button functionality
1. Follow steps 1 to 4 as given in test case 1.
2. Click on "XML and SXML not match Diagnostic"
3. Click on Download CSV button

^To test the "XML and SXML not match Diagnostic" accordian->View XML button functionality
1. Follow steps 1 to 4 as given in test case 1.
2. Click on "XML and SXML not match Diagnostic"
3. Click on View XML button

^To test the "HTML Diagnostic" accordian->Search bar functionality
1. Follow steps 1 to 4 as given in test case 1.
2. Click on "HTML Diagnostic"
3. Input in search bar.

^To test the "HTML Diagnostic" accordian->Dropdown beside search bar functionality
1. Follow steps 1 to 4 as given in test case 1.
2. Click on "HTML Diagnostic"
3. Click on dropdown button
4. Select any of the options in selectbox

^To test the "HTML Diagnostic" accordian->Download CSV button functionality
1. Follow steps 1 to 4 as given in test case 1.
2. Click on "HTML Diagnostic"
3. Click on Download CSV button

^To test the "HTML Diagnostic" accordian->View HTML button functionality
1. Follow steps 1 to 4 as given in test case 1.
2. Click on "HTML Diagnostic"
3. Click on View HTML button

@test_data: n/a
@result: Create Content Diagnostic will open. 
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
        CreateArea.myProject()
        cy.get('.icomoon-grid').click();
        // cy.get(':nth-child(6) > .outline1').click()
        cy.get(':nth-child(6) > .outline1')
        .should('have.attr', 'href')
        .then((href) => {
            cy.visit(href)
        })

    })
    it('Content Diagnostic open and Click on Open Button for any Appeared Option', () => {
        cy.get('[data-cy="open"]').eq(0).click()
    })
    it('Click on Image Diagnostic Accordian', () => {
        CreateArea.contentDiagnosticVideo()
    })
    it('Input any image url in search bar', () => {
        CreateArea.contentDiagnostic()
        cy.fixture('global').then(data => {
            cy.get('#search').clear().type(data.diagnostic1)
        })
    })
    it('Click on "Download CSV" button', () => {
        CreateArea.contentDiagnostic()
        cy.get('#csvbtn').click()
    })
    it('Click on Image URL', () => {
        CreateArea.contentDiagnostic()
        cy.get(':nth-child(2) > .break_word > .image_link').click()
    })
    it('Click on Image URL and then Next Button', () => {
        CreateArea.contentDiagnostic()
        cy.get(':nth-child(2) > .break_word > .image_link').click()
        cy.get('.next').click({ force: true })
    })
    it('Click on Image URL and then Previous Button', () => {
        CreateArea.contentDiagnostic()
        cy.get(':nth-child(2) > .break_word > .image_link').click()
        cy.get('.next').click({ force: true })
        cy.get('.prev').click({ force: true })
    })
})