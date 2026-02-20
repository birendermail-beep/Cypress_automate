/*
@author: Sundaram Tripathi
@project_group: 
@phase_id: 
@story_id: 15152
@story_name: get_prj_bug
@path: final/Dump_Test_Automation
@Test_Case_Name: get_prj_bug.js
@description: Open my project and go to the bug details
@test_steps: 
^Test case of bug tab in project
- visit on website
- Go to the focus area
- Click on the "Goal/Project" tab.
- Select the "My Projects".
- Go to the right side and click on the "Bugs" tab.
- Show the details.
@test_data: N/A
@result: Successfully open the bugs tab
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe('Focus Area', function() {

    it('Events in focus', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url+'/focus');
        })
        cy.get('[data-cy=goal_tab] > .nav-link').click({force:true});
        cy.get('[data-cy=my_project]').click({force:true});
        cy.get(':nth-child(2) > .switchtabs').click({force:true});
        
    })
})