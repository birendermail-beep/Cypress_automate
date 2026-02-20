/*
@author: Anirudha Pratap
@master_project_id: 2444
@phase_id: 10148
@story_id: 14850
@story_name: instructor_portal_instructor_tickets
@path: final/Admin
@test_case_name: instructor_portal_instructor_tickets.js
@description: instructor portal area
@test_steps:
^show the instructor tickets report
-goto to the link: https://demo.ucertify.com:9040/admin/
-click on others tab.
-click on inside sales.
-enter the email 
-click on search icon
-click on settings icon
-click on edit option
-click on tickets tab

@test_data: n/a

@result: show the instructor tickets report
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea } from '../../../../page-objects/pages/index' 
describe("admin page testing", function() {
    it("show the instructor tickets report", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            AdminArea.visitAdminArea(data.url)
            cy.get('#others_tab').click();
            cy.get(".chapter-link").contains("Inside Sales").click({ force: true });
            cy.get('#search_text').type(login_username);
            cy.get('#search_guid_basis').click();
            cy.get('#action_dropdown_btn').click();
            cy.visit(data.url + "/admin/inside_sales/instructor_portal.php?action=grid_view&grid=1&page=1&search_user_guid=06OEg");
            cy.get('#tickets_tab').click();
        })
    });
});