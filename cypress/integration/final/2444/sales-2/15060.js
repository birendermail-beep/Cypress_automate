/*
@author: Sundaram Tripathi
@master_project_id: 2444
@phase_id: 
@Story_Id: 15060
@story_name: activity_item_report
@path: final/Dump_Test_Automation
@Test_Case_Name: activity_item_report.js
@description: Open acitivty report
@test_steps:
^Test case of admin area in item report 
-visit the admin area.
-GO to the item report
@test_data: n/a
@result: - Successfully open the item report page.
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea } from '../../../../page-objects/pages/index' 
describe('Admin Aea', function() {

    it('Activity of item report', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/admin/item_report.php');
        })
    })
})