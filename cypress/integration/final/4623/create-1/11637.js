/*
@author: Anirudh Pratap
@master_project_id: 4623
@phase_id: 
@story_id: 
@story_name: Create Exam Objectives
@path: final/Create
@test_case_name: Create Exam Objectives.js
@description: 
@test_steps: 
^To test the "Exam Objectives" link functionality
-Click on "My Library" after logging in your account
-Click on "My Projects" tab given in tab bar.
-Click on "Author" button that is appeared in your desired project thumbnail.
-Click on "Item Bank" thumbnail.
-Click on Tags on left panel
-List of Exam objectives will be shown

^To test the "New" button functionality by adding new Exam objectives
-Click on "My Library" after logging in your account
-Click on "My Projects" tab given in tab bar.
-Click on "Author" button that is appeared in your desired project thumbnail.
-Click on "Exam Objectives" thumbnail.
-Click on "New" Button
-Double click on the appeared section.
-Input Section Name
-Click on "+" icon.
-Double click on appeared subsection.
1-Input sub section Name.
1-Click on "Save" button 
1-Click on "OK" button of appeared dialog.

^To test the "Save" button functionality without adding any Exam objectives
-Follow steps 1 to 4 as given in test case 2.
-Click on Save button

^To test the "Auto Sequence" toggle button functionality
-Follow steps 1 to 4 as given in test case 2.
-Slide auto sequence toggle button to right.

^To test the "Bucket(Delete)" button functionality
-Follow steps 1 to 4 as given in test case 2.
-Click on bucket(delete) icon
-Click on OK button of sweet alert.

^To test the "Version History" button functionality
-Follow steps 1 to 4 as given in test case 2.
-Click on Version History.
-Select an options from Versions select box.
-Click on Restore button

^To test the "Copy from" button functionality (To add Exam Objectives)
-Follow steps 1 to 4 as given in test case 2.
-Click on "Copy from" button.
-Check any radio button from exam objectives radio button and mapping radio button.
-Check any radio button from Merge radio button and replace radio button.
-Click on Copy button.

^To test add exam objectives in Mapping
-Follow steps 1 to 4 as given in test case 2.
-Click on Mapping tab.
-Click on cell which is under Exam objectives column and infront of section given in table of content column.
-Select your desired exam objectives.
-Click on cross icon placed on top right corner of modal.
-Click on Save button.
-Click on OK button.

^To test the section which is given in the "Table of Contents" 
-Follow steps 1 to 4 as given in test case 2.
-Click on any of the section as given in Table of Contents in Mapping tab

^To test "Test Set" and "Assigned Question" columns
-Follow steps 1 to 4 as given in test case 2.
-Click on Mapping tab.
-Click on cell which is under Test Set column or Assigned Questions and infront of section given in table of content column.

^To test "Version History" button 
-Follow steps 1 to 4 as given in test case 2.
-Click on Version History button.
-Select any of the options in version select box.
-Click on restore.

^To test "Save" button (Mapping Tab)
-Follow steps 1 to 4 as given in test case 2.
-Click on Version History button.
-Select any of the options in version select box.
-Click on restore.
-Click on Save Button
-Click on OK button

@test_data: n/a
@result: Create Exam Objectives will be open.
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
        cy.wait(4000);
        CreateArea.examObjective()
        cy.wait(5000);
    })
    it('Exam Objective Checking', () => {
        cy.get('.tags_accordian > .card > .card-header').click({force:true});
        cy.get('[onclick="add_exam(event); return false;"] > .icomoon-new-24px-add-circle-1').click();
        cy.wait(5000);
        cy.get('#add_exam_modal > .modal-dialog > .modal-content > #add_contents_body > :nth-child(2) > .col-md-9 > #content_title').type('Exam Objective Testing');
        cy.get('#add_exam_modal > .modal-dialog > .modal-content > .modal-footer > .content_log_btn > .save_content').click();
    })

    it('mapping question to Exam Objective', () => {
        cy.contains('Computer Networking').click({force:true});
        cy.get('[e="0"][content_guid="030D3"] > .text-center > .action-menu > .icomoon-menu-2').click({force:true});
        cy.get('[e="0"][content_guid="030D3"] > .text-center > .action-menu > .dropdown-menu > :nth-child(4) > .assign_cls').click();
        cy.wait(3000);
        cy.get('#dragdrop_window_new > .modal-dialog > .modal-content > .modal-body').should('exist');
    })
    // it('Exam Objective Checking and slide auto sequence toggle button to right.', () => {
    //     cy.get('#new_button').click()
    //     cy.fixture('global').then(data => {
    //         cy.get('.flex').dblclick().type(data.typedata)
    //     })
    //     cy.get('#add_button').click()
    //     cy.fixture('global').then(data => {
    //         cy.get('.child_li > .flex').dblclick().type(data.typedata)
    //     })
    //     cy.get('#exam_save').click({ force: true })
    //     cy.get('#auto_seq').check({ force: true })
    //     cy.get('[data-cy=yesbutton]').click()
    //     cy.wait(6000)
    //     cy.get('.my-1 > .icomoon-new-24px-delete-1').click({ force: true })
    //     cy.get('[data-cy=yesbutton]').click()
    //     cy.get('#exam_save').click({ force: true })
    //     cy.get('[data-cy=yesbutton]').click()
    //     cy.wait(6000)
    // })
    // it('Version History click and Restore.', () => {
    //     cy.get('#new_button').click()
    //     cy.get('#restore_btn').click()
    //     cy.get('#load_history').click()
    //     cy.wait(2000)
    // })
    // it('Click on "Copy from" button', () => {
    //     cy.get('[data-cy="mapping"]').click()
    //     cy.get('#copy_btn').click()
    //     cy.wait(2000)
    //     cy.get('[data-cy="course_select"]').select('9A0-160 Acrobat X Pro', { force: true })
    //     cy.get('[data-cy="mapping_radio"]').check()
    //     cy.get('[data-cy="replace_radio"]').check()
    //     cy.get('[data-cy="copy_btn"]').click()
    // })
    // it('Click on cross icon placed on top right corner of modal', () => {
    //     cy.get('[data-cy="mapping"]').click()
    //     cy.get('[data-cy="mapping_modal"]').eq(1).click()
    //     cy.wait(2000)
    //     cy.get('[data-cy="modal_exam"]').should('be.visible')
    //     cy.get('[data-cy="close_btn"]').click()
    // })
    // it('Click on any of the section as given in Table of Contents in Mapping tab', () => {
    //     cy.get('[data-cy="mapping"]').click()
    //     cy.get('.l2 > .course_detail').eq(0).click()
    //     cy.wait(2000)
    //     cy.get('[data-cy="preview_modal"]').should('be.visible')
    //     cy.get('[data-cy="cancel_modal"]').click()
    // })
    // it('Version History click and Restore.', () => {
    //     cy.get('[data-cy="mapping"]').click()
    //     cy.get('#restore_btn').click()
    //     cy.get('#load_history').click()
    //     cy.wait(2000)
    //     cy.get('[data-cy="mapping_modal"]').eq(1).click()
    //     cy.wait(2000)
    //     cy.get('[data-cy="modal_exam"]').should('be.visible')
    // })
})