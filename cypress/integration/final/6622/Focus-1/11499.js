/*
@author: Anurag Chaurasia
@master_project_id: 6622
@phase_id: 9828
@story_id: 11499
@story_name: Execution Rating Report
@path: final/Focus
@test_case_name: Execution Rating Report
@description: N/A
@test_steps:

^Execution Rating report depicting % based on last 90 days
-From more menu, click reports and then click Execution rating report. Report will be displayed.

@test_data: n/a
@result: Execution Rating report depicting % based on last 90 days
*/

import { Navbar, login_username, login_password, LoginPage, FocusArea } from '../../../../page-objects/pages/index' 
describe('execution rating report', function() {
    it('execution rating report', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/focus");
            cy.get('[data-cy="more_tab"]').click();
            cy.get('[data-cy="report_opt_more"]').click();
            cy.get('[data-cy="executing_report_link"]').click();
        })
    })
})