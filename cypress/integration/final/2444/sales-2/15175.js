/*
@author: Sundaram Tripathi
@master_project_id: 2444
@phase_id: 
@story_id: 15175
@story_name: Kpi_list
@path: final/Dump_Test_Automation
@test_case_name: Kpi_list.js
@description: Go to KPI tab and choose account manager
@test_steps: 
^test case of inside sales kpi report
-Visit to website
-Login to ucertify.com
-Visit the admin
-Click the Other option
-Click on the inside sale
-Click on the KPI Report tab
-Go to Team options and select Account Manager
-Click on the Show button
@test_data: Team : Account Manager
@result: Successfully show the KPI report
*/

import { Navbar, login_username, login_password, LoginPage , AdminArea, SalesArea } from '../../../../page-objects/pages/index' 
describe('Inside Sales Page Open', function() {

    it('KPI List Report Details', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            AdminArea.visitAdminArea(data.url);
        })
        SalesArea.kpiReportTab();
        cy.get('#team').select('Sales',{force:true});
        cy.get('.input-group-append > .dropdown-toggle').click({force:true});
        cy.get('.input-group-append > .dropdown-menu > li > .dropdown-item').click({force:true});
        cy.get('#date_interval_list').select('This Year',{force:true});
        cy.get('#search_kpi_detail').click({force:true});
    })
})