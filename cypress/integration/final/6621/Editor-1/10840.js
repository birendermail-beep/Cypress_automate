/*
@author: Vikas Shukla
@master_project_id: 6621
@phase_id: 
@story_id: 10840
@story_name: Drag & drop (Classification)
@test_case_name: Drag & drop (Classification).js
@description: click the given link and perform your test when permission is given
@test_steps: 
^Go to editor for question creation
- login to page
- visit the editor dashboard
- Search Drag & Drop (Classification).
- Open the Drag & Drop (Classification) module
- right-click below the base and steps header part.
- choose your desire option according to the question.
- fill the desire data and click on ok button.
- width, height, left, top is define for draggable item's width, height, position from left and position from top.
- if you do not edit the given position and want to place the item at desire place then just drag it on authoring area at that place  then it will automatically set at that place.
- title is required only if you want to show some text on draggable item.
- in case of image if you want to title over image then mention the title otherwise left it.
- Here in images section only single image name is required.
- if you want that after drop the draggable item it should be disabled then click on stop multiple drag checkbox. 
- if you want white background-color of draggable item then click on invisible checkbox.
- click on ok button.

^create draggable field
- for set the position write the value in top and left field to take space from top and left.
- in correct answer field write draggable item's id in case sensitive mode.
- for white background-color of placeholder field click on invisible field.
- to see the text on placeholder write the text on title field but in case of image drop it should be empty otherwise it will be appear on the image.
- click on ok button.
- you can also set the position of field by drag it on authoring area.
- if you want to use field with white background then click on invisible checkbox.

^Changing width and height of image
- click on pencil icon on authoring area and select the image via upload button.
- define the width and height  of editor area on authoring side using width and height  field.
- write alt value.
- click on ok button .

^change the item value previously added
- login to page
- visit the editor dashboard
- Right click on the image area, select Placeholder
- Edit the fields accordingly
- in correct answer give the ID of draggable which you want to mark as correct answer and Click OK

^Add input field
- login to page
- visit the editor dashboard
- 

^add button , checkbox input , radio input
- login to page
- visit the editor dashboard
- 


^Insert drop down list
- login to page
- visit the editor dashboard
- 


^Insert label
- login to page
- visit the editor dashboard
- 


^Add hotspot
- login to page
- visit the editor dashboard
- 

^Test case of editor area Drag & drop (Classification) Open the module
- login to page
- visit the editor dashboard
- Search Drag & Drop (Classification).
- Open the Drag & Drop (Classification) module

^Test case of editor area Drag & drop (Classification) Upload image
- login to page
- visit the editor dashboard
- Click on the pencil icon
- A dialog box appears
- Click Upload Media
- Go to the Gallery tab
- Select the image and click on 3 dots
- Select Use Media
- Click Save

^Test case of editor area Drag & drop (Classification) Adding draggable
- login to page
- visit the editor dashboard
- Right click on the image area, select draggable
- Edit the fields accordingly and Click OK

^Test case of editor area Drag & drop (Classification) Delete draggable
- login to page
- visit the editor dashboard
- Click on the delete icon given in the draggable

^Test case of editor area Drag & drop (Classification) Adding droppable
- login to page
- visit the editor dashboard
- Right click on the image area, select Placeholder
- Edit the fields accordingly
- in correct answer give the ID of draggable which you want to mark as correct answer and Click OK

^Test case of editor area Drag & drop (Classification) Delete droppable
- login to page
- visit the editor dashboard
- Click on the delete icon given in the draggable

^Performing questions in preview
-Create a question on editor or open the created question on quiz
-Perform the question correctly as given in the instruction or performed it correctly.
-If answer is performed correctly then answer will came correct otherwise incorrect


^Checking correct answer and your answer
-Create a question on editor or open the created question on quiz
-Perform the question and click submit.
-on submiting two tab will be visible correctans and your ans.
-click on the respective tab to see correct or your ans


@test_data: n/a
@result: right-click the below base and steps header part and select the draggable option from drop down and perform the work.
*/

import { Navbar, login_username, login_password, LoginPage, EditorPage } from '../../../../page-objects/pages/index'
describe('ebook area testing', function() {
    beforeEach('This is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            EditorPage.visitEditor(data.url)
            cy.get('.grid-item').contains("Drag & drop (Classification)").click({ force: true })
        })
    })

    //**  Upload image. */
    it("open a editable modal to upload the image", function() {
        cy.get('.mr-1 > .btn').click()
        cy.wait(2000);
        cy.get('#upload_media').click()
        cy.wait(5000);
        cy.get('#tab2').click()
        cy.wait(5000)
        cy.get(':nth-child(2) > .relative > .px-2 > .px-0').click()
        cy.get(':nth-child(2) > .relative > .px-2 > .dropdown-menu > .use_media > .dropdown-item').click()
        cy.get('.addElement').click()
    });

    it("open a editable modal to change the height and width of an image", function() {
        cy.get('.mr-1 > .btn').click()
        cy.wait(1000);
        cy.get('#base-width').type('{selectall}{backspace} 607');
        cy.wait(1000);
        cy.get('#base-height').clear().type('495');
        cy.get('#base-bgimg-alt').clear().type('image');
        cy.get('#base-borderrequired').click();
        cy.get('.addElement').click();
    });

    it('change the item value previously added', function() {
        cy.get('#ID4 > p').trigger("mouseover");
        cy.get('#ID4 > .btn-group > :nth-child(1)').click({ force: true })
        cy.get('#drop-anskey').click().type('{selectall}{backspace}ID1',{force:true});
        cy.get('.addElement').click();
    })

    //** Adding draggable. */
    it("Adding draggable", function() {
        EditorPage.addingDraggable();
    });

    //** Delete draggable. */
    it("Delete draggable", function() {
        EditorPage.addingDraggable();
        cy.get('[title="ID8"] > p').trigger("mouseover")
        cy.get('#ID8 > div > a > .icomoon-new-24px-delete-1').click({ force: true })
    });

    //** Adding droppable. */
    it("Adding droppable", function() {
        cy.get('#dndmain').click()
        cy.get('#dndmain').rightclick({ force: true })
        cy.get('ul li span').contains('Place Holder').click({ force: true })
        cy.wait(2000)
        cy.get('#drop-anskey').type('ID8')
        cy.get('button').contains('OK').click()
    });

    //** delete droppable. */
    it("Delete droppable", function() {
        cy.get('#dndmain').click()
        cy.get('#dndmain').rightclick({ force: true })
        cy.get('ul li span').contains('Place Holder').click({ force: true })
        cy.wait(2000)
        cy.get('#drop-anskey').type('ID8')
        cy.get('button').contains('OK').click()
        cy.wait(2000)
        cy.get('[title="ID8"] > p').trigger("mouseover")
        cy.get('#ID8 > div > a > .icomoon-new-24px-delete-1').click({ force: true })
    });
});