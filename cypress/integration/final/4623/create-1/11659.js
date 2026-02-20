/*
@author: Anirudh Pratap
@master_project_id: 4623
@phase_id: 10518
@story_id: 
@story_name: Lesson Preview
@path: final/Create
@test_case_name: Lesson Preview.js
@description: 
@test_steps: 
^Save edit content
-Firstly we need to go to "My Library".
-Then click on "My Projects".
-Click on "Author> Knowledge Domain".
-We can click right side inside action "Lesson Preview", required chapter.
-Then click on "Edit Lesson".
-We can change as per reqirements in any contents.
-Click on "Preview" button or footer bar click on "Save".
-Open in new tab with preview page.
-Finally, click on "Save" button on the bottom OR We can saved all time when preview page is loaded.

^Open saved content.
-Firstly we need to go to "My Library".
-Then click on "My Projects".
-Click on "Author> Knowledge Domain".
-We can click right side inside action "Lesson Preview", required chapter.
-Then click on "Edit Lesson-Then open a modal select things and click on "Show" button.
-By default your all changes file name loaded, if any file is not showing then you can click on "Refresh" button.
-Then choose a file and click on "Show" button.

^Import data
-Firstly we need to go to "My Library".
-Then click on "My Projects".
-Click on "Author> Knowledge Domain".
-We can click right side inside action "Lesson Preview", required chapter.
-Then click on "Edit Lesson".
-Then click on "Choose file".
-Finally, click on "Import" button.

^Export DOC [PDF, DOC]
-Firstly we need to go to "My Library".
-Then click on "My Projects".
-Click on "Author> Knowledge Domain".
-We can click right side inside action "Lesson Preview", required chapter.
-Then click on "Edit Lesson".
-Then click on "Download" radio button-and select a file type "PDF".
-Finally, click on "Download" button.

^Add test set
-Firstly we need to go to "My Library".
-Then click on "My Projects".
-Click on "Author> Knowledge Domain".
-We can click right side inside action "Lesson Preview", required chapter.
-Then click on "Edit Lesson-Then open a modal select things and click on "Show" button.
-We can add test set like this: [[in_visible:2,-4
Note : 2:- For Practice test 2 and -4 for pre-assessment
-Click on "Preview" button.
-Open in new tab with preview page.
-Finally, click on "Deploy" button on the bottom.

^Using this we can track changes in string or not.
-Firstly we need to go to "My Library".
-Then click on "My Projects".
-Click on "Author> Knowledge Domain > Edit Lesson".
-Then click on "Preview" button.
-Finally click on "Deploy" Button.

^We can proposed new task using this features
-Firstly we need to go to "My Library".
-Then click on "My Projects".
-Click on "Author> Knowledge Domain > Lesson Preview > Add Task".
-Then open a modal and fill all details.
-Number showing correctly after adding content. 

^Using this we can close the task table in knowledge domain area.
-Firstly we need to go to "My Library".
-Then click on "My Projects".
-Click on "Author> Knowledge Domain > Lesson Preview".
-Then click "Q | E | G | H | F | K | T" buttons.
-Then open a table and click on "Cross" icon corner of table for close the current table.

^other
-Go to ucertif.com
-Login with given credentials
-Go to my library
-Go to My project tab 
-Click on any course author button
-Click on knowledge Domains
-Click on any setting button
-Click on lesson preview
-Click on edit lesson
-Enter "037n7" custom item ID
-Click on show button

^template_header
-Go to ucertify.com
-Login with given credentials
-Go to my library
-Go to My project tab 
-Click on any course author button
-Click on knowledge Domains
-Click on any setting button
-Click on lesson preview
-Click on edit lesson
-Enter "037n7" custom item ID
-Click on show button

^document
-Go to ucertify.com
-Login with given credentials
-Go to my library
-Go to My project tab 
-Click on any course author button
-Click on knowledge Domains
-Click on any setting button
-Click on lesson preview
-Click on edit lesson
-Select content type as lesson
-Click on show button

^diagnostic_report_md
-Go to ucertify.com
-Login with given credentials
-Go to my library
-Go to My project tab 
-Click on any course author button
-Click on Content Diagnostic
-Click on item Diagnostic open button

^question
-Go to ucertify.com
-Login with given credentials
-Go to my library
-Go to My project tab 
-Click on PHP From Beginning course author button
-Click on knowledge Domains
-Click on any setting button
-Click on lesson preview
-Click on edit lesson
-.Select content type as All items
-.Click on show button

^template_footer
-Go to ucertify.com
-Login with given credentials
-Go to my library
-Go to My project tab 
-Click on PHP From Beginning course author button
-Click on knowledge Domains
-Click on any setting button
-Click on lesson preview
-Click on edit lesson
-.Select content type as All items
-.Click on show button

@test_data: n/a
@result: Successfully saved.
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
    })
    it('Download PDF of chapter', () => {
            CreateArea.itemBank()
            cy.get('[data-cy=right_side] > .circle_items').eq(0).click()
            cy.contains('Edit Lesson').eq(0).click();
            cy.wait(3000)
            cy.get(':nth-child(5) > .btn-group > .btn').click({ force: true })
            cy.get('.btn-group > .dropdown-menu > :nth-child(1) > .dropdown-item').click()
            cy.get('.btn-group > .dropdown-menu > :nth-child(1) > .dropdown-item').click({ force: true })
        })
        //remove this code
        /* it.only('Add Task Testing', () => {
             cy.wait(3000)
             cy.get('.content_type_s > :nth-child(1) > .content_info > .task_bar > .add_task').click()
             cy.get('#add_task').should('be.visible')
             cy.get('#task_type').select('Multiple Choice', { force: true })
             cy.get('#task_comment').type("Unique")
             cy.get('.save_task').click()
             cy.wait(2000)
             cy.get('.content_type_s > :nth-child(1) > .content_info > .task_bar > .ml-md').click()
             cy.get('[type="info_q"] > tr > .q_type_icon:visible').eq(0).contains("Unique")
             cy.get('[title="Settings"]').eq(0).click()
             cy.get('.text-center.show > .dropdown-menu > :nth-child(2) > .delete_content').click()
             cy.get('[data-cy=confirmmodal]').should('be.visible')
             cy.get('[data-cy=yesbutton]').click()
             cy.get('#save_btn').click({ force: true })
             cy.wait(2000)
             cy.get('[data-cy=yesbutton]').click()
             cy.get('.content_type_s > :nth-child(1) > .info_collapse > .table-responsive > .w-100 > tbody > [type="-3"][guid="064ZH"] > .pointer').should('not.contain', 'Unique')
         })
         it('Add Task Tabs testing', () => {
             cy.wait(3000)
             cy.get('[type="info_q"]').eq(0).click()
             cy.get('.table-tasks:visible').should('be.visible')
             cy.get('[type="info_e"]').eq(0).click()
             cy.get('.table-tasks:visible').should('be.visible')
             cy.get('[type="info_l"]').eq(0).click()
             cy.get('.table-tasks:visible').should('be.visible')
             cy.get('[type="info_g"]').eq(0).click()
             cy.get('.table-tasks:visible').should('be.visible')
             cy.get('[type="info_f"]').eq(0).click()
             cy.get('.table-tasks:visible').should('be.visible')
             cy.get('[type="info_kc"]').eq(0).click()
             cy.get('.table-tasks:visible').should('be.visible')
             cy.get('[type="info_t"]').eq(0).click()
             cy.get('.table-tasks:visible').should('be.visible')
             cy.get('[type="info_unas"]').eq(0).click({ force: true })
             cy.get('.table-tasks:visible').should('be.visible')
             cy.get('.close_info_btn:visible').click()
             cy.get('.table-tasks:visible').should('not.be.visible')
         })*/
})