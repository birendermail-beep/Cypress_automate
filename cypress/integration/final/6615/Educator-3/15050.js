/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id: 10148
@story_id: 15050
@story_name: reseller_enroll
@path: final/Educator
@test_case_name: reseller_enroll.js
@description:
@test_steps:
^test case Instructor area
-visit the website
-login to website
-visit url jigyaasa.info/educator/enrollment.php?action=reseller_enroll
@test_data: n/a
@result: add the course and enroll the student
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe("educator page testing", function() {
    it("enrollment area", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/educator/enrollment.php?action=reseller_enroll");
        })
    });
});