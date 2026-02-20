/*
@author: Anirudha Pratap
@master_project_id: 2444
@phase_id: 10148
@story_id: 14843
@story_name: entity_group_certification_list
@path: final/Admin
@test_case_name: entity_group_certification_list.js
@description:
@test_steps:
^show the certificate list of entity group area
-goto to the link: https://demo.ucertify.com:9040/admin
-click on Entities tab
-click on manage vendor

@test_data: n/a

@result: show the certificate list
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea } from '../../../../page-objects/pages/index' 
describe("admin page testing", function() {
    it("certification list in admin area", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            AdminArea.visitAdminArea(data.url)
        })
        cy.get('#entities_tab').click();
        cy.get(".chapter-link").contains("Manage Vendor").click();
    });
});