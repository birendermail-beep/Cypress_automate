/*
@author: Sundaram Tripathi
@master_project_id: 2444
@phase_id: 
@story_id: 15184
@story_name: opportunity report empty field
@path: final/Dump_Test_Automation
@test_case_name: opportunity_report_empty_field.js
@description: Show the details Opportunity Report without any data
@test_steps: 
^test case of inside sales kpi report
-Visit to website
-Login to ucertify.com
-Visit the admin
-Click the Other option
-Click on the inside sale
-Click on the KPI Report tab
-Click the Opportunity option
-Click on the Advance Search button and open the dialog box
-Without fill any data that means empty all field and click the search button.
@test_data: N/A
@result: Successfully open Opportunity reports and details dialog box. 
*/

import { Navbar, login_username, login_password, LoginPage , AdminArea,SalesArea } from '../../../../page-objects/pages/index' 
describe('Opportunity Details', function() {

    it('In opportunity report filter empty based. ', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            AdminArea.visitAdminArea(data.url);
            SalesArea.kpiReportTab();
            cy.visit(data.url+'/admin/inside_sales/instructor_portal.php?func=opportunity&primary_contact[]=06OEg');
        })
        cy.get('#list_dropdown').click({force:true});
        cy.get('.select2-selection__choice__remove').click({force:true});
        cy.get('#search_opportunity_button').click({force:true});
    })
})