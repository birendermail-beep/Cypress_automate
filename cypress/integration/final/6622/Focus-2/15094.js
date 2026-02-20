/*
@author: Sundaram Tripathi
@master_project_id: 6622
@phase_id: 
@story_id: 15094
@story_name: dashboard_report_send_email
@path: final/Dump_Test_Automation
@Test_Case_Name: dashboard_report_send_email.js
@description: 
@test_steps: 
^Test case of dashboard_report_send_email.js
-Click on this link: https://www.jigyaasa.info/focus/
- Go to ""More"" option click and choose the ""Reports"" option.
- After that open new list with more option and choose the 'red report' option.
- Show the red report details and click the ""view summary"" option.
- Open box and choose desired condidate name 
- Click the setting icon with ""No Of Exception"".
-Show two option ""Send Email"", ""Copy"".
- Click with ""send email"" option."

@test_data: N/A

@result: Red report should be open.
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe('Open Dashboard', function() {

    it('In dashboard send individual email', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url+"/focus");
        })
        cy.get('[data-cy=more_tab] > .nav-link').click({force:true});
        cy.get('[data-cy=report_opt_more]').click({force:true});
        cy.get('[data-cy=red_report] > .dropdown-item').click({force:true});
        cy.get('[data-cy=view_summary]').click({force:true});
        cy.get('[data-cy=setting_icon]').eq(8).click({force:true});
         cy.get('.dropdown-item').contains('Send Email').click({force:true});
        
    })
})