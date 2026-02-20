/*
@author: Sundaram Tripathi
@project_group: 
@phase_id: 
@Story_Id:15260
@story_name: status
@path: final/Dump_Test_Automation
@Test_Case_Name: status.js
@description: Click on the status button
@test_steps: 
^Test case keyboard short key
- visit on website
- visit on this link "/ext/ux_review/?action=cover"
- Click on the Status button in step 1

@test_data: N/A
@result:
- Successfully show the prototype status page
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe('Focus Area', function() {

    it('Prototype status', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/ext/ux_review/?action=cover');
        })
        cy.get(':nth-child(8) > .col-lg-8 > .table > tbody > tr > .text-center > .btn').click({ force: true });
    })
})