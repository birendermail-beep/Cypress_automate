/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id:
@story_id: 14799
@story_name:video only
@path: final/6607/Student
@test_case_name: video only
@description: Opening video only courses.
@test_steps:
^video only
-visit the website
-login into page
-After login open the my library.
-Open any course which have video only.
-You can open this course. (networking-essential-4e-video-only)

^side pane of video only
-Open the my library.
-Open any course which have video only.(https://www.ucertify.com/?func=load_course&course=70-486-VT&desk_copy=1)
-Click on the side pane.

@test_data:n/a
@result:Opening video only courses.
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('Video only page', function() {
    beforeEach('this is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
        })
    })
    it('It open the video only course', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/?func=load_course&course=networking-essential-4e-video-only');
        })
        cy.get("#activity").should('exist').then(() => {
            cy.get("#video_imgViewType").should("be.visible")
        })
    })
    it('Opening the side pane of video only course', function() {
        cy.fixture('global').then(data => {
            cy.get('[data-cy=mylibrary]').click();
            cy.visit(data.url + "/?func=load_course&course=70-486-VT&desk_copy=1");
        })
        cy.get('#btntxt').click();
        cy.get('#ebook_toc').should('be.visible')
    })
})