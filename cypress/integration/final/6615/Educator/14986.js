/*
@author: Avinash pandey
@master_project_id: 6615
@phase_id: 10148
@story_id: 14986
@story_name: educator_assignment_list_in_tab.
@path: final/Educator
@test_case_name: educator_assignment_list_in_tab..js
@description: educator_assignment_list_in_tab.
@test_steps:
^assignment list
-goto the link: https://demo.ucertify.com:9040/
-click on my library
-Select a course and click on manage
-select instructor tool for the selected course
-click on assignments
-click on settings icon
-show on assign /modify/preview

@test_data: n/a
@result: open a assignment list and see the scheduled, assign, and preview
*/

import { Navbar, login_username, login_password, LoginPage, InstructorPage } from '../../../../page-objects/pages/index'
describe("educator page testing", function() {
    it("Assignments area in educator", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            InstructorPage.visitCourseSupport();
        })
        cy.get('[data-cy="assessments"]').click()
        cy.get('[data-cy="action_assignment_btn"]').eq(0).click({ force: true })
    });
});