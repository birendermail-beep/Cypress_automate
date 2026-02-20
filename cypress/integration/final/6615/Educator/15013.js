/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id: 10148
@story_id: 15013
@story_name: educator_no_section
@path: final/Educator
@test_case_name: educator_no_section.js
@description:
@test_steps:
^show all the section of the course
-goto the link: https://demo.ucertify.com:9040/
-click on my library
-Select a course and click on manage

@test_data: n/a
@result: show all the section of the course
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe("educator page testing", function() {
    it("design area", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/?func=get_course_list&show=courses");
        })
        cy.get('[class_name=""] > .float-right').contains("Manage").click({ force: true });
    });
});