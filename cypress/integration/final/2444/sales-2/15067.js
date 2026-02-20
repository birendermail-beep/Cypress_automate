/*
@author: Sundaram Tripathi
@master_project_id: 2444
@phase_id: 
@story_id: 15067
@story_name: admin_slow_query_list_01
@path: final/2444
@Test_Case_Name: admin_slow_query_list_01.js
@description: Go to admin area and press direct url
@test_steps: 
^Test case of admin area
- visit on admin area.
- Click on the start button in "Server Logs" option.
- visit on this https://www.jigyaasa.info/admin/admin_slow_query.php

@test_data: n/a
@result: visit on this link "https://www.jigyaasa.info/admin/admin_slow_query.php"
*/
import { Navbar, login_username, login_password, LoginPage, AdminArea } from '../../../../page-objects/pages/index' 
describe('Admin Area', function() {
    it('Open admin and show the details', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/admin/admin_slow_query.php')
        })
    })
})