/*
@author: Sundaram Tripathi
@master_project_id: 6622
@phase_id: 
@story_id: 15250
@story_name: red report manager name
@path: final/Dump_Test_Automation
@test_case_name:  red report manager name
@description: Fetch the name of manager
@test_steps: 
^Test case qq right pane
- visit on website
- Go to the focus
- Go to "More" option click and choose the "Reports" option.
- After that open new list with more option and choose the 'red report' option.
- Show the manager name.

@test_data: N/A
@result:
- Successfully show the name of managers. 
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe('Filter Red Report', function() {
    it('Display the managers name', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/focus");
        })
        cy.get('[data-cy=more_tab] > .nav-link').click({force:true});
        cy.get('[data-cy=report_opt_more]').click({ force: true });
        cy.get('[data-cy=red_report] > .dropdown-item').click({force:true});


    })
})