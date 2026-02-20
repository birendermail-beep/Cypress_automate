/*
@author: Ankit Kumar
@master_project_id: 7761
@phase_id: 
@story_id: 11702
@story_name: Search Bar
@path: final/7761
@test_case_name: Search Bar.js
@description: 
@test_steps: 
^Search bar under Roster tab
-Enter a name in search bar
-Delete the name
-Select another Org from All Org

@test_data: n/a
@result: Name once deleted should not come automatically after selecting another org
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea, CreateArea } from '../../../../page-objects/pages/index' 
describe('Admin Area', () => {
    it("Deleting name", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        CreateArea.openLibrary()
        AdminArea.visitAdmin()
        AdminArea.setOrg()
        AdminArea.visitEducatorRoster()
        //cy.wait(5000)
        cy.fixture('global').then(data => {
            cy.wait(10000);
            cy.get('[data-cy=roster_email]').clear().type(data.auditor_name[4]);
        })
        cy.get('[data-cy=custom_btn]').click()
        cy.get('[data-cy="roster_table"]').should('be.visible')
        cy.get('#org_id').select('All Org',{force:true})
        AdminArea.visitEducatorRoster()
        cy.fixture('global').then(data => {
            cy.wait(15000);
            cy.get('[data-cy=roster_email]').should('contain',data.auditor_name[4]);
        })
    });
})