/*
@author: Sundaram Tripathi
@master_project_id: 6615
@phase_id: 
@story_id: 15118
@story_name: educator_admin_reports_trial
@path: final/Dump_Test_Automation
@Test_Case_Name: educator_admin_reports_trial.js
@description:
@test_steps: 
^open educator admin reports trial
-Click on this link: https://www.jigyaasa.info/?func=get_course_list&show=courses
- Click on the admin tab.
- Successfully open the admin page.
- After that click on the ""Reports"" dropdown button.
- And select the 'Trial through web' option.
- Open ""Advance Search"" and select fields data according your need.
- At the last click on the ""Search"" button.

@test_data: 
@result: Trial through report should be open.
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('Admin Area', function() {

    it('Educator admin report', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/?func=get_course_list&show=courses");
        })
        cy.get('[data-cy=admin_tab]').click({ force: true });
        cy.get('[data-cy=report_link]').click({ force: true });
        cy.get('[data-cy=trial_link]').click({ force: true });
        cy.wait(3000)
        cy.get('[data-cy=custom_btn]').click({ force: true });
    })
})