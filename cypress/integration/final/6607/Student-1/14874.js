/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id:
@story_id: 14874    
@story_name: course start
@path: final/6607/Student
@test_case_name: course start
@description: It will open the course start page.
@test_steps:
^course start page
-Login to the uCertify.com
-Open the following link.(https://www.ucertify.com/start/?func=instructor_access_request)

^Full test mode
-Login to uCertify.com
-Open the my library.
-Open the course.(https://www.ucertify.com/?func=load_course&course_code=02pzx&class_code=04ehS).
-Open the Performance Labs.
-Open any lab.(Understanding USB versions).
-Add "test_view=split" to url.

@test_data: n/a
@result: It will open the course start page.
*/

import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
describe('Course Start', function() {
    beforeEach('this is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
        })
    })
    it('Opening the course start page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + "/start/?func=instructor_access_request");
            cy.get("h1").contains("Pearson uCertify Course Start").should('be.visible')
        })
    })
    it('course start', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + "/?func=load_course&course_code=02pzx&class_code=04ehS");
            cy.get('[data-type="l"]').click().then(() => {
                cy.contains("Understanding USB versions").click({ force: true });
                cy.visit(data.url + "/?func=navigate_items&item_sequence=1&test_view=split")
            })
        })
    })
})