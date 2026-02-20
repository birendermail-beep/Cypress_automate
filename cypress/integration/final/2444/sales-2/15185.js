/*
@author: Sundaram Tripathi
@master_project_id: 2444
@phase_id: N/A
@story_id: 15185
@story_name: opportunity_report_group_based
@path: final/Dump_Test_Automation
@test_case_name: opportunity_report_details.js
@description: Open the details user and course
@test_steps: 
^test case of inside sale opportunity report
-Visit to website
-Login to ucertify.com
-Visit the admin
-Click the Other option
-Click on the inside sale
-Click on the KPI Report tab
-Click the Opportunity option
-Click on the Advance Search button and open the dialog box
-Go to the "Primary Contact" and select any one name.
-After that go to the Group By option and select primary contact After that press the search button.
@test_data: 
-Primary Contact : Ajeet chahuan.
-Group by : Primary contact
@result: Successfully open Opportunity reports and details dialog box. 
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea, SalesArea } from '../../../../page-objects/pages/index'
describe('Opportunity Details', function() {

    it('In opportunity report filter by group based. ', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            AdminArea.visitAdminArea(data.url);
            SalesArea.kpiReportTab();
            cy.visit(data.url + '/admin/inside_sales/instructor_portal.php?func=opportunity&primary_contact[]=06OEg');
        })
        SalesArea.primaryContact();
        cy.get('#groupby').select('Primary Contact', { force: true });
        cy.get('#search_opportunity_button').click({ force: true });
    })
})