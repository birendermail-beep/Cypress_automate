/*
@author: Anirudha Pratap
@master_project_id: 2444
@phase_id: 10148
@story_id: 14852
@story_name: instructor_research_add
@path: final/Admin
@test_case_name: instructor_research_add.js
@description: instructor portal area
@test_steps:
^add the instructor in research tab
-goto to the link: https://demo.ucertify.com:9040/admin/
-click on others tab.
-click on inside sales.
-enter the email 
-click on search icon
-click on settings icon
-click on edit option
-click on research tab
-click on pencil icon
-enter the email and click on search

@test_data:
-email : ajeet.chauhan@ucertify.com

@result: add the instructor in research tab
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea } from '../../../../page-objects/pages/index' 
describe("admin page testing", function() {
    it("inside sales in admin area", function() {
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
            cy.get('#research_eval_tab').click();
            cy.get(':nth-child(3) > .float-right').click({ force: true });
            cy.get('#search').type(data.author_email[5]);
        })
        cy.get('#search_certificate_btn').click({ force: true });
    });
});