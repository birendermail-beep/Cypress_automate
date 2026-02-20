/*
@author: Avinash pandey
@master_project_id: 6615
@phase_id: 10148
@story_id: 14982
@story_name: educator_admin_set_user_class
@path: final/Educator
@test_case_name: educator_admin_set_user_class.js
@description:
@test_steps:
^test case Instructor area
-visit the website.
-click on my library.
-Load course testing.
-Again go to my library.
-Click on admin tab
-Select org Ucertify.
-Click on roster and click on search button on advance modal box.
-Click on active student setting button and select set section.
-Set student session modal will open.
@test_data: n/a
@result: Modal will open successfully.
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
        cy.get('[data-cy="roster_link"]').click()
        cy.wait(5000)
        cy.get('[data-cy=custom_btn]').click()
        cy.wait(5000)
        cy.get('[data-cy=admin_track_modal]').eq(5).click()
            // cy.get("#status").select('All', { force: true });
        cy.wait(5000)
        cy.get('#set_class_03xXg_01apg').click({ force: true })
    });
});