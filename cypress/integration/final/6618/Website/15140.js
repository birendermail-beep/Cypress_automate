/*
@author: Anirudha Pratap
@master_project_id: 6618
@phase_id:
@story_id: 15140
@story_name: cybersecurity
@path: final/Website
@test_case_name: cybersecurity
@description: N/A
@test_steps:
^cybersecurity page
-Login to ucertify.com.
-Open the following url:(https://www.ucertify.com/courses/cybersecurity.html)

@test_data: n/a
@result: It will open the cybersecurity page
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe('cybersecurity page', function() {
    it('test the cybersecurity page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/courses/cybersecurity.html");
        })
    })
})