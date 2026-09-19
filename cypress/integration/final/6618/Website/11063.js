/*
@author:Anirudha Pratap
@master_project_id: 6618
@phase_id: n/a
@story_id: 11063
@story_name: Vendors Page
@path: final/Website
@test_case_name: Vendors Page
@description:
@test_steps: 
^test case of home page Footer 
- Visit to website.
- Login to ucertify.com.
- Click the home Page icon.
- scroll down and click on vendors

^Load vendor page
-Scroll down on same page to footer bar
-Click the Vendor option

^Load adobe vendor 
-On the vendor page, click the Adobe tile

^Load vendor course
-Click on Adobe indesign-2017 course

^Load vendor certification
-Go back by using this URL
-Click the certidication tab
-You will scroll down to certification section
-Click the Adobe Certified Expert on InDesign

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

describe('homepage footer testing', () => {
	it('Opening the vendors', () => {
		cy.visit('/')
		Navbar.clickOnLogin()
		LoginPage.loginPage(login_username, login_password)

		cy.contains('button, a', /^\s*Continue\s*$/i, { timeout: 30000 })
			.filter(':visible')
			.first()
			.click({ force: true })

		cy.location('href', { timeout: 30000 }).should(
			'not.include',
			'func=welcome'
		)

		cy.scrollTo('bottom')
		cy.get('a[href$="/p/vendors.html"]', { timeout: 30000 })
			.filter(':visible')
			.first()
			.click({ force: true })

		cy.location('href', { timeout: 30000 }).should('match', /vendors/i)
		cy.get('body').should('be.visible').and('not.be.empty')
	})
})
