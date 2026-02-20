/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id: 10148
@story_id: 14993
@story_name: educator_create_new_section
@path: final/Educator
@test_case_name: educator_create_new_section.js
@description: educator_create_new_section
@test_steps:
^create section
-goto the link: https://demo.ucertify.com:9040/
-click on admin
-click on manage dropdown.
-click on sections.
-click on actions dropdown.
-click on create new section.

@test_data: n/a
@result: it is used to create a new section
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe("educator page testing", function() {
    it("user group settings", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.website[0])
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
        })
        cy.get('[data-cy="mylibrary"]').click({ force: true });
        cy.get('[data-cy=admin_tab]').click({ force: true })
        cy.get('[data-cy=manage_link]').click()
        cy.get('[data-cy=section_link]').click()
        cy.wait(5000)
        cy.get('[data-cy=custom_btn]').click()
        cy.get('.float-right.ml > #create_new_section').click()
    });
});