/*
@author: Sundaram Tripathi
@master_project_id: 6618
@phase_id: n/a
@story_id: 15150
@story_name: function_trace_list
@path: final/Dump_Test_Automation
@test_case_name: function_trace_list.js
@description:
-@test_steps: 
^test case of user listing in focus area
-Visit to website
-Login to ucertify.com
-Visit the utils area
-Click on the start button on the "Server Logs" options
-Open by default "Daily Report" options
-Click on the "Function/API/TPL Trace" option
@test_data: n/a
@result: Successfully open the function_trace_list options
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('Admin Aea', function() {

    it('Function Trace with API/TPL', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/utils');
        })
        cy.get(':nth-child(38) > :nth-child(3) > .btn').click({ force: true })
        cy.get('.btn-light > .ml-sm').contains('Function/API/TPL Trace').click({ force: true });
    })
})