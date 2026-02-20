/*
@author: Sundaram Tripathi
@master_project_id: 6618
@phase_id: n/a
@story_id: 15127
@story_name: features_faqs
@path: final/Dump_Test_Automation
@test_case_name: features_faqs.js
@description: Go to help options and go to to features options.
@test_steps: 
^test case of request demo
-Visit to website.
-Login to ucertify.com.
-Click on the "?" option in home page.
-Select the "Help" option.
-Sucessfully open features page.
@test_data: n/a
@result: Successfully open the features page
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('Features Page', function() {

    it('In Features page show the faqs', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.get('.icomoon-help-new-1').click({ force: true });
            cy.get('ul > li:nth-child(1)').contains("Help").click({ force: true })
            cy.visit(data.url + '/support.php')
        })
    })
})