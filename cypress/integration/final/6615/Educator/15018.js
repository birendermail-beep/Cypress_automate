/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id: 10148
@story_id: 15018
@story_name: educator_section_list
@path: final/Educator
@test_case_name: educator_section_list.js
@description:
@test_steps:
^Open the educator for any course
-Click on this link: https://www.jigyaasa.info/?func=get_course_list&show=courses
- Successfully library page.
- Choose any course.
- Click on the Manage" button.
- After that click on the on this link: https://www.jigyaasa.info/educator/index.php?func=section_list"
@test_data: n/a
@result: Provide credentials like email or password
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
        cy.get('[data-cy=track]').click()
        cy.get('[aria-label="Analytics"]').contains("Analytics").click();
        cy.get('.dropdown-item').contains("Study Plan").click();
    });
});