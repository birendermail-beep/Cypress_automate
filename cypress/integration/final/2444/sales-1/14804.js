/*
@author: Anirudha Pratap
@master_project_id: 2444
@phase_id: 10148
@story_id: 14804
@story_name: admin_course_reset_modal
@path: final/Admin
@test_case_name: admin_course_reset_modal.js
@description:
@test_steps:
^open a reset modal box
-goto to the link :https://demo.ucertify.com:9040/admin/
-click on others tab.
-click on inside sales.
-enter the email id and click search icon.
-click on setting icon. 
-click on edit option.
-click on product tab.
-click on setting button and click on Reset course 
-click on reset all
-click  on next
-click Reset"

@test_data:
-email: testbot@ucertify.com

@result: open a reset modal box
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea } from '../../../../page-objects/pages/index'
describe("admin page testing", function () {
    it("inside sales in admin area", function () {
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
            cy.visit(data.url + "/admin/inside_sales/instructor_portal.php?grid=1&action=grid_view&page=1&search_user_guid=06OEg");
        })
        cy.get('#show_user_product').click();
        cy.wait(5000);
        cy.get('[crn="5TXCUHIPAYJ7SYNM"] > :nth-child(10) > .dropdown > .btn').click({ force: true });
        cy.wait(5000);
        cy.get('[crn="5TXCUHIPAYJ7SYNM"] > :nth-child(10) > .dropdown > .dropdown-menu > :nth-child(5) > .action_reset_course').click({ force: true });
        cy.wait(5000);
        cy.get('.main_container > .ios-switch-label > .switchery').click();
        cy.get('#f_q_e_selectall').click();
        cy.get('#other_selectall').click();
        cy.get('#reset_course_confirm_btn').click();
    });
});