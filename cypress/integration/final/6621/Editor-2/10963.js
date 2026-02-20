/*
@author: Anirudha Pratap
@master_project_id: 6621
@phase_id: 
@story_id: 10963
@story_name: Adding Transcript
@path: final/6621
@test_case_name: Adding Transcript.js
@description: Adding Transcript
@test_steps:
^Add Transcript if transcript is found 
-open editor
-Add video player tag in section, question or fact.(Any of them).
-In url add the asset link
-click add transcript, if Transcript found then it will add the guid.

^Add Transcript if transcript is not found (If all the data are correct) 
-open editor
-Add video player tag in section, question or fact.(Any of them).
-In url add the asset link
-click add transcript, A modal will open.
-After modal open, add the mandatory details in the modal and then click add.
-If all the details in the modal is correct then on clicking add button, the transcript id will be added automatically in transcript field.

^Add Transcript if transcript is not found (If any of data are incorrect)
-open editor
-Add video player tag in section, question or fact.(Any of them).
-In url add the asset link
-click add transcript, A modal will open.
-After modal open, add the mandatory details in the modal and then click add.
-If all the details in the modal is not correct then on clicking add button, error message will be shown.

@test_data: n/a
@result: Message will be shown
*/
import { Navbar, login_username, login_password, LoginPage, EditorPage, InstructorPage } from '../../../../page-objects/pages/index' 
describe("embed (knowledge check) testing", function() {
    //Add Transcript if transcript is found
    it('embed and player tag for Load video player with Add Transcript if transcript is found', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            InstructorPage.showManage();
            cy.get('[data-cy=view_course]').click();
            cy.wait(2000);
            EditorPage.visitEditor(data.url)
            cy.get('.multiple_choice').click({ force: true })
        })
        cy.wait(5000)
        cy.get('#title').type('Testing', { force: true }).then(() => {
            cy.get('#stem > .controls_button > .block-controls > .block-controls__container > .block-controls__bar > .block-controls__tools > .block-controls__add > .icomoon-new-24px-add-circle-1').click({ force: true })
            cy.get('#searchText').type('embed', { force: true }).then(() => {
                cy.get('#embed').click({ force: true })
                cy.get('[data-type="embed"] > .item_labelClass').contains('Media').click({ force: true })
                cy.wait(2000)
                cy.get('#items_list').click({ force: true })
                cy.get('[type="ebook-item"] > player').eq(0).click({ force: true })
            })
        })
        cy.get('#type').select('Video', { force: true })
        cy.get('[placeholder="Enter the title"]').type('Test', { force: true })
        cy.get('#asset').clear().type('lpic1/chapter1-2-using-streams-redirection-and-pipes.mp4', { force: true })
        cy.get('#group_guids').type('068Fa', { force: true })
        cy.get('.add_transcript').click({ force: true })
    })
})