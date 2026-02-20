/*
@author: Anirudha Pratap    
@master_project_id: 6607
@phase_id:
@story_id: 14836
@story_name:video page
@path: final/6607/student
@test_case_name: video page
@description: N/A   
@test_steps:

^Video page
-visit the website
-login into page
-Open the my library.
-Open the following course."Complete CompTIA A Guide to IT Hardware and Software"
-Click on the Video lessons.

@test_data: N/A 
@result: video page open
*/
import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
describe('Video page', function() {
    it('Opening the video page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.website[2])
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.website[2] + '/?func=load_course&course=pearson-220-901-220-902-schmidt')
        })
        cy.get('[intro-id="Video Lessons"]').click()
    })
})