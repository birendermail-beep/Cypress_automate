/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id: 10148
@story_id: 15037
@story_name: educator_user_not_course
@path: final/Educator
@test_case_name: educator_user_not_course.js
@description:
@test_steps:
^show the user detail
-goto the link: https://demo.ucertify.com:9040/
-click on my library
-click on user groups
-click on my groups
-click on open dropdown
-click on open group
-select course as uCertify TestKit
-click on submit

@test_data: n/a
@result: show the table of user detail
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe("educator page testing", function() {
    it("user group area in educator", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.website[0])
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.website[0] + "/?func=get_course_list&show=courses/?host=" + data.website_value[0]);
            cy.visit(data.website[0] + "/educator/?func=get_user_groups");
        })
        cy.get('[data-cy=user_groups]').click();
        cy.get('[data-cy=all_groups]').click();
        cy.get('.dropdown > .btn').eq(1).click();
        cy.get("#open_inside_03QjI").click();
        cy.get("#user_course_code1").select("uCertify TestKit", { force: true });
        cy.get("[data-cy='showClassGroupData']").contains("Submit").click();
    });
});