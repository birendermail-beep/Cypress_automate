/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id:
@story_id: 14842
@story_name: Initial survey
@path: final/6607/Student
@test_case_name: Initial survey
@description: Opening the all survey page
@test_steps:
^Initial survey
-visit the website
-login into page
-Open the my library.
-Open the following course.(url + /?func=load_course&course_code=02SEO&class_code=046T4)
-click on the Initial survey

@test_data:n/a
@result:Opening the all survey page
*/
import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index' 
describe('Survey page', function() {

    it('Initial survey page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/?func=load_course&course_code=" + data.course_code[0] + "&class_code=" + data.class_code[0]);
            cy.visit(data.url + '/?action=survey1&ins=1')
        })
    })
})