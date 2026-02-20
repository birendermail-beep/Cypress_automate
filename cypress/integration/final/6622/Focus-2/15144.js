/*
@author: Sundaram Tripathi
@project_group: 
@phase_id: 
@story_id: 15144
@story_name: focus_qq_form
@path: final/Dump_Test_Automation
@Test_Case_Name: focus_qq_form.js
@description: Go to the weekly goal and open the qq form
@test_steps: 
^Test case of QQ Form
- visit on website
- Go to the focus area
- Click on the "Goal/Project" tab.
- Select the "Weekly Goal".
- Click on the setting icon in qq required bug.
- Click on the "Fill QQ" form.
@test_data:  N/A
@result: Successfully open the QQ Form 
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('Focus Area', function() {

    it('QQ Form', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/focus');
        })
        cy.get('[data-cy=goal_tab] > .nav-link').click({ force: true });
        cy.get('[data-cy=weekly_goal] > .changeURL').click({ force: true });
        cy.get('.bug_setting > .dropdown').eq(0).click({ force: true });
        cy.get('.fill_qq ').click({ force: true });


    })
})