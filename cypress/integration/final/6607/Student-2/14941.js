/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id: 9327
@story_id: 14941
@story_name: check item password
@path: final/6607/Student
@test_case_name: check item password
@description: N/A   
@test_steps:
^checking proctor login
-Open the my library.
-Open any course.(https://www.ucertify.com/?func=load_course&course=LO-Aplus-complete&class_code=05O8Y)
-Open the chapter and lesson.
-Then click on any chapter. which have hold proctor login

^check chapter and lesson protection
-Open the my library.
-Open any course.(https://www.ucertify.com/?func=load_course&course=LO-Aplus-complete&class_code=05O8Y)
-Open the chapter and lession.
-Then click on any chapter. which have hold proctor login and modal

@test_data: n/a
@result: It open the proctor login page..
*/

import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index' 
describe('Proctor login', function() {
    beforeEach('this is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/?func=load_course&course=LO-Aplus-complete&class_code=05O8Y");
            cy.get('[intro-id="chapters"]').click();
            cy.visit(data.url + "/?func=ebook&chapter_no=1#top");
        })
    })
    it('Chapter and lesson proctor login page', function() {
        cy.get('#password_form > .alert').should("be.visible").then(() => {
            cy.get('[data-target="#proctor_login_modal"]').should('exist');
        })
    })
    it('Chapter and lesson protection login page', function() {
        cy.get('#password_form > .alert').should("be.visible").then(() => {
            cy.get('#password').should('exist');
        })
        cy.get('.form-group > .btn').click({ force: true })
    })
})