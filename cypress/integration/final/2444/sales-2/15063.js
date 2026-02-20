/*
@author: Sundaram Tripathi
@master_project_id: 2444
@phase_id: 
@Story_Id: 15063
@story_name: admin cover csv
@path: final/2444
@Test_Case_Name: admin_cover_csv.js
@description: open ext and to the ext
@test_steps: 
^Test case of bundle it
- visit on this link "https://www.jigyaasa.info/ext/uc_buzz/index.php?func=csv_test"
- Successfully open the uCertify buzz page

@test_data: n/a
@result: Successfully open the uCertify buzz page
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea } from '../../../../page-objects/pages/index' 
describe('Admin Area', function() {
    it('Open ext and to the ext', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/ext/uc_buzz/index.php?func=csv_test');

        })
    })
})