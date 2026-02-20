/*
@author: Anirudh Pratap
@master_project_id: 6615
@phase_id: 10148
@story_id: 14979
@story_name: educator_add_lecture
@path: final/Educator
@test_case_name: educator_add_lecture.js
@description: educator_add_lecture
@test_steps:
^click on lecture plan open the page you can add the lecture
-goto the link: https://demo.ucertify.com:9040/
-click on my library
-Select a course and click on manage
-select instructor tool for the selected course
-click on design tab
-click on lecture plan
-click on add lecture plan

@test_data: n/a

@result: open lecture plan page to add lecture plan
*/

import { Navbar, login_username, login_password, LoginPage, InstructorPage } from '../../../../page-objects/pages/index'
describe("educator page testing", function() {
    it("educator add lecture", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        InstructorPage.showManage()
        InstructorPage.visitCourse()
        cy.get('[data-cy=educator_design]').click();
        cy.wait(3000);
        cy.get('[data-cy=lecture_plan]').click();
        cy.get('#lecture_2 > tfoot > .height_34 > .text-center > .choose_topics > :nth-child(2)').click();
    });
});