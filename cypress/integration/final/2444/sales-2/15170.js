/*
@author: Sundaram Tripathi
@master_project_id: 2444
@phase_id: 
@story_id: 15170
@story_name: invoice diagnostic table
@path: final/Dump_Test_Automation
@test_case_name: invoice_diagnostic_table.js
@description: In inside sales and add info
@test_steps: 
^Edit the history tab
-Click on this link: https://www.jigyaasa.info/admin
-Click on the ""Others"" tab.
-After that click on the ""Inside Sales"" option.
-Successfully open the inside sales page.
-Go to the test filed and enter email id after that click on the search icon button.
-Successfully open the details of email id.
-Then click to the setting icon and select the ""Edit"" option.
-After that click on the history tab.
-Successfully open the history page.

@test_data: email id
@result: History details will be show
*/

import { Navbar, login_username, login_password, LoginPage , AdminArea } from '../../../../page-objects/pages/index' 
describe('Admin Area', function() {

    it('Invoice Diagnostic Record', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            AdminArea.visitAdminArea(data.url);
        })
        cy.get(':nth-child(6) > [data-cy=start_button] > .btn').click({force:true});
        cy.get('[data-cy=adv_search]').click({force:true});
        cy.get('[data-cy=get_invoice_cy]').type('04p0f,05WSs',{force:true});
        cy.get('[data-cy=submit_form_cy]').click({force:true});    
    }) 
})