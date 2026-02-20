/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id: 
@story_id: 11042
@story_name: Added Videos in Course
@path: final/6607/Student
@test_case_name: Added Videos in Course.js
@description: Add Videos in Course
@test_steps:
^add video video should be come on pearson org
-open pearson website http://pearson.ucertify.com/
-login my account and goto my library and search pearson-n10-007 course
-open this course and click on chapter and lesson(make sure you don't have license of the video in this course)
-click on video tab the you can see add button should be come 

^add video video should not come on ucertify org
-open website http://ucertify.com/
-login my account and goto my library and search pearson-n10-007 course
-open this course and click on chapter and lesson.(make sure you don't have license of the video in this course)
-click on video tab the you can't see add button should be come 

@test_data: n/a
@result: Video Tab Module will open
*/
import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
describe('add on button', function() {
    //add on button
    it('add video should be come on person org', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.website[2])
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.website[2] + '/?func=load_course&course=pearson-220-901-220-902-schmidt')
        })
        cy.get('[intro-id="Video Lessons"]').click().then(() => {
            cy.get('.col-md').should('be.visible');
        })
    })

    it('add video should not come on ucertify org', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/?func=load_course&course=pearson-220-901-220-902-schmidt')
        })
        cy.get('[data-cy="chapters"]').click({ force: true }).then(() => {
            cy.get('[intro-id="videos"]').contains("Videos").click({ force: true });
        })
    })

    it('video_container_listview', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/support.php?func=feature&type=student')
        })
        cy.get('#pills_video_tab').click({ force: true })
    })
})