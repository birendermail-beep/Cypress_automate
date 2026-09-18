/*
@author:Anirudha Pratap
@master_project_id: 6618
@phase_id: n/a
@story_id: 11060
@story_name: Contact Us
@path: final/Website
@test_case_name: Contact Us
@description:N/A
@test_steps: 

^Contact Us
- Visit to website.
- Login to ucertify.com.
- Click the home Page icon.
- scroll down and click on Contact Us

@test_data: n/a
@result: home page footer open
*/

import {
	Navbar,
	login_username,
	login_password,
	LoginPage,
} from '../../../../page-objects/pages/index'

Cypress.on('uncaught:exception', err => {
	if (
		err.message.includes("Cannot read properties of null (reading 'style')")
	) {
		return false
	}
})

describe('homepage footer testing', function () {
	it('Opening the Contact Us', function () {
		cy.visit('/')
		Navbar.clickOnLogin()
		LoginPage.loginPage(login_username, login_password)
		Navbar.clickContinueOnWelcomePage()

		cy.visit('https://www.ucertify.com/')
		cy.get('a[href="https://www.ucertify.com/about/contactus.html"]', {
			timeout: 30000,
		})
			.filter(':visible')
			.first()
			.scrollIntoView()
			.click({ force: true })

		cy.location('pathname', { timeout: 30000 }).should(
			'eq',
			'/about/contactus.html'
		)
	})
})
