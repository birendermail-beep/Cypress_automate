/*
@author: Sundaram Tripathi
@master_project_id: 6615
@phase_id: 
@story_id: 15115
@story_name: educator_admin_reports_orders
@path: final/Dump_Test_Automation
@Test_Case_Name: educator_admin_reports_orders.js
@description:
@test_steps: 
^admin order reports
-Click on this link: https://www.jigyaasa.info/?func=get_course_list&show=courses
- Go to the the ""Admin"" tab.
- Successfully open the admin tab in educator area.
- Go to first field and select the ""uCertify"" option.
- Click on the ""Report"" dropdown button and select the ""order"" option.
- Open ""Advance search"" dialogbox options.
- Click on the search button.

@test_data: 
@result: Select an a option: uCertify.
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('Admin Area', function() {

    it('In Educator Admin Report Order', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/?func=get_course_list&show=courses");
        })
        cy.get('[data-cy=admin_tab]').click({ force: true });
        cy.get('[data-cy=report_link]').click({ force: true });

    })
})