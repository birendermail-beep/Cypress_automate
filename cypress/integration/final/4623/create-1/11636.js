/*
@author: Anirudh Pratap
@master_project_id: 4623
@phase_id: 
@story_id: 
@story_name: Create Resources
@path: final/Create
@test_case_name: Create Resources.js
@description: 
@test_steps: 
^To test the "Resources" link functionality
-Click on "My Library" after logging in your account
-Click on "My Projects" tab given in tab bar.
-Click on "Author" button that is appeared in your desired project thumbnail.
-Click on "Resources" thumbnail.

^To test the "Upload" button
-Click on "My Library" after logging in your account
-Click on "My Projects" tab given in tab bar.
-Click on "Author" button that is appeared in your desired project thumbnail.
-Click on "Upload" button.
-Select a ppt/pdf/video file.


^To test the "Test" button
-Click on "My Library" after logging in your account
-Click on "My Projects" tab given in tab bar.
-Click on "Author" button that is appeared in your desired project thumbnail.
-Upload a file.
-Do not input Title
-Do not input Description
-Click on "Test" button.

^To test the "Test" button after successull uploading of file
-Click on "My Library" after logging in your account
-Click on "My Projects" tab given in tab bar.
-Click on "Author" button that is appeared in your desired project thumbnail.
-Upload a file.
-Input Title
-Input Description
-Click on "Test" button.

^To test the "Test" button after failure upload of file
-Click on "My Library" after logging in your account
-Click on "My Projects" tab given in tab bar.
-Click on "Author" button that is appeared in your desired project thumbnail.
-Do not upload a file.
-Input Title
-Input Description
-Click on "Test" button.

^To test the "Save" button
-Click on "My Library" after logging in your account
-Click on "My Projects" tab given in tab bar.
-Click on "Author" button that is appeared in your desired project thumbnail.
-Upload A File.
-Input Title
-Input Description
-Click on "Save" button.

^To test the "Add Sign" button
-Click on "My Library" after logging in your account
-Click on "My Projects" tab given in tab bar.
-Click on "Author" button that is appeared in your desired project thumbnail.
-Click on circled plus button

^To test the "Bucket Sign" button
-Click on "My Library" after logging in your account
-Click on "My Projects" tab given in tab bar.
-Click on "Author" button that is appeared in your desired project thumbnail.
-Click on bucket sign button

@test_data: n/a
@result: Create Resources will be open.
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
        CreateArea.resources()
    })
    it('Resources', () => {
        cy.contains('Student Resources');
        cy.contains('Instructor Resources');
    })
    it('Resources and click on upload', () => {
        // cy.get('[data-cy="upload"]').eq(0).click({ force: true })
        cy.get('[chap_guid="instructor"] > .flex-parent > .top2 > .icomoon-new-24px-add-circle-1').click({force:true});
        cy.wait(5000);
        cy.get('#resources_title').type('Title');
        cy.get('#resources_desc').type('Description');
        cy.get('.input-group-append > .btn > .d-none').click();
    })
})