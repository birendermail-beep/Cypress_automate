/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id:
@story_id: 14837
@story_name: Video Tab  
@path: final/6607/Student
@test_case_name: Video Tab  
@description: N/A   
@test_steps:

^Video page
-Login to the uCertify.com
-Open the my library.
-Open the following course."Pearson Cisco: CCNA - Cisco Certified Network Associate (CCNA 200-120)"(https://www.ucertify.com/?func=load_course&course_code=01mtd).
-Click on the chapter and lesson.
-click on the videos tab.

^Video page1
-Login to the uCertify.com
-Open the my library.
-Open the following course."del~03sk8~20200109|new_section"(https://www.ucertify.com/?func=load_course&course_code=02pzx&class_code=04pnM).
-Click on the chapter and lesson.
-click on the videos tab.

^Video page2
-Login to the uCertify.com
-Open the my library.
-Open the following course."del~03sk8~20200109|new_section"(https://www.ucertify.com/?func=load_course&course_code=02pzx&class_code=04pnM).
-Click on the Performance labs.
-click on the videos tab.

@test_data: N/A 
@result: It will open the video tab.
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
    it('Opening the video page1', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/?func=load_course&course_code=01mtd");
        })
        cy.get('[data-cy="chapters"]').click().then(() => {
            cy.get('[intro-id="videos"]').click();
        })
    })
    it('Opening the video page 2', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/?func=load_course&course_code=02pzx&class_code=04pnM");
        })
        cy.get('[data-cy="chapters"]').click().then(() => {
            cy.get('[intro-id="videos"]').click();
        })
    })
    it('Opening the video page 3', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/?func=load_course&course_code=02pzx&class_code=04pnM");
        })
        //Pankaj:ucauto (change v to b to click on "learn" card) 
        // cy.get('[data-type="v"]').click().then(() => {
        cy.get('[data-type="b"]').click().then(() => {
            cy.get('[intro-id="videos"]').click();
        })
    })
})