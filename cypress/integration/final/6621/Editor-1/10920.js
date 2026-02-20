/*
@author: Anirudha Pratap
@master_project_id: 6621
@phase_id:
@story_id: 10920
@story_name: Label an Image (with drag & drop)
@path: final/6621
@test_case_name: Label an Image (with drag & drop)
@description : na
@test_steps:
^Open the module
-Go to the URL : https://www.ucertify.com/editor/?action=new. 
-Search Label an Image (with drag and drop).
-Open the Label an Image (with drag and drop) module

^Upload image
-Click on the pencil icon
-A dialog box appears
-Click Upload Media
-Go to the Gallery tab
-Select the image and click on 3 dots
-Select Use Media
-Click Save
-or 
-Click on the pencil icon of image
-A dialog box appears
-Click Upload Media
-Click Upload Files
-Select the image which you want to upload
-Give short description and tags
-Click Upload details
-Click Save

^Adding draggable
-Right click on the image area, select draggable
-Edit the fields accordingly and Click OK

^Delete draggable
-Click on the delete icon given in the draggable
-A confirmation prompt will appear, click OK

^Adding droppable
-Right click on the image area, select Placeholder
-Edit the fields accordingly, and in correct answer give the ID of draggable which you want to mark as correct answer and Click OK

^Delete droppable
-Click on the delete icon given in the droppable
-A confirmation prompt will appear, click OK

^click on edit icon 
-click on edit icon
-click on cancel button

^Open the module
-Go to the URL : https://www.ucertify.com/editor/?action=new. 
-Search Label an Image (with drop downs).
-Open the Label an Image (with drop downs) module

^Upload image
-Click on the pencil icon
-A dialog box appears
-Click Upload Media
-Go to the Gallery tab
-Select the image and click on 3 dots
-Select Use Media
-Click Save
-or 
-Click on the pencil icon of image
-A dialog box appears
-Click Upload Media
-Click Upload Files
-Select the image which you want to upload
-Give short description and tags
-Click Upload details
-Click Save

^Adding text box
-Right click on the image area, navigate to Select > select Select Dropdown
-Edit the fields accordingly
-In the options text box, give the options (every option should be in new line and in correct answer use * before that option) 
-Click OK

^Checking answer
-Go to the preview answer, select the correct answer in the select box
-It should show correct message

^Click on edit icon 
-If you want to edit the fields, click on the edit icon given on the elements.
-Dialog box will appear, edit the feilds accordingly, Click OK.

^Delete select box
-Click on the delete icon given in the select box
-A confirmation prompt will appear, click OK

^Adjust the position of select box
-You can also drag to adjust the position of the select box.

@test_data: n/a
@result: Correct message
*/

import { Navbar, login_username, login_password, LoginPage, EditorPage } from '../../../../page-objects/pages/index'
describe('ebook area testing', function() {
    beforeEach('This is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/editor/?action=new");
            cy.get('.grid-item').contains("Label an image (with drag & drop)").click({ force: true })
        })
    })

    //**  Upload image. */
    it("open a editable modal", function() {
        cy.wait(2000);
        cy.get('.mr-1 > .btn > .icomoon-24px-edit-1').click({ force: true })
        cy.wait(2000);
        cy.get('#upload_media').click()
        cy.get('#tab2').click()
        cy.wait(5000)
        cy.get(':nth-child(2) > .relative > .px-2 > .px-0').click()
        cy.get(':nth-child(2) > .relative > .px-2 > .dropdown-menu > .use_media > .dropdown-item').click()
        cy.get('button').contains('OK').click()
    });

    //** Adding draggable. */
    it("open a editable modal", function() {
        cy.get('#dndmain').click()
        cy.get('#dndmain').rightclick({ force: true })
        cy.get('ul li span').contains('Draggable').click({ force: true })
        cy.get('#drag-top').clear({ force: true }).type('{selectall}{backspace}10')
        cy.get('#drag-value').type('drag')
        cy.get('#drag-name').type('my_drag')
        cy.get('#drag-multi_drag').click()
        cy.get('button').contains('OK').click()
        cy.get('[title="ID10"] > p').trigger("mouseover")
        cy.get('#ID10 > div > a > .icomoon-24px-edit-1').click({ force: true })
        cy.get('#drag-image').type('HTML_logo.png')
        cy.get('button').contains('OK').click()
    });

    //** Delete draggable. */
    it("Delete draggable", function() {
        cy.get('#ID1 > p').trigger("mouseover")
        cy.get('#ID1 > .btn-group > #editButton').click({ force: true })
    });

    //** Adding droppable. */
    it("Adding droppable", function() {
        cy.get('#dndmain').click()
        cy.get('#dndmain').rightclick({ force: true })
        cy.get('ul li span').contains('Place Holder').click({ force: true })
        cy.get('button').contains('OK').click()
    });

    //** Delete droppable. */
    it("Delete droppable", function() {
        cy.get('#dndmain').click()
        cy.get('#dndmain').rightclick({ force: true })
        cy.get('ul li span').contains('Place Holder').click({ force: true })
        cy.wait(2000);
        cy.get('#drop-value').type('drag')
        cy.get('#drop-anskey').type('ID1')
        cy.get('button').contains('OK').click()
        cy.wait(5000)
        cy.get('[title="ID10"] > p').click()
        cy.get(`[href="javascript:deleteElem('drop', 'ID10');"]`).click({ force: true })
    });

    //** click on edit icon for close the modal box. */
    it("click on edit icon for close the modal box", function() {
        cy.get('#ID1 > p').click()
        cy.get('#ID1 > div > button > .icomoon-24px-edit-1').click()
        cy.get('#authoring-modal > .modal-dialog > .modal-content > .modal-header > .close').click()
    });
});