/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id: 10148
@story_id: 15009
@story_name: educator_lms_deeplinking_dashboard
@path: final/Educator
@test_case_name: educator_lms_deeplinking_dashboard.js
@description: educator_lms_deeplinking_dashboard1
@test_steps:
^click on selectbox and select the canvas
-goto the link: https://demo.ucertify.com:9040/educator/lms-help/
-click on select an option of canvas

^click on select and select the Moodle
-goto the link: https://demo.ucertify.com:9040/educator/lms-help/
-click on select an option of Moodle

@test_data: n/a
@result: Show the chapter and heading in lms configuration
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe("educator page testing", function() {
    beforeEach('This is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/educator/lms-help/");
        })
    })
    it("lms configuration area", function() {
        cy.get("#lms_select").select('Canvas', { force: true });
    });
    it("lms configuration area", function() {
        cy.get("#lms_select").select('Moodle', { force: true });
    });
});