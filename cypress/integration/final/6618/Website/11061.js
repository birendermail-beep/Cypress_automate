/*
@author:Anirudha Pratap
@master_project_id: 6618
@phase_id: n/a
@story_id: 11061
@story_name: I Am Options
@path: final/Website
@test_case_name: I Am Options
@description:N/A
@test_steps:

^test case of i_am_professional
- Visit to website.
- Login to ucertify.com.
- Click the home Page icon.
- Open the Business page from Partner With Us.

^test case of i_am_educator
- Visit to website.
- Login to ucertify.com.
- Click the home Page icon.
- Open the Educator page from Partner With Us.

^test case of i_am_publisher
- Visit to website.
- Login to ucertify.com.
- Click the home Page icon.
- Open the Publisher page from Partner With Us.
- Open and fill the current contact form.

@test_data: n/a
@result: Partner With Us options open the expected pages
*/

import {
	Navbar,
	login_username,
	login_password,
	LoginPage,
} from '../../../../page-objects/pages/index'

Cypress.on('uncaught:exception', err => {
	const knownWebsiteErrors = [
		"Cannot read properties of null (reading 'style')",
		"Cannot read properties of null (reading 'postMessage')",
	]

	if (knownWebsiteErrors.some(message => err.message.includes(message))) {
		return false
	}
})

describe('Partner With Us', function () {
	beforeEach('this is login', function () {
		cy.visit('/')
		Navbar.clickOnLogin()
		LoginPage.loginPage(login_username, login_password)
		Navbar.clickContinueOnWelcomePage()
		cy.visit('https://www.ucertify.com/')
	})

	it('i_am_professional', function () {
		cy.get('a[href="https://www.ucertify.com/about/business.html"]')
			.filter(':visible')
			.first()
			.click({ force: true })
		cy.location('pathname').should('eq', '/about/business.html')
	})

	it('Opening the i am educator page', function () {
		cy.get('a[href="https://www.ucertify.com/about/educator.html"]')
			.filter(':visible')
			.first()
			.click({ force: true })
		cy.location('pathname').should('eq', '/about/educator.html')
	})

	it('Opening the i am publisher page', function () {
		cy.get('a[href="https://www.ucertify.com/about/publisher.html"]')
			.filter(':visible')
			.first()
			.click({ force: true })
		cy.location('pathname').should('eq', '/about/publisher.html')

		cy.get('a[href*="contactus.html#contact_us_form"]')
			.filter(':visible')
			.first()
			.click({ force: true })
		cy.location('pathname').should('eq', '/about/contactus.html')

		cy.get('#contact_us_form').should('be.visible')
		cy.get('#user_name').type('Automation Tester')
		cy.get('#email').type('testbot@ucertify.com')
		cy.get('#region').select('India')
		cy.get('#job_title').select('Authors & Publishers ')
		cy.get('#org_school').type('uCertify')
		cy.get('#comments').type('Publisher partnership automation test')
	})
})
