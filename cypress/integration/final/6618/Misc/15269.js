/*
@author: Sundaram Tripathi
@master_project_id: 6618
@phase_id: 
@story_id: 15269
@story_name: ucertify_cares
@Test_Case_Name: ucertify_cares.js
@description: Go to utils and click run button
@test_steps: 
^Test case In utils run button
- Visit the website
- Go down the page and click on the "About Us" option
- Visit on this link about/index.php?page=ucertify_cares
@test_data: N/A
@result: Successfully open the uCertify cares page
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('uCertify Cares', function() {

    it('Display uCertify Cares Page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url);
            cy.get(':nth-child(2) > .list-unstyled > :nth-child(1) > a > .pointer').click({ force: true });
            cy.visit(data.url + '/about/index.php?page=ucertify_cares');
        })
    })
})