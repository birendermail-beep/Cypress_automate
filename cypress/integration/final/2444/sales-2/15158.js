/*
@author: Sundaram Tripathi
@master_project_id: 2444
@phase_id: 
@story_id: 15158
@story_name: inside sales contact
@path: final/Dump_Test_Automation
@test_case_name: inside_sales.js
@description: Edit user and save both contact primary and other
@test_steps: 
^test case of Add Contact
-Visit to website
-Login to ucertify.com
-Visit the admin
-Click the Other option
-Click on the inside sale
-Type the email id "testbot@ucertify.com"
-After that show the details and click on the setting icon in last column.
-Choose the "Edit" option.
-Open  "Notes" tab by default.
-After that go to "Phone" and click add.
-Add the primary contact and other number and click on the "save" button.
@test_data: - 
-Email id: email
-Primary contact: contact1
-Other Contact: contact1
@result: Number has been successfully saved
*/

import { Navbar, login_username, login_password, LoginPage , AdminArea } from '../../../../page-objects/pages/index' 
describe('Inside Sales Page Open', function() {

    it('In inside sales page change contact number', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            AdminArea.visitAdminArea(data.url);
            AdminArea.visitProductArea();
           
            cy.get('[data-cy=action_sales]').click({force:true});
            cy.visit(data.url+'/admin/inside_sales/instructor_portal.php?grid=1&action=grid_view&page=1&search_user_guid=06OEg&selected_tab=');
    })
        cy.get('[data-cy=add_phone_number]').click({force:true});
        cy.get('[data-cy=add_phone_number]').click({force:true});
        cy.get('#primary_number').clear().type('8799999999');
        cy.get('#office_number').clear().type('8799999999');
        cy.get('#save_contact_num').click({force:true});
    })
})