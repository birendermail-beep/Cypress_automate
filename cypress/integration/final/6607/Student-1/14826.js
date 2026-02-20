/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id:
@story_id: 14826
@story_name: start page data
@path: final/6607/Student
@test_case_name: start page data.js
@description: Opening the start page data page 
@test_steps:

^start page data
-visit the website
-login into page
-Open my library.
-Click on the Add License.
-Give the access code.
-Click on the instructor Led.
-Click on the validate.

^Add license
-visit the website
-login into page
-Open my library.
-Click on the Add License.
-Give the access code.
-Click on the instructor Led.
-Click on the validate.
-Click on the any course

@test_data:n/a
@result: Opening the start page data page
*/
import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
describe('Start page data', function() {
    beforeEach('this is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/?func=get_course_list&show=courses");
        })
    })
    it('Opening the start page data page', function() {
        cy.get('[intro-id="addlicense"]').click();
        cy.fixture('global').then(data => {
            cy.get('#self_paced_stu').click();
            cy.get('#next_btn').click();
            cy.get("#access_code").clear({ force: true }).type(data.access_code).then(() => {
                cy.get('#validate_code').click({ force: true });
            })
        })
    })
    it('Add license', function() {
        cy.get('[intro-id="addlicense"]').click();
        cy.get('#next_btn').click();
        cy.get("#section_key").clear({ force: true }).type("MKVP-MRLT-LCJX-AVJH")
        cy.get('#next_btn').click();
    })
})