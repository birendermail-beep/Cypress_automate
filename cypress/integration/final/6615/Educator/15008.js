/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id: 10148
@story_id: 15008
@story_name: educator_lms_d2l_dashboard
@path: final/Educator
@test_case_name: educator_lms_d2l_dashboard.js
@description:
@test_steps:
^click on select and select the D2L
-goto the link: https://demo.ucertify.com:9040/educator/lms-help/
-click on select an option of D2L"

@test_data: n/a
@result: Show the chapter and heading in lms configuration
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe("educator page testing", function() {
    it("lms configuration area", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/educator/lms-help/");
        })
        cy.get("#lms_select").select('D2L', { force: true });
    });
});