/*
@author: Sundaram Tripathi
@project_group: 
@phase_id: 
@Story_Id: server_log_summary
@Test_Case_Name: server_log_summary.js
@description: Go to utils and open daily report
@test_steps: 
^Test case of sever log summary
- Visit the website
- Open the utils area
- Go down the page and click on the "Start" button on the "Server Log".
- Open by default "Daily Report".
@test_data: N/A
@result:
    - Successfully open the server log page
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('utils area', function() {

    it('Show the server log summery', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/utils');
        })
        cy.get(':nth-child(38) > :nth-child(3) > .btn').click({ force: true });

    })
})