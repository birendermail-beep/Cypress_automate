/*
@author: Anirudha Pratap
@master_project_id: 6618
@phase_id:
@story_id: 11054
@story_name:Signup
@path: final/Website
@test_case_name: Signup.js
@description: open signup form and perform all possibilities
@test_steps:
^Use registered email
- Go to sign up page
- Fill a alreday registered email
- Click the Sign Up button

^Use unregistered email
- Go to sign up page
- Fill a alreday unregistered email
- Click the Sign Up button

@test_data: N/A
@result: If the user email is correct, the user will be registered with uCertify and get the Activation Code via activation email. Otherwise, the user will get an error message.
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe('Sign up form', function() {
    beforeEach('this is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.get('#logoff').click({ force: true })
            cy.visit(data.url + '/login.php?func=signup')
        })
    })
    it('Agree Terms of Service checkbox', function() {
        cy.get('#repassword').clear().type('ankit.yadav')
        cy.get('#agree').uncheck()
        cy.get('#sign').should('be.disabled')
    })
    it('Create account correctly', function() {
        cy.get('#first_name').clear().type('Ankit')
        cy.get('#last_name').clear().type('Yadav')
        cy.get('#email').clear().type('ucertify@gmail.com')
        cy.get('#password').clear().type('ankit.yadav')
        cy.get('#repassword').clear().type('ankit.yadav')
        cy.get('#agree').check()
        cy.get('#sign').click()
    })
    it('Give incorrect Email', function() {
        cy.get('#first_name').clear().type('Ankit')
        cy.get('#last_name').clear().type('Yadav')
        cy.get('#email').clear().type('ankit.yadav@uertify')
        cy.get('#sign').click()
        cy.log('Email should Give Error')
    })
    it('Give incorrect Email again', function() {
        cy.get('#first_name').clear().type('Ankit')
        cy.get('#last_name').clear().type('Yadav')
        cy.get('#email').clear().type('ankit.yadav@ucetify@@s')
        cy.get('#sign').click()
        cy.log('Email should Give Error')
    })
    it('Give incorrect Name', function() {
        cy.get('#first_name').clear().type('Ankit 12 @')
        cy.get('#last_name').clear().type('Yadav #@* 9')
        cy.get('#sign').click()
        cy.log('Name should Give Error')
    })
    it('Give the both password Difference', function() {
        cy.get('#first_name').clear().type('Ankit')
        cy.get('#last_name').clear().type('Yadav')
        cy.fixture('global').then(data => {
            cy.get('#email').clear().type(data.auditor_email[0])
        })
        cy.get('#password').clear().type('ankit.yadav')
        cy.get('#repassword').clear().type('ankityadav')
        cy.get('#sign').click()
        cy.get('.help-block').should('be.visible').contains('Both password should match!')
    })
    it('Give the Re-type Password < 6', function() {
        cy.get('#first_name').clear().type('Ankit')
        cy.get('#last_name').clear().type('Yadav')
        cy.fixture('global').then(data => {
            cy.get('#email').clear().type(data.auditor_email[0])
        })
        cy.get('#password').clear().type('ankit.yadav')
        cy.get('#repassword').clear().type('ankit')
        cy.get('#sign').click()
        cy.log('Message is not give currect meaning')
        cy.get('.help-block').should('be.visible').contains('Please fill password between 6-20 digits')
    })
});