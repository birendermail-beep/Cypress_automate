/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id: 10148
@story_id: 15012
@story_name: educator_no_course_selected
@path: final/Educator
@test_case_name: educator_no_course_selected.js
@description:
@test_steps:
^test case Instructor area
-visit the website
-login in website
-visit educator dashboard
@test_data: n/a
@result: direct open the course
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe("admin page testing", function() {
    it("no selected course in educator", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/educator/?func=report&action=track_full&u_course_code=.03yJU");
        })
    });
});