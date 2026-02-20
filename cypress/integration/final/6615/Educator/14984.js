/*
@author: Avinash pandey
@master_project_id: 6615
@phase_id: 10148
@story_id: 14984
@story_name: educator_analytics_reports_content
@path: final/Educator
@test_case_name: educator_analytics_reports_content.js
@description:
@test_steps:
^track the report
-goto the link: https://demo.ucertify.com:9040/
-click on admin
-click on manage dropdown
-click on sections
-click on advance search
-click on status and select option All
-select a row and click on actions
-click on track report

@test_data: n/a
@result: open a modal box and track the report
*/

import { Navbar, login_username, login_password, LoginPage, InstructorPage } from '../../../../page-objects/pages/index'
describe("educator page testing", function() {
    it("Admin area in educator", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            InstructorPage.clickonAdmin()
            cy.get('#manage_track').click();
            cy.get('#sections_sub').click();
            cy.wait(10000)
            cy.get("#status").select('All', { force: true });
            cy.get('[data-cy=custom_btn]').click()
            cy.get(':nth-child(5) > .span1 > .d-flex > .custom_checkbox_new > .check_mark_custom').click({ force: true });
            cy.get('[data-cy=action_sec_track]').eq(5).click();
            cy.visit(data.url + '/educator/admin.php?func=roster&courses_list=00UvA&section_list=01YF7&org_id=00XOs&all_orgs=1')
        })
    });
});