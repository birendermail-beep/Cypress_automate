/*
@author: Sundaram Tripathi
@master_project_id: 6618
@phase_id: N/A
@story_id: 15205
@story_name: pe-healthcheck
@path: final/Dump_Test_Automation
@test_case_name: pe-healthcheck.js
@description: 
@test_steps: 
^Helth check page
-Click on this link: https://www.jigyaasa.info/healthcheck.php
-Successfully open the helthcheck page.

@test_data: n/a

@result: helth check page will be open
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('Website', function() {

    it('Open the helthcheck page.', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.wait(3000);
            cy.visit(data.url + '/healthcheck.php')
        });

    })
})