/*
@author: Anurag Chaurasia
@master_project_id: 6622
@phase_id : 6618
@story_id: 15135
@story_name: focus_bug_transfer_report
@path: final/Dump_Test_Automation
@test_case_name: focus_bug_transfer_report.js
@description : shows bug transfer report
@test_steps: 
^test case of shows bug transfer report
- Login In ucertify portal
- Go tho this link https://www.jigyaasa.info/author
- switch to more tab
- Goto bug transfer report report under reports  
- bug transfer report will be shown

@test_data: Login credential

@result: bug transfer report will be shown
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe('bug transfer report', function() {
    it('bug transfer report', function(){
        cy.fixture('global').then(data => {
        cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url+"/focus");
            cy.get('[data-cy="more_tab"]').click(); 
            cy.get('[data-cy="report_opt_more"]').click();  
            cy.get('[data-cy="bug_transfer"]').click();  
        })
    })
})
