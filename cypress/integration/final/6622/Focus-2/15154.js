/*
@author: Sundaram Tripathi
@master_project_id: 6622
@phase_id: 
@Story_Id:
@story_name: img_carousel_modal
@path: final/Dump_Test_Automation
@Test_Case_Name: img_carousel_modal.js
@description: Upload image then click annotated
@test_steps: 
^Test case of image carousel
- visit on website
- Go to the focus area
- Click on the "More" tab.
- Select the "Capturing tool".
- Also click on the "Image Annotation Tool".
- Click on the "upload files" and select any one image.
- image has been uploaded then click on the "Annotated" button.
- Show image dialog box then click on the save icon.
- Message will be generated top of the page then click.
- Show the image and carousel_model then click on the 1 and 2 options
@test_data: N/A
@result:
- Successfully open the image carousel option
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe('Focus area', function() {

    it('Image Carousel modal', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url+'/focus');
            cy.get('[data-cy=more_tab] > .nav-link').click({force:true});
        })
        cy.get('.more_options_menu').click({force:true});
        LoginPage.visitOnClick('[data-cy=capture_tool] > .dropdown-menu > :nth-child(2) > .dropdown-item');
        cy.get('#fileUploadSelector').click({force:true});
        cy.get(':nth-child(1) > :nth-child(6) > .dropdown > .btn').click({force:true});
        cy.get(':nth-child(1) > :nth-child(6) > .dropdown > .dropdown-menu > :nth-child(1) > .dropdown-item').click({force:true});
        cy.get('[data-slide-to="0"] > .outline1').click({force:true});
        cy.get('[data-slide-to="1"] > .outline1').click({force:true});
        cy.get('[data-slide-to="2"] > .outline1').click({force:true});
    })
})