/*
@author: Ankit Kumar
@master_project_id: 7761
@phase_id: 
@story_id: 11706
@story_name: Check Readiness
@path: final/7761
@test_case_name: Check Readiness.js
@description: 
@test_steps: 
^ Check Readiness
-Go to Admin tool
-Click on Readiness

@test_data: n/a
@result: Should be properly Aligned
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea, CreateArea } from '../../../../page-objects/pages/index'
describe('Admin Area', () => {
    it("Check Readiness", function () {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            CreateArea.openLibrary()
            AdminArea.visitAdmin()
            AdminArea.setOrg()
            AdminArea.visitEducatorRoster()
            cy.wait(3000)
            cy.get('[data-cy=search_ins]').clear().type(data.auditor_email[2]);
            cy.get('[data-cy=custom_btn]').click()
            cy.get('[data-cy="roster_table"]').should('be.visible')
            cy.get('[data-cy=planner_pre]').eq(0).click()
            cy.wait(5000);
            cy.get('[data-cy=quote]').should('be.visible', { force: true });
        });
    });
});