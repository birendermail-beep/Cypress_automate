/*
@author: Sundaram Tripathi
@master_project_id: 6622
@phase_id: n/a
@story_id: 15130
@story_name: filter_redreport_exception
@path: final/Dump_Test_Automation
@test_case_name: filter_redreport_exception.js
@description: 
@test_steps: 
^Fetch the reports
-Click on this link: https://www.jigyaasa.info/focus/
- Go to ""More"" option click and choose the ""Reports"" option.
- After that open new list with more option and choose the 'red report' option.
- Show the red report details and click.
- Go to the "Exception option and choose any one.
- After that show the details.

@test_data: n/a
@result: Red reports should be open.
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe('Filter Red Report', function() {

    it('Filter red report according to exception', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url) 
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url+"/focus");
        })
        cy.get('[data-cy=more_tab] > .nav-link').click({force:true});
        cy.get('[data-cy=report_opt_more]').click({force:true});
        cy.get('[data-cy=red_report] > .dropdown-item').click({force:true});

        cy.get('#filter_exception').select('Late coming (Attendance) (B)',{force:true})
        
    })
})