/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id: 
@story_id: 11048
@story_name: Access Videos in Lab only Course
@path: final/6607/Student
@test_case_name: Access Videos in Lab only Course.js
@description: Access Videos in Lab only Course
@test_steps:
^video tab
-open person website http://ucertify.com/
-login my account and goto my library and search pearson-core-java-II-lab
-open this course and click video tab

@test_data: n/a
@result: Video filter area will open. 
*/
import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index' 
describe('Video page', function() {

    it('Opening the video page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.website[2])
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        cy.fixture('global').then(data => {
            cy.visit(data.website[2] + "/?func=get_course_list&show=courses");
            cy.visit(data.website[2] + '/?func=load_course&course=pearson-220-901-220-902-schmidt')
        })
        cy.get('[intro-id="Video Lessons"]').click()
    })
})