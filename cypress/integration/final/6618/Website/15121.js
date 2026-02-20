/*
@author: Anirudha Pratap
@master_project_id: 6618
@phase_id:
@story_id: 15121
@story_name: wgu_course
@path: final/Website
@test_case_name: wgu_course
@description: N/A
@test_steps:
^wgu course page
-Login to ucertify.com.
-Open the following url:(https://www.ucertify.com/products/wgu_course.html)

@test_data: n/a
@result: It will open the wgu course page
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe('wgu course', function() {
    it('test the wgu course page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/products/wgu_course.html");
        })
    })
})