/*
@author: Sundaram Tripathi
@master_project_id: 6615
@phase_id: N/A
@story_id: 15098
@story_name: educator_admin_myprofile
@path: final/Dump_Test_Automation
@test_case_name: educator_admin_myprofile.js
@description: Go to the admin tab and open my profile
@test_steps: 
^test case of download the survey report
-Visit to website
-Login to ucertify.com
-Visit the library page
-Go to the admin area
-Go to the first field and select "ucertify"
- Click on the "Roster" button
- Open dialogbox and click on the "search" button
- Show the student name and details
- Click on the action icon and select the "Manage Profile"
- Open the manage profile page.
@test_data: N/A
@result: Successfully open the manage profile page
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe("Educator", function() {
    it("My profile in admin", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/?func=get_course_list&show=courses");
        })
        cy.get('[data-cy=admin_tab]').click({ force: true });
        cy.get('#org_id').select('01LjT', { force: true });
        cy.get('[data-cy=roster_link]').click({ force: true });
        cy.wait(5000);
        cy.get('[data-cy=custom_btn]').click({ force: true });
        cy.wait(5000);
        cy.get('.dropdown > .btn').eq(0).click({ force: true });
        cy.get('.get_profile_modal > .open_profile_modal').eq(0).click({ force: true });
    })
})