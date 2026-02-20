/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id:
@story_id: 14863
@story_name: video new
@path: final/6607/Student
@test_case_name: video new
@description: Opening the video new page
@test_steps:
^video new
-visit the website
-login into page
-Open the following url:(url + /?func=video_playlist)

@test_data:n/a
@result:Opening the video new page
*/
import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index' 
describe('Start page data', function() {
    it('Opening the start page data page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/?func=video_playlist");
        })
    })
})