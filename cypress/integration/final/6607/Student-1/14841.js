/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id:
@story_id: 14841
@story_name: final survey
@path: final/6607/Student
@test_case_name: final survey
@description: Opening the final survey page
@test_steps:

^final survey
-visit the website
-login into page
-Open the my library.
-Open the following course.(url +/?func=load_course&course_code=02SEO&class_code=046T4)
-click on the final survey.

^final survey 1
-visit the website
-login into page
-Open the my library.
-Open the following course.(url + /?func=load_course&course_code=02SEO&class_code=046T4)
-click on the final survey
-Open the following url.(url +/?action=survey2&ins=0)

^final survey2
-visit the website
-login into page
-Open the my library.
-Open the following course.(url + /?func=load_course&course_code=02SEO&class_code=046T4)
-click on the final survey

@test_data: n/a
@result: Opening the final survey page
*/
import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index' 
describe('Survey page', function() {
    beforeEach('this is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
        })
    })

    it('Opening the all survey page page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + "/?func=load_course&course_code=" + data.course_code[0] + "&class_code=" + data.class_code[0]);
            cy.visit(data.url + '/?action=survey2&ins=1')
        })
    })
    it('Opening the all survey page page1', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + "/?func=load_course&course_code=" + data.course_code[0] + "&class_code=" + data.class_code[0]);
            cy.visit(data.url + "/?action=survey2&ins=0")
        })
    })
    it('Opening the all survey page page2', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + "/?func=load_course&course_code=" + data.course_code[0] + "&class_code=" + data.class_code[0]);
            cy.visit(data.url + '/?action=survey1&ins=1')
        })
    })
    it('To show final and initial survey', function() {
        cy.fixture('global').then(data => {
            cy.get('[data-cy=mylibrary]').click();
            cy.get('[data-cy=searchbox]').type("Introduction to Sustainability");
            cy.visit(data.url + "?func=load_course&course=sustainability&theme_view=classic");
        });
    });
    it('To show lab in dashboard', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + "/admin/user_login.php")
            cy.get('[data-cy=admin_user_login]').clear({ force: true }).type(data.author_email[1], { force: true });
            cy.get('[data-cy=admin_login_submit]').click();
            cy.get('[data-cy=searchbox]').type("Secure Network Design");
            cy.visit(data.url + "/?func=load_course&course=WGU-C700&class_code=05RL0");
        });
    })
})