/*
@author: Sundaram Tripathi
@master_project_id: 2444
@phase_id: 
@Story_Id: 15253
@story_name: sales team admin dashboard
@path: final/Dump_Test_Automation
@Test_Case_Name:  sales team admin dashboard
@description: Go to the admin area and open the inside sales report
@test_steps: 
^Test case advance with status 
- visit on website
- Go to admin area
- Click on the others tab and click on the "inside sale"
- Click on the "Inside Sales Report" tab .
- Click on the "Search" button.
- Successfully open the "Advance Search" dialog box.
- Go to the "Group By" section and select "Status" option.
- Click on the search button
- Record will be show

^Test case of advance search with Contact Number Stage Report
- visit on website
- Go to admin area
- Click on the "Inside Sales Report"
- Click on the "Search" button.
- Successfully open the "Advance Search" dialog box.
- Go to the "Group By" section and select " Contact Number Stage Report" option.
- Record will be show

^Test case of advance search with Contact Number Report
- visit on website
- Go to admin area
- Click on the "Inside Sales Report"
- Click on the "Search" button
- Successfully open the "Advance Search" dialog box
- Go to the "Group By" section and select " Contact Number Report" option.
- Record will be show

^Test case of advance search with Verification Status
- visit on website
- Go to admin area
- Click on the "Inside Sales Report"
- Click on the "Search" button
- Successfully open the "Advance Search" dialog box
- Go to the "Group By" section and select " Verification Status" option.
- Record will be show

^Test case of advance search with Stop Email
- visit on website
- Go to admin area
- Click on the "Inside Sales Report"
- Click on the "Search" button
- Successfully open the "Advance Search" dialog box
- Go to the "Group By" section and select "Stop Email" option.
- Record will be show

^Test case of advance search with Relevancy
- visit on website
- Go to admin area
- Click on the "Inside Sales Report"
- Click on the "Search" button
- Successfully open the "Advance Search" dialog box
- Go to the "Group By" section and select "Relevancy" option
- Record will be show

^Test case of advance search with post
- visit on website
- Go to admin area
- Click on the "Inside Sales Report"
- Click on the "Search" button
- Successfully open the "Advance Search" dialog box
- Go to the "Group By" section and select "Post" option.
- Record will be show

@test_data: 
-Group By = "Status"
-Group By = "Contact Number Stage Report"
-Group By = "Contact Number Report"
-Group By = "Verification Status"
-Group By = "Stop Email"
-Group By = "Post"

@result: Successfully opens sales team admin dashboard
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea } from '../../../../page-objects/pages/index'
describe('Admin Area', function () {

    beforeEach('inside sales report', function () {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            AdminArea.visitAdminArea(data.url);
            cy.get('[data-cy=other_tab]').click();
            cy.get('[data-cy=other_start]').eq(1).click();
            cy.get(':nth-child(3) > .nav-link > .d-md-block').click();
            cy.get('#advance_search').click();
            cy.wait(5000);
        });

    })
    it('Group by status', function () {
        cy.get('#group_by').select('Status', { force: true });
        cy.get('[data-cy=submit_btn_tab]').click();
    })
    it('Group by Contact Number Stage Report', function () {
        cy.get('#group_by').select('Contact Number Stage Report', { force: true });
        cy.get('[data-cy=submit_btn_tab]').click();
    })
    it('Group by Contact Number Report', function () {
        cy.get('#group_by').select('Contact Number Report', { force: true });
        cy.get('[data-cy=submit_btn_tab]').click();
    })
    it('Group by Verification status', function () {
        cy.get('#group_by').select('Verification status', { force: true });
        cy.get('[data-cy=submit_btn_tab]').click();
    })
    it('Group by Stop Email', function () {
        cy.get('#group_by').select('Stop Email', { force: true });
        cy.get('[data-cy=submit_btn_tab]').click();
    })
    it('Group by Post', function () {
        cy.get('#group_by').select('Post', { force: true });
        cy.get('[data-cy=submit_btn_tab]').click();
    })
    it('Group by Relevancy', function () {
        cy.get('#group_by').select('Relevancy', { force: true });
        cy.get('[data-cy=submit_btn_tab]').click();
    })
})