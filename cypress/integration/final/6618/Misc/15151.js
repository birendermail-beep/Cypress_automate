/*
@author: Sundaram Tripathi
@master_project_id: 6618
@phase_id: 
@story_id: 15151
@story_name: get_diff_url_api
@path: final/Dump_Test_Automation
@test_case_name: get_diff_url_api.js
@description:
-@test_steps: 
^test case of Data Diff URL
-Visit to website
-Login to ucertify.com
-Visit the Data Diff URL page.
@test_data: n/a
@result: Successfully open the API page.
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('Admin Aea', function() {

    it('Data Diff URL', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/utils/unittest/api/get_diff_url_api.php');
        })

    })
})