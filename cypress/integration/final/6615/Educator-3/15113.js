/*
@author: Sundaram Tripathi
@master_project_id: 6615
@phase_id: 
@story_id: 15113
@story_name: educator_admin_reports_instructors
@path: final/Dump_Test_Automation
@Test_Case_Name: educator_admin_reports_instructors.js
@description:
@test_steps: 
^Open admin and enrollments
-Click on this link: https://www.jigyaasa.info/?func=get_course_list&show=courses
- Click on the admin tab.
- Click on the ""Manage"" dropdown button.
- Select the ""User"" option.
- After that open the ""Advance Search"" dialogbox.
- Click on the""Search"" button.

@test_data: 
@result: User page should be open
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('Admin Area', function() {

    it('Go to user and open instructor report', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/?func=get_course_list&show=courses");
        })
        cy.get('[data-cy=admin_tab]').click({ force: true });
        cy.get('[data-cy=manage_link]').click({ force: true });
        cy.get('[data-cy=ins_link]').click({ force: true });
        cy.wait(3000);
        cy.get('[data-cy=custom_btn]').click({ force: true });
    })
})