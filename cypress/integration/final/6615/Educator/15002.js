/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id: 
@story_id: 15002
@story_name: educator_download_resources
@path: final/Educator
@test_case_name: educator_download_resources.js
@description:
@test_steps:
^download the Resources report
-goto the link: https://demo.ucertify.com:9040/
-click on my library
-Select a course and click on manage
-select instructor tool for the selected course
-click on resource
-click on download"

@test_data: n/a
@result: download the Resources report
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe("educator page testing", function() {
    it("Resources area in educator", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/educator/?func=class_edit&u_course_code=02sBw.03yJU");
        })
        cy.get('[data-cy=resources]').click();
        cy.get(':nth-child(1) > .span1 > .btn').click();
    });
});