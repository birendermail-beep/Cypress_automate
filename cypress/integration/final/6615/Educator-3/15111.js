/*
@author: Sundaram Tripathi
@master_project_id: 6615
@phase_id: 
@story_id: 15111
@story_name: educator_admin_reports_eval
@path: final/Dump_Test_Automation
@Test_Case_Name: educator_admin_reports_eval.js
@description: Go to admin tab and open eval copy report
@test_steps: 
^Test Case of admin area
-Click on this link "https://www.jigyaasa.info/?func=get_course_list&show=courses"
- Go to the the "Admin" tab.
- Successfully open the admin tab in educator area.
- Go to first field and select the "uCertify" option.
- Click on the "Report" dropdown button and select the "Eval Copy" option.
- Go to course option and select any course.
- After that click on the "Search" button.
@test_data: Course : .NET I(UOP-POS408)
@result: - Successfully open the Eval records
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('Admin Area', function() {

    it('Educator admin eval report', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/?func=get_course_list&show=courses");
        })
        cy.get('[data-cy=admin_tab]').click({ force: true });
        cy.get('#org_id').select('01LjT', { force: true });
        cy.get('[data-cy=report_link]').click({ force: true });
        cy.get('[data-cy=eval_link]').click({ force: true });
        cy.get('#org_course_list').select('04aGN', { force: true });
        cy.wait(3000)
        cy.get('[data-cy=custom_btn]').click({ force: true });
    })
})