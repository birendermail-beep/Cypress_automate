/*
@author:Anirudha Pratap
@master_project_id: 6618
@phase_id: n/a
@story_id: 11062
@story_name: homepage_footer_partners
@path: final/Website
@test_case_name: homepage_footer_partners.js
@description:
@test_steps: 
^homepage_footer_partners 
- Visit to website.
- Login to ucertify.com.
- Click the home Page icon.
- scroll to down and click Microsoft
^homepage_footer_partners 
- Visit to website.
- Login to ucertify.com.
- Click the home Page icon.
- scroll to down and click Oracle
^homepage_footer_partners 
- Visit to website.
- Login to ucertify.com.
- Click the home Page icon.
- scroll to down and click Cisco
^homepage_footer_partners 
- Visit to website.
- Login to ucertify.com.
- Click the home Page icon.
- scroll to down and click CompTIA
^homepage_footer_partners 
- Visit to website.
- Login to ucertify.com.
- Click the home Page icon.
- scroll to down and click CIW
^homepage_footer_partners 
- Visit to website.
- Login to ucertify.com.
- Click the home Page icon.
- scroll to down and click PMI
^homepage_footer_partners 
- Visit to website.
- Login to ucertify.com.
- Click the home Page icon.
- scroll to down and click ISC2
^homepage_footer_partners 
- Visit to website.
- Login to ucertify.com.
- Click the home Page icon.
- scroll to down and click Adobe
^homepage_footer_partners 
- Visit to website.
- Login to ucertify.com.
- Click the home Page icon.
- scroll to down and click Axelos
^homepage_footer_partners 
- Visit to website.
- Login to ucertify.com.
- Click the home Page icon.
- scroll to down and click get it on google play store
^homepage_footer_partners 
- Visit to website.
- Login to ucertify.com.
- Click the home Page icon.
- scroll to down and click on download on the play store
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
	const knownWebsiteErrors = [
		"Cannot read properties of null (reading 'style')",
		"Cannot read properties of null (reading 'postMessage')",
	]

	if (knownWebsiteErrors.some(message => err.message.includes(message))) {
		return false
	}
})

describe('homepage footer testing', function () {
	beforeEach('restore login and open the website home page', function () {
		cy.session('homepage-footer-login', () => {
			cy.visit('/')
			Navbar.clickOnLogin()
			LoginPage.loginPage(login_username, login_password)
			Navbar.clickContinueOnWelcomePage()
		})

		cy.visit('https://www.ucertify.com/')
	})
	it('Opening the Microsoft', function () {
		LoginPage.visitOnFooter('Microsoft')
	})
	it('Opening the Oracle', function () {
		LoginPage.visitOnFooter('Oracle')
	})
	it('Opening the Cisco', function () {
		LoginPage.visitOnFooter('Cisco')
	})
	it('Opening the CompTIA', function () {
		LoginPage.visitOnFooter('CompTIA')
	})
	it('Opening the CIW', function () {
		LoginPage.visitOnFooter('CIW')
	})
	it('Opening the PMI', function () {
		LoginPage.visitOnFooter('PMI')
	})
	it('Opening the ISC2', function () {
		LoginPage.visitOnFooter('ISC2')
	})
	it('Opening the Adobe', function () {
		LoginPage.visitOnFooter('Adobe')
	})
	it('Opening the Axelos', function () {
		LoginPage.visitOnFooter('Axelos')
	})
	it('Opening the Get it On google play store', function () {
		cy.get('a[href*="play.google.com"]')
			.filter(':visible')
			.first()
			.click({ force: true })
	})
	it('Opening the dwonload on the app store', function () {
		cy.get('a[href*="apps.apple.com"]')
			.filter(':visible')
			.first()
			.click({ force: true })
	})
})
