/*
@author: Anirudha Pratap
@master_project_id: 2444
@phase_id: 10148
@story_id: 14851
@story_name: instructor_research
@path: final/Admin
@test_case_name: instructor_research.js
@description: instructor portal area
@test_steps:
^show the research tab report
-goto to the link: https://demo.ucertify.com:9040/admin/
-click on others tab.
-click on inside sales.
-enter the email 
-click on search icon
-click on settings icon
-click on edit option
-click on research tab

@test_data: n/a

@result: show the research tab report
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
        })
    });
});