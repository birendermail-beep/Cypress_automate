/*
@author: Sundaram Tripathi
@master_project_id: 6622
@phase_id: 
@story_id: 15132
@story_name: filter_redreport_type
@path: final/Dump_Test_Automation
@Test_Case_Name: filter_redreport_type.js
@description: 
@test_steps: 
^Test case of focus area
- Visit focus area.
- Go to "More" option click and choose the "Reports" option.
- After that open new list with more option and choose the 'red report' option.
- Show the red report details and click.
- Choose the "Type" option and select any one after that show the reports.
@test_data: Type : "B"
@result: Successfully show the details of red report.
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe('Filter Red Report', function() {

    it('Filter red report according to type', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url+"/focus");
        })
            cy.get('[data-cy=more_tab] > .nav-link').click({force:true});
            cy.get('[data-cy=report_opt_more]').click({force:true});
            cy.get('[data-cy=red_report] > .dropdown-item').click({force:true});
            cy.get('#filter_type').select('B',{force:true});
        
    })
})