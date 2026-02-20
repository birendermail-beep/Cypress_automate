/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id:
@story_id: 10925
@story_name: Link with Instructor with Instrcutor's Email
@path: final/6607/Student
@test_case_name: Link with Instructor with Instrcutor's Email
@description : na
@test_steps:
^Leave the instructor's email text box blank
-Open dashboard of prepkit
-Click the Link with Instructor button
-A dialog box will appear
-Go to the by instructor tab
-Leave the instructor's email text box blank or enter invalid email 
-An error message should appear

^Enter the instructor's email
-Open dashboard of prepkit
-Click the Link with Instructor button
-A dialog box will appear
-Go to the by instructor tab
-Enter the instructor's email
-Click send request
-It should send a mail to instructor and provide a message

^test case of link with instructor
-visit the website
-login into page
-Open the My library.
-Open the student dashboard of "Project Management" course.
-Click on Link with Instructor button.
-Click on By instructor email.
-Fill the email then 
-Click on submit button.

@test_data: n/a
@result: An error message should appear and It should send a mail to instructor and provide a message
*/
import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
describe('Link With Instructor', function() {
    beforeEach('this is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
        })
    })
    it('Link with Instructor with invalid section key', function() {
        cy.get('[data-cy="mylibrary"]').click({ force: true })
        cy.get('[data-cy="searchbox"]').type('CIW 1D0-671')
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/?func=load_course&course=1D0-671&theme_view=classic')
        })
        cy.get('[data-cy=setup_tab]').click()
        cy.get('.radio-b').click()
        cy.get(':nth-child(3) > .nav-link').click()
        cy.get('.instructor-search').click()
        cy.get('.invalid_email').contains('Invalid email. Please fill a valid email.')
    })
    it('Link with Instructor using instructor email', function() {
        cy.get('[data-cy="mylibrary"]').click({ force: true })
        cy.get('[data-cy="searchbox"]').type('CIW 1D0-671')
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/?func=load_course&course=1D0-671&theme_view=classic')
        })
        cy.get('[data-cy=setup_tab]').click()
        cy.get('.radio-b').click()
        cy.get(':nth-child(3) > .nav-link').click()
        cy.get('#instructoremails').type('swati.yadav@ucertify.com', { force: true })
        cy.get('.instructor-search').click()
    })
    it('to open the link with instructor', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/?func=load_course&course=1D0-671&theme_view=classic')
        })
        cy.get('[data-cy=setup_tab]').click().then(() => {
            // Pankaj :ucauto
            // cy.get('.radio-b').click()
            cy.get('#radio-b').click({ force: true })
            cy.get(':nth-child(3) > .nav-link').click()
            cy.fixture('global').then(data => {
                cy.get('#instructoremails').clear().type(data.auditor_email[0]).then(() => {
                    cy.get(".instructor-search").contains("Send Request").click();
                })
            })
        })
    })
});