/*
@author: Sundaram Tripathi
@master_project_id: 6620
@phase_id: 
@story_id: 15284
@story_name: vma-server_logs_limit
@path: final/Dump_Test_Automation
@Test_Case_Name: vma-server_logs_limit.js
@description: Go to "Logs" and open the server log
@test_steps: 
^Test case of Server Log with advance search
-Visit the vmadmin area
-Click on the "Logs" tab
-select the "Server Log" option
-Click on the "Search" button and also click on the "Advance Search"
-Open dialog box limit field set by default 30 and still press the "Search" button 
@test_data: Limit  30
@result: Successfully open the server logs page
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
        
    it('Click Server Logs',function(){    
        cy.get('#server_logs').click({force:true});
    })

    it('Open Server Log',function(){
        cy.fixture('global').then(data => {
            cy.visit(data.url+'/custom/docker/vmadmin/index.php?func=logs&action=server_logs');
        })
        cy.get('.input-group-append > .dropdown-toggle').click({force:true});
        cy.get('#mng_advance_search').click({force:true});
        cy.get('#adv_search_button').click({force:true});
                    
    });
})