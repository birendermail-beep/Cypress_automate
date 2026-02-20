/*
@author: Anirudh Pratap
@master_project_id: 6615
@phase_id: 10148
@story_id: 11684
@story_name: Student Performance Report
@path: final/Educator
@test_case_name: Student Performance Report.js
@description: 
@test_steps: 
^show student performance
-goto the link: https://demo.ucertify.com:9040/
-click on my library
-click on user groups
-click on my groups
-click on open dropdown
-click on open group
-select course as app-training
-click on submit
-click on more
-click on analytics
-click on student performance

@test_data: n/a
@result: show student performance
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe("educator page testing", function() {
    it("track area in educator", function() {
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
        //cy.get('[data-cy="open"]').eq(1).click();
        cy.get("[data-cy='user_course_code1']").select("APP-Training", { force: true });
        cy.get("[data-cy='showClassGroupData']").click();
        cy.wait(3000);
        cy.get('[data-cy="analytics_track_cy"]').click();
        cy.get("[data-cy='performance_analytics_cy']").click();
    });
});