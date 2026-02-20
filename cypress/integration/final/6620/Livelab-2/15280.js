/*
@author: Sundaram Tripathi
@master_project_id: 6620
@phase_id: 
@story_id: 15280
@story_name: vma-daily_error_report
@path: final/Dump_Test_Automation
@Test_Case_Name: vma-daily_error_report.js
@description: Go to "Logos" and open the Daily error report
@test_steps: 
^Test case of Server Log with advance search
-Visit the website
-visit the vmadmin area
-Click on the "Logos" option and select "Daily Error Report"
-Successfully open the "Daily Error Report" page
-Click on the "Search" button and click also "Advance Search"
-Go to periods section and choose the "Today" options
-After that Click on the "Search" button
@test_data: N/A
@result: Successfully open the "Daily Error Report" page.
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe('VMA area', function() {

    beforeEach(function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url+'/custom/docker/vmadmin/index.php');
            cy.get('#logs_report').click({force:true});
        })
    }) 

    it('Show daily report',function(){
        LoginPage.visitOnClick('#daily_error_report'); 
        cy.get('.input-group-append > .dropdown-toggle').click({force:true});
        cy.get('#mng_advance_search').click({force:true});
        cy.get('#report_auto_date').select('Today',{force:true});
        cy.get('#adv_search_button').click({force:true});    
        
    });
})