/*
@author: Anirudh Pratap
@master_project_id: 4623
@phase_id: 
@story_id: 
@story_name: Knowledge Domain - Author as Lesson
@path: final/Create
@test_case_name: Knowledge Domain - Author as Lesson.js
@description: 
@test_steps: 
^To test the "Author as Lesson" link functionality
1. Click on ""My Library"" after logging in your account
2. Click on ""My Projects"" tab given in tab bar.
3. Click on ""Author"" button that is appeared in your desired project thumbnail.
4. Click on ""Knowledge Domains"".
5. Click on ""Setting Icon"" Button
6. Click on ""Author as Lesson

^To test the "Plus Circle" button functionality
1. Follow steps 1 to 6 as given in test case 1.
2. Click on ""Plus Circle"" button.
3. Click on Section LInk of appeared modal.
4. Input Title.
5. Click on Dark Plus Clircle
6. Click on Text Link 
7. Click on paragraph link.
8. Input content."
"1. Follow steps 1 to 6 as given in test case 1.
2. Click on ""Reject/Approve"" button.

^To test the "Reject/Approve" button functionality
1. Follow steps 1 to 6 as given in test case 1.
2. Click on ""Cut"" button.

^To test the "Cut" button functionality
1. Follow steps 1 to 6 as given in test case 1.
2. Click on ""Cut"" button on any section

^To test the "Paste" button functionality
1. Follow steps 1 to 6 as given in test case 1.
2. Click on ""Cut"" button on any section
3. Click on appeared ""Paste"" button on any section.

^To test the "Edit" button functionality
1. Follow steps 1 to 6 as given in test case 1.
2. Click on ""Edit"" button on any section
3. Click on dark circled plus icon.
4. Click on any of the link (Selected panel in this case)
5. Click on your required link (Selected Panel Primary)
6. Change the heading of appeared panel
7. Change the content of appeared panel

^To test the "Delete" button functionality
1. Follow steps 1 to 6 as given in test case 1.
2. Click on ""Delete"" button on any section
3. Click on ""OK"" button of appeared dialog"

^To test the "Undo Delete" button functionality
1. Follow steps 1 to 6 as given in test case 1.
2. Click on ""Undo Delete"" button on any section
3. Click on ""OK"" button of appeared dialog

^To test the "Add Task" button functionality 
1. Follow steps 1 to 6 as given in test case 1.
2. Click on ""Add Task"" button 
3. Do not do anything with Selectbox 
4. Click on Save button

^To test the "Item Editor" button functionality 
1. Follow steps 1 to 6 as given in test case 1.
2. Click on ""Add Task"" button 
3. Do not do anything with Selectbox 
4. Click on Item Editor button"

^To test the "Hide Deleted Items" button functionality 
1. Follow steps 1 to 6 as given in test case 1.
2. Delete any of the section of the chapter
3. Click on ""Hide Deleted Items

^To test the "Show Deleted Items" button functionality 
1. Follow steps 1 to 6 as given in test case 1.
2. Delete any of the section of the chapter
3. Click on ""Show Deleted Items

@test_data: 
-ISBN: 1022

@result: Knowledge Domain - Author as Lesson will open" 
*/
import { Navbar, login_username, login_password, LoginPage, CreateArea } from '../../../../page-objects/pages/index'
describe('Create Area', () => {
    it('Knowledge Domain', () => {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        CreateArea.openLibrary()
        CreateArea.myProject()
        CreateArea.itemBank()
        cy.get('[data-cy="table_content"]').its('length').should('be.gt', 2)
    })
})