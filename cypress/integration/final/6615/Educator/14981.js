/*
@author: Anirudh Pratap
@master_project_id: 6615
@phase_id: 10148
@story_id: 14981
@story_name: educator_admin_last_login_data
@path: final/Educator
@test_case_name: educator_admin_last_login_data.js
@description: educator_admin_last_login_data
@test_steps:
^login info
-visit the website
-click on my library
-Select a course and click on manage
-select instructor tool for the selected course
-click on track
-click on any element of last login column.

@test_data: n/a

@result: show the detail of last login info
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe("educator page testing", function() {
    it("track area in educator", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/educator/?func=class_edit&u_course_code=02sBw.03yJU");
        })
        cy.get(".nav-item").contains("Track").click({ force: true });
        cy.get('.open_last_login_modal').eq(0).click({ force: true });
    });
});