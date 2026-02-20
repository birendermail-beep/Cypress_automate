/*
@author: Avinash pandey
@master_project_id: 6615
@phase_id: 10148
@story_id: 14985
@story_name: educator_assignment_edit
@path: final/Educator
@test_case_name: educator_assignment_edit.js
@description: open educator dashboard.
@test_steps:
^test case Instructor area
-visit the website
-Visit the url.
-Go to my library and select course tech-support-2020.
-Click on manage button.
-Click on instructor button and click on assessment tab.
-Click on grid button.
-Select available item.

@test_data: n/a
@result: Assessment edit successfully.
*/

import { Navbar, login_username, login_password, LoginPage, InstructorPage } from '../../../../page-objects/pages/index'
describe("educator page testing", function() {
    it("Assignments area in educator", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            InstructorPage.visitTechCourse();
        })
        cy.get('[data-cy="action_assignment_btn"]').eq(0).click()
        cy.get('[data-cy="action_modify_btn"]').eq(0).click({ force: true })
        cy.get('[data-cy="list_grid_btn-cy"]').click({ force: true })
        cy.get('[data-cy="add_btn-cy"]').eq(1).click({ force: true })
        cy.wait(7000);
        cy.get('#item037F4').clear().type('10');
        cy.get('#total_items').click().should('have.text','10');
    });
});