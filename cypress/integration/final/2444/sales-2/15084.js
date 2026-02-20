/*
@author: Sundaram Tripathi
@master_project_id: 2444
@phase_id: 
@Story_Id: 15084
@story_name: checklist_report
@path: final/Dump_Test_Automation
@Test_Case_Name: checklist_report.js
@description: Go to the certification home page
@test_steps: 
^Test case of is eval on search
- visit on the admin area
- click on the others tab
- click on the inside sales option
- visit on this link "/admin/inside_sales/kpi.php?action=checklist_report"
@test_data: N/A
@result:Successfully open the checklist report
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe('Inside Sales Page Open', function() {

    it('Open checklist', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url+"/admin/inside_sales/kpi.php?action=checklist_report");
        })
    })
})