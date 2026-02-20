/*
@author: Sundaram Tripathi
@master_project_id: 2444
@phase_id: 
@story_id: 15274 
@story_name: update_invoice_guid_modal
@path: final/Dump_Test_Automation
@Test_Case_Name: update_invoice_guid_modal.js
@description: Open Remote Usability Test page
@test_steps: 
^Test case of update invoice guid modal
- Visit the website
- open the admin page.
- Click on the "Start" button in "Billing Management".
- Choose any course and go to the action and click the setting icon button.
- After that click on the "Update Invoice guid" option.
@test_data: N/A
@result: Successfully open the update invoice guid dialog box
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe('Admin area', function() {

    it('Dasboard billing management', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url+"/admin");
            cy.get(':nth-child(5) > [data-cy=start_button] > .btn').click({force:true});
            cy.get('[data-cy=action_menu_cy]').eq(0).click({force:true});
            cy.get('.dropdown > .dropdown-menu > :nth-child(3) >  [data-cy=invoice_guid_update_cy]').eq(2).click({force:true});
        })
    })
})