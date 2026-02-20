/*
@author: Sundaram Tripathi
@master_project_id: 2444
@phase_id: N/A
@story_id: 15176
@story_name: kpi new
@path: final/Dump_Test_Automation
@test_case_name: kpi_new.js
@description: Go to inside sales and open leaderboard
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
import { Navbar, login_username, login_password, LoginPage , AdminArea } from '../../../../page-objects/pages/index' 
describe('Inside Sales Page Open', function() {

    it('KPI New Report', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            AdminArea.visitAdminArea(data.url);
            cy.get('#others_tab').click({force:true});
            cy.get('.marker > :nth-child(3) > [data-cy=other_start]').click({force:true});
            cy.visit(data.url+'/admin/inside_sales/sales_leaderboard.php?func=sales_leaderboard');
        })
    })
})