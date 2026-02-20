/*
@author:Anirudha Pratap
@master_project_id: 6618
@phase_id: n/a
@story_id: 11052
@story_name: about us
@path: final/Website
@test_case_name: about us
@description:N/A
@test_steps: 

^About us
- Visit to website.
- Login to ucertify.com.
- Click the home Page icon.
- scroll down and click on about us

@test_data: n/a
@result: home page footer open
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('homepage footer testing', function () {
    it('Opening the About us', function () {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        Navbar.clickContinueOnWelcomePage();
        cy.get("ul.list-unstyled > li").contains("About Us").click({ force: true });
    })
})