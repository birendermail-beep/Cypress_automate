/*
@author: Sundaram Tripathi
@master_project_id: 2444
@phase_id: 
@story_id: 15167
@story_name: instructor info
@path: final/Dump_Test_Automation
@test_case_name: instructor_info.js
@description: In inside sales and add info
@test_steps: 
^test case of inside sale
-Visit to website
-Login to ucertify.com
-Visit the admin
-Click the Other option
-Click on the inside sale
-Enter the email id
-Click on the Add button
@test_data: email id
@result: Successfully show the page
*/

import { Navbar, login_username, login_password, LoginPage , AdminArea } from '../../../../page-objects/pages/index' 
describe('Inside Sales', function() {

    it('Add button and open instructor info page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            AdminArea.visitAdminArea(data.url);
            AdminArea.visitOrderbookOtherTab();
            cy.get('.marker > :nth-child(3) > [data-cy=other_start]').click({force:true});
            cy.get('[data-cy=text_area_sales]').type('testbot@ucertify.com');
            cy.get('[data-cy=search_btn_append]').click({force:true});
            cy.visit(data.url+"/admin/inside_sales/instructor_portal.php?action=add&email_add=testbot@ucertify.com");
        })
    })
})