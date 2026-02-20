/*
@author: Sundaram Tripathi
@master_project_id: 6615
@phase_id: 
@story_id: 15112
@story_name: educator_admin_reports_exports
@path: final/Dump_Test_Automation
@Test_Case_Name: educator_admin_reports_exports.js
@description:
@test_steps: 
^track activity
-Click on this link: https://www.jigyaasa.info/?func=get_course_list&show=courses
- Click on the admin tab 
- select first fields in ""uCertify"".
- After that Click on the ""Roster"" button.
- Select fields and according your need and click the ""Search"" button.
- Choose any one student and go to action area.
- Click on the setting icon and select the ""Track Report"".
-After that click on the ""Analytics"" dropdown button and select the ""Test Analytics"".

@test_data: 
@result: Test Analytics report should be open
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('Admin Area', function() {

    beforeEach(function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/?func=get_course_list&show=courses");
        })
        cy.get('[data-cy=admin_tab]').click({ force: true });
        cy.get('#org_id').select('01LjT', { force: true });
        cy.wait(3000);
        cy.get('[data-cy=roster_link]').click({ force: true });
        cy.wait(3000);
        cy.get('[data-cy=custom_btn]').click({ force: true });
        cy.get('.dropdown > .btn').eq(0).click({ force: true });
    })
    it('Click on the Track Report', function() {
        cy.get('.dropdown-menu > :nth-child(12) > .dropdown-item').eq(8).click({ force: true });
    })
    it('Open Track Report', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/educator/admin.php?func=roster&my_user_email=muhsin_kassem@yahoo.com&courses_list=02li6&org_id=00WwL&all_org=');
        })
        cy.get('#edu_tab_block > .btn-group > .dropdown-toggle').click({ force: true });
        cy.get('#edu_tab_block > .btn-group > .dropdown-menu > :nth-child(3) > .dropdown-item').click({ force: true });
    })

})