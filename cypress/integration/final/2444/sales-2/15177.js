/*
@author: Sundaram Tripathi
@master_project_id: 2444
@phase_id:
@story_id: 15177
@story_name: kpi
@path: final/Dump_Test_Automation
@test_case_name: kpi.js
@description:
@test_steps: 
^test case of inside sales kpi report
-Visit to website
-Login to ucertify.com
-Visit admin
-Click the Other option
-Click on the inside sale
-Click on the "KPI Report" tab
-After that choose the "KPI Report"
@test_data: N/A
@result: Successfully show the details.
*/

import { Navbar, login_username, login_password, LoginPage , AdminArea, SalesArea } from '../../../../page-objects/pages/index' 
describe('Inside Sales Page Open', function() {

    it('KPI Report', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            AdminArea.visitAdminArea(data.url);
        })
        SalesArea.kpiReportTab();
    })
})