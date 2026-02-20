/*
@author: Anirudha Pratap
@master_project_id: 6621
@phase_id: 10166
@story_id: 11003
@story_name: Smart Chat
@path: final/6621
@test_case_name: Smart Chat.js
@test_steps:
^check correct answer dragging area
-Open https://www.ucertify.com/editor/?action=new.
-Click on the search icon and type Spot on an Image.
-Open the Spot on an Image module.
-Click on the dragging area.
-Dragging area color is faded and show in center of image
-Click on the area and drag where you want to set the answer
-Go to review, mark the correct answer
-Correct answer message should appear

^check incorrect answer dragging area
-Open https://www.ucertify.com/editor/?action=new.
-Click on the search icon and type Spot on an Image.
-Open the Spot on an Image module.
-Click on the dragging area.
-Dragging area color is faded and show in center of image
-Click on the area and drag where you want to set the answer
-Go to review, mark the incorrect answer
-Incorrect answer message should appear

^Resize the dragging area with mouse
-click and hold on the right bottom corner
-and resize the dargging area according you
-and set the answer

^Resize the dragging area with height and width
-click on the pencil icon
-appear pop and there is show 4 Fields
-You can resize the area by using Height and Width Field
-you can give value in pixel and click on the submit button

^set top and left of dragging area
-click on the pencil icon
-appear pop and there is show 4 Fields
-You can manage the Top and Left space by using Top and Left Field
-you can give value in pixel and click on the submit button

^Upload New Image 
-click on the pencil icon
-pencil icon show right side corner of the image
-after clicking on the pencil icon appear 1 pop box
-in the pop box click on the UPLOAD MEDIA button
-after that appear one more pop box there is show Upload File Button
-click on the Upload File Button and choose you image and click on the Submit Button

^Set alt message
-click on the pencil icon
-pencil icon show right side corner of the image
-after clicking on the pencil icon appear 1 pop box
-and in the box there is Show Alt Filed 
-You can give any alternative message in the field or give file name in the field

^Set the Border and Border color
-click on the pencil icon
-pencil icon show right side corner of the image
-after clicking on the pencil icon appear 1 pop box
-and in the box there is Show Border and Border Color Field 
-need to give value like: 5 and color is green don't apply px with border value in color filed you can give color name or hex code both.

@test_data: 
-set the new answer
-resize the dragging area
-set height 100px and width 100px
-set top space 20px and set left space 300px
-upload new image
-File does not exist.
-show border width as 5px and color as black

@result: Open Spot on an image Module
*/

import { Navbar, login_username, login_password, LoginPage, EditorPage } from '../../../../page-objects/pages/index' 
describe("Spot on an image", function() {
    beforeEach('this is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            EditorPage.visitEditor(data.url)
            cy.get(".grid-item").contains("Spot on an image").click({ force: true })
        })
    })
    it("Spot on an image", function() {
        cy.get("#ID0").trigger("mouseover")
        cy.get(".icomoon-24px-edit-1").eq(2).click({ force: true })
        cy.wait(2000)
        cy.get("#dragTop").clear().type("200px")
        cy.wait(2000)
        cy.get("#dragLeft").clear().type("250px")
        cy.wait(2000)
        cy.get('.bg-primary').click()
        cy.get("#ID0").trigger('mousedown', { which: 1, pageX: 0, pageY: 100 }).trigger('mousemove', { which: 1, pageX: -30, pageY: -300 }).trigger('mouseup')
        cy.get('#im0').click(265, 40, { force: true })
    })
    it('check correct answer dragging area',function(){
        // cy.get(".grid-item").contains("Spot on an image").click({ force: true })
        cy.get('#ID0')
            .trigger('mousedown', { which: 1 }, { force: true })
            .trigger('mousemove', 300, 150, { force: true })
            .trigger('mouseup');

        cy.get('#edi_tabs > :nth-child(2) > a').click();
        cy.get('#im0').click(500,350);
        cy.get('.jss132 > .jss164').should('exist');
    });
    it('check incorrect answer dragging area',function(){
        // cy.get(".grid-item").contains("Spot on an image").click({ force: true })
        cy.get('#ID0')
            .trigger('mousedown', { which: 1 }, { force: true })
            .trigger('mousemove', 300, 150, { force: true })
            .trigger('mouseup');

        cy.get('#edi_tabs > :nth-child(2) > a').click();
        cy.wait(3000);
        cy.get('#im0').click(300,150);
        cy.get('.jss132 > .jss164').should('exist')
    });

    it('#hptmain > :nth-child(1) > .btn', function(){
        cy.get('#hptmain > :nth-child(1) > .btn').click();
        cy.wait(4000);
        cy.get('#upload_media').click({force:true});
        cy.wait(5000);
        cy.get('#tab2').click();
        cy.wait(5000);
        cy.get(':nth-child(2) > .relative > .px-2 > .px-0').click();
        cy.get(':nth-child(2) > .relative > .px-2 > .dropdown-menu > .use_media > .dropdown-item').click();
        cy.get('#imgAlt').clear().type('testing');
        cy.get('#hotBorder').select('4');
        cy.get('#hotBorderColor').select('Black');
        cy.get('.bg-primary').contains('Submit').click();
    })
})