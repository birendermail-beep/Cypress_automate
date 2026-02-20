/*
@author: Sundaram Tripathi
@master_project_id: 2444
@phase_id: 
@story_id: 15161
@story_name: inside sales emails
@path: final/Dump_Test_Automation
@test_case_name: inside_sales_email.js
@description: Instructor portal inside sales page open with email id
@test_steps: 
^test case of inside sale
-Visit to website
-Login to ucertify.com
-Visit the admin
-Click the Other option
-Click on the inside sale
-Enter the email id.
@test_data: n/a
@result: Details has been successfully opened.
*/

import { Navbar, login_username, login_password, LoginPage , AdminArea } from '../../../../page-objects/pages/index' 
describe('Inside Sales Page Open', function() {

    it('In Inside sales open with email id', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            AdminArea.visitAdminArea(data.url);
        })
        AdminArea.visitProductArea2();
    })
})