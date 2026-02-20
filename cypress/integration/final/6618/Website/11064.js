/*
@author:Anirudha Pratap
@master_project_id: 6618
@phase_id: n/a
@story_id: 11064
@story_name: homepage_resources
@path: final/Website
@test_case_name: homepage_resources.js
@description:
@test_steps: 
    ^test case of home page Footer 
    - Visit to website.
    - Login to ucertify.com.
    - Click the home Page icon.
    - scroll down and click on Certifications

@test_data: n/a
@result: home page footer open
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('homepage footer testing', function () {
    it('Opening the Certifications', function () {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        Navbar.clickContinueOnWelcomePage();
        // cy.scrollTo("100%", "100%")
        cy.get("ul.list-unstyled > li").contains("Certifications").click({ force: true });
    })
})