/*
@author: Anirudh Pratap
@master_project_id: 6615
@phase_id: 10148
@story_id: 11683
@story_name: Competency Report
@path: final/Educator
@test_case_name: Competency Report.js
@description: 
@test_steps: 
^show competency analytics report
-goto the link : https://demo.ucertify.com:9040/
-click on my library
-Select a course and click on manage
-select instructor tool for the selected course
-click on track
-click on analytics
-click on comptency
-click on test type and select Lab

^show competency analytics report
-goto the link : https://demo.ucertify.com:9040/
-click on my library
-click on user groups
-click on my groups
-click on open dropdown
-click on open group
-select course as app-training
-click on submit
-click on analytics
-click on comptency

@test_data: n/a
@result: show competency analytics report.
*/

import { Navbar, login_username, login_password, LoginPage, InstructorPage } from '../../../../page-objects/pages/index'
describe("educator page testing", function() {
    it("track area in educator", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            InstructorPage.visitEducatorDashboard(data.url);
        })
        cy.get('[data-cy=track]').click({ force: true })
            //all analytics tab of dropdown
        cy.get('[data-cy=analytics_track_cy]').click({ force: true })
            //competency btn
        cy.get('[data-cy=competency_analytics_cy]').click({ force: true })
        cy.get("#test_type").select("Lab", { force: true });
    });

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
        cy.get("#user_course_code1").select("APP-Training", { force: true });
        cy.get("#showClassGroupData").contains("Submit").click();
        cy.get('[data-cy=analytics_track_cy]').click();
        cy.get('[data-cy=competency_analytics_cy]').click();
    });
});