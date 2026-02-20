/*
@author: Sundaram Tripathi
@master_project_id: 6622
@phase_id: 
@story_id: 15093
@story_name: dashboard_redreport_view_summary
@path: final/Dump_Test_Automation
@Test_Case_Name: dashboard_redreport_view_summary.js
@description: 
@test_steps: 
^Test case of dashboard_redreport_view_summary.js
-Click on this link: https://www.jigyaasa.info/focus/
- Go to ""More"" option click and choose the ""Reports"" option.
- After that open new list with more option and choose the 'red report' option.
- Click on the ""view summary"" option.
- After that show the dialog box.

@test_data: N/A

@result: successfully show the advance search option.
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe('Show summary details', function() {

    it('Show the view summary ', function() {
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
        
    })
})