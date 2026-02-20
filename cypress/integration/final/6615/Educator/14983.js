/*
@author: Avinash pandey
@master_project_id: 6615
@phase_id: 10148
@story_id: 14983
@story_name: educator_advanced_search_content
@path: final/Educator
@test_case_name: educator_advanced_search_content.js
@description:
@test_steps:
^advance search dailog box
-goto the link: https://demo.ucertify.com:9040/
-click on admin
-click on any tab as manage/reports
-select any option
-click on advance search

@test_data: n/a
@result: open an advance search box 
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe("educator page testing", function() {
    it("Admin area in educator", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/educator/admin.php?org_id=00WwL");
        })
        cy.get('#manage_track').click();
        cy.get('#sections_sub').click();
        cy.wait(3000);
        cy.get('[data-cy=custom_btn]').click();
        cy.wait(3000);
        cy.get('#report_track').click();
        cy.get("#vouchers_sub").click();
        cy.wait(5000);
        cy.get('[data-cy=custom_btn]').click()
    });
});