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

const emailField = '#email, input[type="email"], input[name="email"]'
const passwordField = '#password, input[type="password"], input[name="password"]'
const submitButton = '#submit, button[type="submit"], input[type="submit"]'

function submitInvalidLogin(email, password) {
	Navbar.clickOnLogin()
	cy.get(emailField).filter(':visible').first().clear().type(email, { log: false })
	cy.get(passwordField).filter(':visible').first().clear().type(password, { log: false })
	cy.get(submitButton).filter(':visible').first().click({ force: true })
	cy.location('pathname', { timeout: 30000 }).should('include', 'login.php')
}

describe('uCertify login validation', () => {
	beforeEach(() => cy.visit('/'))

	it('accepts valid credentials', () => {
		Navbar.clickOnLogin()
		LoginPage.loginPage(login_username, login_password)
	})

	it('rejects a valid username and invalid password', () => {
		submitInvalidLogin(login_username, 'invalid-password')
	})

	it('rejects an invalid username and valid password', () => {
		submitInvalidLogin('invalid-user@example.com', login_password)
	})

	it('rejects an invalid username and invalid password', () => {
		submitInvalidLogin('invalid-user@example.com', 'invalid-password')
	})
})
