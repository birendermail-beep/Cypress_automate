/*
@author: Anurag Chaurasia
@master_project_id: 6615
@phase_id : 6618
@story_id: 14991
@story_name: educator_class_ranking_report
@path: final/Educator
@test_case_name: educator_class_ranking_report.js
@description : educator_class_ranking_report
@test_steps:

^test show To show survey and lab in dashboard
- show initial and final survey in dashboard
- show lab in dashboard

^test case of show initial and final survey in dashboard
- Login In ucertify portal
- Go to my library
- select a course
- open this course
- initial and final survey in dashboard will be shown

^test case of show lab in dashboard
- Login In ucertify portal
- Go to my library
- select a course
- open this course
- lab in dashboard will be shown

@test_data: Login credential.

@result: initial and final survey in dashboard will be shown
*/

import { Navbar, login_username, login_password, LoginPage, InstructorPage } from '../../../../page-objects/pages/index'
describe('Generate video playlist', function() {
    beforeEach('This is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin();
            LoginPage.loginPage(login_username, login_password);
        })
    })
    it('To show final and initial survey', function() {
        cy.fixture('global').then(data => {
            cy.get('[data-cy=mylibrary]').click();
            cy.get('[data-cy=searchbox]').type("Lo comptia a+");
            cy.visit(data.url + "?func=load_course&course=LO-Aplus-complete&class_code=05Rf3");
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