/*
@author: Sundaram Tripathi
@master_project_id: 6615
@phase_id: N/A
@story_id: 15109
@story_name: educator_admin_reports_bulk_actions
@path: final/Dump_Test_Automation
@test_case_name: educator_admin_reports_bulk_actions.js
@description: 
@test_steps: 
^Open admin area and go to any dropdown list
-Click on this link: https://www.jigyaasa.info/?func=get_course_list&show=courses
- Click on the admin tab.
- After that click on the ""Manage"" dropdown button and select the enrollment option.
- Open advance search dialogbox and click on the ""Search"" button.
- Show the bulk action details

@test_data: N/A

@result: Bulk data should be show
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('Admin Area', function() {

    it('Open entrollment and show bult data', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/?func=get_course_list&show=courses");
        })
        cy.get('[data-cy=admin_tab]').click({ force: true });
        cy.get('[data-cy=report_link]').click({ force: true });
        cy.get('[data-cy=enroll_link_tabs]').click({ force: true });
        cy.wait(3000);
        cy.get('[data-cy=custom_btn]').click({ force: true });
    })
})