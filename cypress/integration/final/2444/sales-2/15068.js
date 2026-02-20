/*
@author: Sundaram Tripathi
@master_project_id: 2444
@phase_id: 
@Story_Id: 15068
@story_name: admin_slow_query_list_unique_list
@path: final/2444
@Test_Case_Name: admin_slow_query_list_unique_list.js
@description: Go to admin area and press direct url
@test_steps: 
^Test case of admin area
- visit on admin area.
- After that click on this link https://www.jigyaasa.info/admin/admin_slow_query.php
- Check the "Unique list" option.
- And successfully open the list.

@test_data: n/a
@result: Successfully filter data and show the details
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea } from '../../../../page-objects/pages/index' 
describe('Admin Area', function() {
    it('Open admin and show the details with unique list', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            AdminArea.visitAdminArea(data.url);
            cy.visit(data.url + '/admin/admin_slow_query.php')
        })
        cy.get('.custom-control-label').click({ force: true })
        //cy.get('.custom-control-label').click({ force: true })
    })
})