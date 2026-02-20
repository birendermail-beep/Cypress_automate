/*
@author: Sundaram Tripathi
@master_project_id: 7761
@phase_id: 
@Story_Id: 15062
@story_name: admin_bundle_edit
@path: final/7761/orderbook
@Test_Case_Name: admin_bundle_edit.js
@description: Open the bundle edit
@test_steps: 
^Test case of bundle it
- visit on this link "https://www.jigyaasa.info/admin/entity_group.php?action=edit_bundle"
-Successfully open the admin bundle edit page

@test_data: n/a
@result: Successfully open the bundle edit page
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea, CreateArea } from '../../../../page-objects/pages/index'
describe('Admin Area', function () {

    it('Inside sales advance search', function () {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.wait(7000);
            cy.visit(data.url + '/admin/entity_group.php?action=edit_bundle');
        });
    })
})