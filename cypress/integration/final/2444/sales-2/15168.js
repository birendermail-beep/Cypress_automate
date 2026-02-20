/*
@author: Sundaram Tripathi
@master_project_id: 2444
@phase_id: 
@story_id: 15168
@story_name: instructor portal stage list
@path: final/Dump_Test_Automation
@test_case_name: instructor_portal_stage_list.js
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
describe('Admin', function() {

    it('Inside sales Edit the history tab', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            AdminArea.visitAdminArea(data.url);
        })
        AdminArea.visitProductArea();
        LoginPage.visitOnClick('[data-cy=edit_opt]');
        cy.get('#stage_tab').click({force:true});
        cy.get('#stage_tab').click({force:true});
    }) 
})