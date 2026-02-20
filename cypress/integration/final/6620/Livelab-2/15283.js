/*
@author: Sundaram Tripathi
@master_project_id: 6620
@phase_id: 
@story_id: 15283
@story_name: vma-server_logs_action_type
@path: final/Dump_Test_Automation
@Test_Case_Name: vma-server_logs_action_type.js
@description: Go to "Logs" and open the server log
@test_steps: 
^Test case of Server Log with advance search
-Visit the website
-visit the vmadmin area
-Click on the "Logs" and select the "Server Logs option
-Click on the "Search" button and also click on the "Advance Search"
-Open dialog box and go to the action field and select the "Total Login/Logout" option
-And still set the values in others fields by default
-Click on the "Search" button.
@test_data: 
-Action Type  Total Login/Logout or Not in whitelist
@result: Successfully filter server logos according to action type
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe('VMA area', function() {
    beforeEach( function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url+'/custom/docker/vmadmin/index.php');
            cy.get('#logs_report').click({force:true});
        })
    }) 
    it('Open Server Log With Action Type',function(){
        LoginPage.visitOnClick('#server_logs');
        cy.get('.input-group-append > .dropdown-toggle').click({force:true});
        cy.get('#mng_advance_search').click({force:true});
        cy.get('#action_type').select('Total Login/Logout',{force:true});
        cy.get('#adv_search_button').click({force:true});
    });
})