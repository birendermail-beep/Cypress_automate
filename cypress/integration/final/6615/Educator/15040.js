/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id: 10148
@story_id: 15040
@story_name: lms_warning_msg
@path: final/Educator
@test_case_name: lms_warning_msg.js
@description:
@test_steps: 
^click on select and select the D2L
-goto the link: https://demo.ucertify.com:9040/educator/lms-help/
-click on select an option of D2L
-click on create a link to d2L

@test_data: n/a
@result: Show the warning message
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
        cy.get(".toc_chapters").contains("3. Creating a link in D2L").click({ force: true });
    });
});