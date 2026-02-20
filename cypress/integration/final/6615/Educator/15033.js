/*
@author: Anurag Chaurasia
@master_project_id: 6615
@phase_id : 10148
@story_id: 15033
@story_name: educator_user_class_group_form
@path: final/Educator
@test_case_name: educator_user_class_group_form.js
@description : educator_user_class_group_form
@test_steps:

^show the user class group form
-goto the link: https://demo.ucertify.com:9040/
-click on my library
-click on user groups
-click on open

^show the activity report
-goto the link: https://demo.ucertify.com:9040/
-click on my library
-click on user groups
-click on All groups
-check/select a group
-click on action button
-click on activity report
-click on select a course and select  ICT computing essential test
-click on submit

@test_data: Login credential.

@result: select the user group and show the activity report
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe("All group in educator", function() {
    beforeEach('All group in educator', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.website[0])
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
        })
    })
    it("show the user class group form", function() {
        cy.fixture('global').then(data => {
            cy.get('[data-cy=mylibrary]').click();
            cy.get('[data-cy=user_groups]').click();
            cy.get('[data-cy=all_groups]').click();
            cy.get('[data-cy=open]').eq(0).click({ force: true });
        })
    });
    it("user group area", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.website[0] + "/?func=get_course_list&show=courses/?host=" + data.website_value[0]);
            cy.visit(data.website[0] + "/educator/?func=get_user_groups&all_groups=1");
            cy.get('#group_row_03QCg > .span1 > .d-flex > .custom_checkbox_new > .check_mark_custom').click();
            cy.visit(data.website[0] + "/educator/?func=get_user_groups&action=activity_report&class_group_code=03QIj&pages=1&page=1&all_groups=1&search_usergroup=&org_campus_code=");
            cy.wait(2000);
            cy.get("#user_course_code1").select('ICT Computing Essentials Test', { force: true });
            cy.visit(data.website[0] + "/educator/?func=new_activity_report&action=activity_report&class_group_code=03QCg,03QIj,03QjI,03Qji,03QKn,03QKO,03QKQ,03QKR,03QKr,03QKs,03QKV,03Qk1,03Qka,03QkF,03QkN,03QkO,03Qko,03QkP,03QkR,03QkS,03QkT,03Qku,03QkX,03Qky,03QkZ,03QL1,03QL2,03QL5,03QL6,03QLA&showGroupEnrollment=1&pages=1&page=1&all_groups=1&search_usergroup=&org_campus_code=&user_course_code=03PGz");
        })
    });
});