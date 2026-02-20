/*
@author: Sundaram Tripathi
@master_project_id: 2444
@phase_id: N/A
@story_id: 15163
@story_name: inside sales org merge table
@path: final/Dump_Test_Automation
@test_case_name: inside_sales_org_merge_table.js
@description: Show the details og revert merge org
@test_steps: 
^test case of inside sale
-Visit to website
-Login to ucertify.com
-Visit the admin
-Click the Other option
-Click on the inside sale
-Click on the Inside Sales Org
-Visit the page inside sales org page
@test_data: n/a
@result: Successfully open the revert page
*/

import { Navbar, login_username, login_password, LoginPage , AdminArea } from '../../../../page-objects/pages/index' 
describe('Inside Sales Page Open', function() {

    beforeEach('Inside Sales Org Merge Table', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            AdminArea.visitAdminArea(data.url);
        })
    })
    it('Click on the inside sales org option',function(){
        cy.get('#others_tab').click({force:true});
        cy.get('.marker > :nth-child(3) > [data-cy=other_start]').click({force:true});
        LoginPage.visitOnClick(':nth-child(4) > .nav-link');     
    })
})