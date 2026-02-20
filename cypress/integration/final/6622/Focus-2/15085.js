/*
@author: Sundaram Tripathi
@master_project_id: 6622
@phase_id: 
@story_Id: 15085
@story_name: checklist_users_info.js
@path: final/Dump_Test_Automation
@Test_Case_Name: checklist_users_info.js
@description: Go to admin tab and open eval copy report
@test_steps: 
^Test Case of demo page
- Open "Focus" area
- Click on the "More" button
- Click on the "Start Demo"
- Successfully open the start demo page
@test_data: N/A
@result: - Successfully open the start demo page
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe('Focus Area', function() {

    it('Show the demo user checklist info', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url+'/focus');
        })
        cy.get('[data-cy=more_tab] > .nav-link').click({force:true});
        LoginPage.visitOnClick('[data-cy=start_demo_link]');
    }) 
})