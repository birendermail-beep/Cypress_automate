/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id: 10148
@story_id: 15030
@story_name: educator_test_analysis_gradebook
@path: final/Educator
@test_case_name: educator_test_analysis_gradebook.js
@description:
@test_steps:
^download the best score report
-goto the link: https://demo.ucertify.com:9040/
-click on my library
-Select a course and click on manage
-select instructor tool for the selected course
-click on track
-click on more
-click on analytics
-click on test analytics
-click on export

@test_data: n/a
@result: download the best score report
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
        cy.get(".nav-item").contains("Track").click();
        cy.get('[aria-label="Analytics"]').contains("Analytics").click();
        cy.get(".dropdown-item").contains("Test Analytics").click({ force: true });
        cy.get('#download_report').click();
    });
});