/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id: 10148
@story_id: 14987
@story_name: educator_assignment_result
@path: final/Educator
@test_case_name: educator_assignment_result.js
@description: educator_assignment_result
@test_steps:
^assignment area in educator
-goto the link: https://demo.ucertify.com:9040/
-click on my library
-Select a course and click on manage
-select instructor tool for the selected course
-click on assignments"

@test_data: n/a
@result: show the assignment list
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
        cy.fixture('global').then(data => {
            cy.visit(data.url + "/educator/admin.php?func=assignment_results&org_id=00WwL&my_user_email=" + data.author_email[0] + "&courses_list=00ucM&getResults=user&limit=30&custom_search=1");
        })
    });
});