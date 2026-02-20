/*
@author: Anirudha Pratap
@master_project_id: 6618
@phase_id:
@story_id: 15101
@story_name: howto_course
@path: final/Website
@test_case_name: howto_course
@description: N/A
@test_steps:
^How to page
-Login to ucertify.com.
-Open the following url:(https://www.ucertify.com/products/course/videos.html)

@test_data: n/a
@result: It will open the how to course help videos
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe('how to course', function() {
    it('test the how to course', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/products/course/videos.html");
        })
    })
})