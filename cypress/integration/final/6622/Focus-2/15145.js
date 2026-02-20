/*
@author: Sundaram Tripathi
@project_group: 
@phase_id: 
@story_id: 15145
@story_name: focus_qq_inner_form.js
@path: final/Dump_Test_Automation
@Test_Case_Name: focus_qq_inner_form.js.js
@description: 
@test_steps: 
^qq required form
-Click on this link: https://www.jigyaasa.info/focus/index.php
- Successfully open the focus area.
- Click on the ""Goal/Project"" option.
- And select the ""Weekly Goal"" option.
- Show the bug and go to the action and click on the setting icon.
- And select the ""Fill QQ"" option.
- Successfully open the QQ Form"

@test_data: Bug id : 601254 
@result: QQ Form should be open
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('Focus Area', function() {

    it('Open QQ Form', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/focus");
        })
        cy.get('[data-cy=goal_tab] > .nav-link').click({ force: true });
        cy.get('[data-cy=weekly_goal] > .changeURL').click({ force: true });
        cy.get('.dropdown-menu > :nth-child(1) > .changeURL').click({ force: true });
        cy.get('.dropdown > .icomoon-new-24px-gear-1').eq(0).click({ force: true });
        cy.get('.dropdown-menu > .qq_link > .fill_qq').click({ force: true });

    })
})