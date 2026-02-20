/*
@author: Sundaram Tripathi
@project_group: 
@phase_id: 
@Story_Id:
@story_name: zendesk_report
@path: final/Dump_Test_Automation
@Test_Case_Name: zendesk_report.js
@description: Open zendex and to to trach acticity
@test_steps: 
^Test case of zendesk
-visit the zendesk activity report
@test_data: n/a
@result: Successfully open the Zendesk Activity Report
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('Admin Area', function() {

    it('Open Zendesk Page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/zendesk/zendesk.php?action=activity");
        })
    })
})