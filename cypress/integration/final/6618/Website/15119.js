/*
@author: Anirudha Pratap
@master_project_id: 6618
@phase_id:
@story_id: 15119
@story_name: course_screenshot
@path: final/Website
@test_case_name: course_screenshot
@description: N/A
@test_steps:
^Screenshots page
-Login to ucertify.com.
-Open the following url:(https://www.ucertify.com/products/course/screenshots.html)

@test_data: n/a
@result: It will open the course screenshot page
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe('course screenshots', function() {
    it('test the course screenshots page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/products/labs/screenshots.html");
        })
    })
})