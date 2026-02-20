/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id: 10148
@story_id: 15052
@story_name: test_session_analysis
@path: final/Educator
@test_case_name: test_session_analysis.js
@description:
@test_steps:
^show the test analysis page
-goto the link: https://demo.ucertify.com:9040/
-click on my library
-Select a course and click on manage
-select instructor tool for the selected course
-click on track
-click on more
-click on analytics
-click on test analytics
-click on any questions

^show the test analysis page
1)goto the link: https://demo.ucertify.com:9040/
2)click on my library
3)Select a course and click on manage
4)select instructor tool for the selected course
5)click on track
6)click on more
7)click on analytics
8)click on test analytics

@test_data: n/a
@result: open all tabs and export of educator page
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe("educator page testing", function() {
    beforeEach('this is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/educator/?func=class_edit&u_course_code=02sBw.03yJU");
            cy.get('[data-cy=track]').click()
            cy.get('[aria-label="Analytics"]').contains("Analytics").click();
            cy.get(".dropdown-item").contains("Test Analytics").click({ force: true });
            cy.get('tbody > :nth-child(1) > :nth-child(2) > a').click({ force: true });
        })
    })
});