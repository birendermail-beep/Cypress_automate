/*
@author: Anirudh Pratap
@master_project_id: 6618
@phase_id: 
@story_id: 11692
@story_name: Login with User Name and Password
@path: final/Website
@test_case_name: Login with User Name and Password.js
@description: 
@test_steps: 
^Enter a valid username & password
1. Enter valid username.
2. Enter valid password
3. Click on login button

^Enter a valid username & invalid password
1. Enter valid username.
2. Enter invalid password
3. Click on login button

^Enter a invalid username & valid password
1. Enter invalid username.
2. Enter valid password
3. Click on login button

^Enter an invalid username & invalid password
1. Enter invalid username.
2. Enter invalid password
3. Click on login button

^Enter a valid username & password
1. Enter valid username.
2. Enter valid password
3. Click on login button

@test_data: n/a
@result: Either successful login or a popup message or alert for invalid username or password.
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe('Complete uCertify Testing', function() {
    beforeEach('visit the website', () => {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
    })
    it('Enter a valid username & password', () => {
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
    })
    it('Enter a valid username & invalid password', () => {
        Navbar.clickOnLogin()
        cy.get('#email').clear().type(login_username)
        cy.get('#password').clear().clear().type('xxxxxxxx')
        cy.get('#submit').click()
    })
    it('Enter a invalid username & valid password', () => {
        Navbar.clickOnLogin()
        cy.get('#email').clear().type('testbot@uc.com')
        cy.get('#password').clear().clear().type(login_password)
        cy.get('#submit').click()
    })
    it('Enter an invalid username & invalid password', () => {
        Navbar.clickOnLogin()
        cy.get('#email').clear().type('xxxxxx@ucrtfy.com')
        cy.get('#password').clear().clear().type('xxxxxx')
        cy.get('#submit').click()
    })
});