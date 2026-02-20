/*
@author: Sundaram Tripathi
@master_project_id: 6615
@phase_id: 
@story_id: 15116
@story_name: educator_admin_reports_search
@path: final/Dump_Test_Automation
@Test_Case_Name: educator_admin_reports_search.js
@description:
@test_steps: 
^Open educator go to ticket options
-Click on this link: https://www.jigyaasa.info/?func=get_course_list&show=courses
- Click on the ""admin"" tab.
- Show the more options.
- Click on the ""Reports"" dropdown button and select the ""Tickets"" options.
- Successfully open page

@test_data: 
@result: tickets page should be open.
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('Admin Area', function() {

    it('Show the tickets', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/?func=get_course_list&show=courses");
        })
        cy.get('[data-cy=admin_tab]').click({ force: true });
        cy.get('[data-cy=report_link]').click({ force: true });
        cy.get('[data-cy=ticket_link]').click({ force: true });
    })
})