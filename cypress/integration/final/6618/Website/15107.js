/*
@author: Anirudha Pratap
@master_project_id: 6618
@phase_id:
@story_id: 15107
@story_name: learn_screenshot
@path: final/Website
@test_case_name: learn_screenshot
@description: N/A
@test_steps:
^Screenshots page
-Login to ucertify.com.
-Open the following url:(https://www.ucertify.com/products/learn/screenshots.html)

@test_data: n/a
@result: It will open the learn screenshot page
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe('learn screenshots', function() {
    it('test the learn screenshots page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/products/learn/screenshots.html");
        })
    })
})