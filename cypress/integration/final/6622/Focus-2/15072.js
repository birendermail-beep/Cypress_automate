/*
@author: Sundaram Tripathi
@master_project_id: 6622
@phase_id: 
@Story_Id: 15072
@story_name: annotated_listing
@path: final/Dump_Test_Automation
@Test_Case_Name: annotated_listing.js
@description: Go to the annotation listing page
@test_steps: 
^Test case of annotated files
- visit on website
- Go to the Focus area
- Click on the "More" tab.
- Select the "Capturing tool".
- Also click on the "Image Annotation Tool".
- Click on the "upload files" and select any one image.
- image has been uploaded then click on the "Annotated" button.
- Show image dialog box then click on the save icon.
- Message will be generated top of the page then click.
- Data has exist show the list otherwise data not exist
@test_data: N/A
@result: Successfully show the annotation listing page
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe('Focus area', function() {

    it('Annotated Listing', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url+'/focus');
            cy.get('[data-cy=more_tab] > .nav-link').click({force:true});
        })
        LoginPage.visitOnClick('[data-cy=capture_tool] > .dropdown-menu > :nth-child(2) > .dropdown-item');
        cy.get('#fileUploadSelector').click({force:true});
    })
})