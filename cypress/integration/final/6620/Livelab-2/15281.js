/*
@author: Sundaram Tripathi
@master_project_id: 6620
@phase_id: 
@story_id: 15281 
@story_name: vma-machine_issue_report
@path: final/Dump_Test_Automation
@Test_Case_Name: vma-machine_issue_report.js
@description: Show the machine issue report according to submit button
@test_steps: 
^Test case of Server Log with advance search
-Visit the website
-visit the vmadmin area
-Click on the "Logs" dropdown button.
-Click on the "Machine Issue Report" option.
-Successfully open the "Machine Issue Report" page.
-Go to text field and type machine name and click on the setting icon button.
-Search data display otherwise show message "record not found".

^show the machine issue report with report type
-Visit the website
-Open vmadmin.
-Click on the "Logs" button.
-Select the "Machine Issue Report".
-Click on the "Search" button after that click on the "Advance serach".
-Go to the report type and select the "content issue" option.
-After that click on the "Search" button.
@test_data: 
    -Report Type  "Content Issue"
@result: Successfully open the report for content type
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe('VMA area', function() {

    beforeEach('Show the content diagnosis', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url+'/custom/docker/vmadmin/index.php');
        })
        cy.get('#logs_report').click({force:true});
        LoginPage.visitOnClick('#machine_issue_report');
        
    }) 
    it('Show the machine issue on submit',function() {
        cy.get('[data-cy=search_txt]').type('bs16',{force:true});
        cy.get('[data-cy=search_txt_btn]').click({force:true});
    })
    it('Show the machine issue report with report type',function() {
        cy.get('[data-cy=sch_btn_adv]').click({force:true});
        cy.get('#mng_advance_search').click({force:true});
        cy.get("#report_type").select('Content Issue',{force:true});
        cy.get('#adv_search_button').click({force:true});
    })
})