/*
@author:Anirudha Pratap
@master_project_id: 6618
@phase_id: n/a
@story_id: 15452
@story_name: seetec page
@path: final/6618/Website
@test_case_name: seetec page
@description:N/A
@test_steps: 

^seetec page page
-Visit to https://seetec.ucertify.com
-Login to website
-click on homepage

@test_data: n/a
@result: home page footer open
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('seetec page', function () {
    it('Opening the seetec page', function () {
        cy.fixture('global').then(data => {
            cy.visit(data.website[10])
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        Navbar.clickContinueOnWelcomePage();
    })
})