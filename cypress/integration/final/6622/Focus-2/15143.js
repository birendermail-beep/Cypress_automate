/*
@author: Sundaram Tripathi
@master_project_id: 6622
@phase_id: n/a
@story_id: 15143
@story_name: focus_image_upload
@path: final/Dump_Test_Automation
@test_case_name: focus_image_upload.js
@description:
-@test_steps: 
^test case of Image Annotation Tool
-Visit to website.
-Login to ucertify.com.
-visit the focus area
-Click on the "More" tab
-After that click on the "Capturing Tool".
-Click on the "Image Annotation Tool".
-Successfully open image upload page.
@test_data: n/a
@result: Successfully open image annotation tools.
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe('Focus Area', function() {

    beforeEach('Image Upload Page In Focus', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url+"/focus");
        })
            cy.get('[data-cy=more_tab] > .nav-link').click({force:true});
            cy.get('.more_options_menu').click({force:true});
    })

    it('Go capturing to annotation',function(){
        cy.get(':nth-child(11) > .dropdown-menu > :nth-child(2) > .dropdown-item').click({force:true});
    })

    it('Open Image Annotation Tool Page',function(){
        cy.fixture('global').then(data => {
            cy.visit(data.url+'/focus/capture_tool/index.php?func=annotated_listing')
        })
    })
})