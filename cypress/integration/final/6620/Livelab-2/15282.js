/*
@author: Sundaram Tripathi
@master_project_id: 6620
@phase_id: 
@story_id: 15282
@story_name:  vma-machine_issue_version_history
@path: final/Dump_Test_Automation
@Test_Case_Name: vma-machine_issue_version_history.js
@description: Go to "Logs" and open the server log
@test_steps: 
^Test case of Server Log with advance search
-Visit the website
-visit the vmadmin area
-Click on the "Logs" and select the "Machine Issue Report" option
-Choose data according your need
-Then click on the "Search" button
-And still set the values in others fields by default
-Machin will be display and scroll the page and click the setting icon in row number 14 and also checked symbol
-Also click on the "Edit" option.
@test_data: 
    -Row number  14
@result: Successfully open the machine issue dialog
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe('VMA area', function() {

    it('show the version issue report', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url+'/custom/docker/vmadmin/index.php');
        })
        cy.get('#logs_report').click({force:true});
        LoginPage.visitOnClick('#machine_issue_report');
        cy.get('[data-cy=sch_btn_adv]').click({force:true});
        cy.get('#mng_advance_search').click({force:true});
        cy.get('#adv_search_button').click({force:true});
        cy.get(':nth-child(10) > .dropdown > .btn').eq(13).click({force:true});
        cy.get('#update_status_8497').click({force:true});
    }) 
})