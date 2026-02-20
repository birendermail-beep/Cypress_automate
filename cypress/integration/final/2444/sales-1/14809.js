/*
@author: Anirudha Pratap
@master_project_id: 2444
@phase_id: 10148
@story_id: 14809
@story_name: admin_flaxigroup_add
@path: final/Admin
@test_case_name: admin_flaxigroup_add.js
@description:
@test_steps:
^manage the entity group area
-goto to the link: https://demo.ucertify.com:9040/admin/
-click on entity tab
-click on flaxi group
-click on unlock and click ok
- click on settings icon
-click on edit

@test_data: n/a

@result: open a dialog box and show the flaxi detail
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea } from '../../../../page-objects/pages/index' 
describe("admin page testing", function() {
    it("flaxigroup in admin area", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            AdminArea.visitAdminArea(data.url)
        })
        cy.get("#entities_tab").click();
        cy.get(".chapter-link").contains("Manage Flaxi Group").click();
        cy.get('#update_lock_status').click();
        cy.get('#btn-confirmed').click();
        cy.get('.table_selected_row > :nth-child(6) > .dropdown > .btn').click();
        cy.get('.table_selected_row > :nth-child(6) > .dropdown > .dropdown-menu > :nth-child(1) > .dropdown-item').click();
    });
});