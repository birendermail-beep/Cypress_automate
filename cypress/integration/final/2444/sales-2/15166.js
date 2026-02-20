/*
@author: Sundaram Tripathi
@master_project_id: 2444
@phase_id: 
@story_id: 15166
@story_name: inside sales
@path: final/Dump_Test_Automation
@test_case_name: inside_sales.js
@description: Instructor portal inside sales page open
@test_steps: 
^test case of inside sale
-Visit to website
-Login to ucertify.com
-Visit the admin
-Click the Other option
-Click on the inside sale
@test_data: n/a
@result: Inside Page has been successfully opened
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe('Inside Sales Page Open', function() {

    it('Opening inside sales pages', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url+"/admin");
        })
        cy.get('#others_tab').click({force:true});
        cy.get('.marker > :nth-child(3) > [data-cy=other_start]').click({force:true});
    })
})