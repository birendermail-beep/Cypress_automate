/*
@author: Sundaram Tripathi
@master_project_id: 2444
@phase_id: 
@story_id: 15188
@story_name: opportunity_report_list
@path: final/Dump_Test_Automation
@test_case_name: opportunity_report_list.js
@description: Open the details user and course
@test steps: 
^test case of inside sales kpi report
-Visit to website
-Login to ucertify.com
-Visit the admin
-Click the Other option
-Click on the inside sale
-Click on the KPI Report tab
-Click the Opportunity option
-Click on the Advance Search button and open the dialog box
-Primary Contact fields and press the email id. After that press the "Search" button. 
@test_data: 
-Primary Contact: ajeet chahuan
@result: Successfully open the report
*/

import { Navbar, login_username, login_password, LoginPage , AdminArea, SalesArea } from '../../../../page-objects/pages/index' 
describe('Inside sales Opportunity Report', function() {

    it('Display the opportunity list', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            AdminArea.visitAdminArea(data.url);
            cy.get('[data-cy=other_tab]').click({force:true});
            cy.get('.marker > :nth-child(3) > [data-cy=other_start]').click({force:true});
            cy.get('[data-cy=kpi_report]').click({force:true});
            cy.get('#groups_list > :nth-child(7) > .dropdown-item');
            cy.visit(data.url+'/admin/inside_sales/instructor_portal.php?func=opportunity&primary_contact[]=06OEg');
        })
        SalesArea.primaryContact();
        cy.get('#search_opportunity_button').click({force:true});
    })
})