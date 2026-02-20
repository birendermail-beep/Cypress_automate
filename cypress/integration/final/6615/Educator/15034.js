/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id: 10148
@story_id: 15034
@story_name: educator_user_group_export
@path: final/Educator
@test_case_name: educator_user_group_export.js
@description:
@test_steps:
^select all the group then click on export
-goto the link: https://demo.ucertify.com:9040/
-click on my library
-click on user groups
-click on All groups
-click on exports
-click on user groups

@test_data: n/a
@result: select all the group then click on export
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe("educator page testing", function() {
    it("user group settings", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.website[0])
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.get('[data-cy=mylibrary]').click({ force: true })
            cy.get('[data-cy=user_groups] > .nav-link').click({ force: true })
            cy.get('[data-cy=all_groups]').click({ force: true })
        })
        cy.get('#user_group_report > thead > .always_show > .span1 > .custom_checkbox_new > .check_mark_custom').click();
        cy.get('#export_group_btn').click();
        cy.get('#group_export_btn').click();
    });
});