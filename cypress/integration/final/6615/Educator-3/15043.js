/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id: 10148
@story_id: 15043
@story_name: my_contents
@path: final/Educator
@test_case_name: my_contents.js
@description:
@test_steps: 
^test case Instructor area
-visit the website
@test_data: n/a
@result: open all tabs and export of educator page
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe("educator page testing", function() {
    it("assignment area", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/educator/?func=my_content&u_course_code=055Jj.05Up2");
        })
    });
});