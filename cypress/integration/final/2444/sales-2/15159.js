/*
@author: Sundaram Tripathi
@master_project_id: 2444
@phase_id: 
@story_id: 15159
@story_name: inside sales email list page
@path: final/Dump_Test_Automation
@test_case_name: inside_sales_email_list_pages.js
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

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe('admin', function() {

    it('Open the email status in inside sales', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.wait(3000);
            cy.visit(data.url+'/admin/inside_sales/inside_sales_emails.php')
        });

    }) 
})