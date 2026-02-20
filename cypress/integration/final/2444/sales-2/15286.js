/*
@author: Sundaram Tripathi
@project_group: 
@phase_id: 
@story_id: 15286
@story_name: zendesk_failed_ticket_grid
@path: final/Dump_Test_Automation
@Test_Case_Name: zendesk_failed_ticket_grid.js
@description: Click on the add button and open the tickler dailog box 
@test_steps: 
^Test case of Zendesk Failed Ticket Error Log.
-Visit the admin area
-click on the other tab.
-Click on the Zendesk Failed Ticket Error Log option.
@test_data: n/a
@result: Successfully open the  zendesk failed ticket grid page
*/

import { Navbar, login_username, login_password, LoginPage , AdminArea } from '../../../../page-objects/pages/index' 
describe('Admin Aea', function() {

    it('Zendesk Failed Ticket Error Log ', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            AdminArea.visitAdminArea(data.url);
        })
        cy.get('[data-cy=other_tab]').click({force:true});
        cy.get(':nth-child(11) > :nth-child(3) > [data-cy=other_start]').click({force:true});

    })
})