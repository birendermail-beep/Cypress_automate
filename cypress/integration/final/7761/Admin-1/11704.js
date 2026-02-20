/*
@author: Ankit Kumar
@master_project_id: 7761
@phase_id: 
@story_id: 11704
@story_name: View Information
@path: final/7761
@test_case_name: View Information.js
@description: 
@test_steps: 
^Check information under the Student Name
-Go to Admin
-Select the Org uCertify
-Check first Header (Student Name)

@test_data: n/a
@result: It should display Students name, Tag and status as well.
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea, CreateArea } from '../../../../page-objects/pages/index' 
describe('Admin Area', () => {
    it("Check information under the Student Name", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            CreateArea.openLibrary()
            AdminArea.visitAdmin()
            AdminArea.setOrg()
            AdminArea.visitEducatorRoster()
            cy.wait(3000)
            cy.get('[data-cy=roster_email]').clear().type(data.auditor_email[2]);
            cy.get('[data-cy=custom_btn]').click()
            cy.get('[data-cy="roster_table"]').should('be.visible')
        })
    });
})