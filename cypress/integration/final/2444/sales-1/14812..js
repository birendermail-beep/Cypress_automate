/*
@author: Anirudha Pratap
@master_project_id: 2444
@phase_id: 10148
@story_id: 14812
@story_name: admin_item_performance_metadata_content
@path: final/Admin
@test_case_name: admin_item_performance_metadata_content.js
@description:
@test_steps:
^performance area
-goto to the link: https://demo.ucertify.com:9040/admin/
-click on report tab
-click on item performance report
-click on setting button and select item metadata"

@test_data: n/a

@result: open a item detail modal box
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea } from '../../../../page-objects/pages/index' 
describe("admin page testing", function() {
    it("report tab in admin area", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            AdminArea.visitAdminArea(data.url)
        })
        cy.get('#reports_tab').click();
        cy.get(".chapter-link").contains("Item Performance Report").click({ force: true });
        cy.get(':nth-child(1) > :nth-child(12) > .dropdown > .btn').click();
        cy.get('.dropdown-item').contains("Item Metadata").click({ force: true });
    });
});