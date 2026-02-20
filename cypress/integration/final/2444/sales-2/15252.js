/*
@author: Sundaram Tripathi
@project_group: 
@phase_id: 
@Story_Id:
@story_name: royalty report
@path: final/Dump_Test_Automation
@Test_Case_Name: royalty report
@description: Open the royalty report in admin area
@test_steps: 
^Test case keyboard short key
- visit on website
- Go to the admin area
- Click on the "Royalty Report" option.
- Open Royalty Report page then click on the "Search" button and also select the "Advance Search" option.
- Open advance Search dialog box.
- Select fields according your needs
- Click on the search button

@test_data: 
-Publisher  Western Goernors University
-Title  ITProTV Videos
-Start Date  1-Feb-2019
-End  15-Sep-2019
@result:
- Successfully show the royalty report
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe('Admin area', function() {
    it('Royalty Report', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/admin');
        })
        cy.get(':nth-child(3) > [data-cy=start_button] > .btn').click({ force: true });
        cy.get('[data-cy=search_button]').click({ force: true });
        cy.get('[data-cy=advance_search]').click({ force: true });
        cy.get('#content_from_org_id').select('Virginia State University', { force: true });
        cy.wait(2000)
        cy.get('#content_from_org_id').select('Western Governors University', { force: true });
        cy.get('#content_from_org_id').select('Virginia State University', { force: true });
        cy.get('#content_from_org_id').select('Western Governors University', { force: true });
        cy.wait(2000);
    })
})