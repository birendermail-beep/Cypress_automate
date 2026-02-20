/*
@author: Anirudh Pratap
@master_project_id: 6615
@phase_id: 10148
@story_id: 14978
@story_name: educator_activity_report_advance_search
@path: final/Educator
@test_case_name: educator_activity_report_advance_search.js
@description: educator_activity_report_advance_search
@test_steps:
^show the activity report
-goto the link: https://demo.ucertify.com:9040/
-click on my library
-click on user groups
-click on All groups
-check/select a group
-click on action button
-click on activity report
-click on select a course and select  app - training
-click on submit

@test_data: n/a

@result: select the group and show the activity report
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe("educator page testing", function() {
    it("track area in educator", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.website[0])
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
        })
        cy.get('[data-cy="mylibrary"]').click({ force: true })
        cy.get('[data-cy=user_groups] > .nav-link').click({ force: true })
        cy.get('[data-cy=all_groups]').click({ force: true })
        cy.get('#group_row_03QCg > .span1 > .d-flex > .custom_checkbox_new > .check_mark_custom').click({ force: true });
        cy.get('#user_group_settings').click({ force: true })
        cy.get('#activity_report').click({ force: true })
        cy.wait(2000);
        cy.get("#user_course_code1").select('APP-Training', { force: true });
        cy.get('#showClassGroupData').click();
    });
});