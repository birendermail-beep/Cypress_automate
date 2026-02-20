/*
@author: Sundaram Tripathi
@master_project_id: 6615
@phase_id: N/A
@story_id: 15099
@story_name: educator_admin_reports_administrators
@path: final/Dump_Test_Automation
@test_case_name: educator_admin_reports_administrators.js
@description: Go to the admin tab and open my profile
@test_steps: 
^Go to admin option and open administator list
-Click on this link: https://www.jigyaasa.info/?func=get_course_list&show=courses
- Click on the admin tab 
- Click on the ""Manage"" dropdown button and select the ""Administrators List"" options. 
- Successfully open the ""Administrator"" page."

@test_data: N/A

@result: Provide credentials like email or password
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('Admin Area', function() {

    it('Administrarors Report', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/?func=get_course_list&show=courses");
        })
        cy.get('[data-cy=admin_tab]').click({ force: true });
        cy.get('[data-cy=manage_link]').click({ force: true });
        cy.get('[data-cy=administrators_sub]').click({ force: true })
        cy.wait(3000);
        cy.get('[data-cy=custom_btn]').click({ force: true });
    })
})