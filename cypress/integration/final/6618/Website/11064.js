/*
@author:Anirudha Pratap
@master_project_id: 6618
@phase_id: n/a
@story_id: 11064
@story_name: homepage_resources
@path: final/Website
@test_case_name: homepage_resources.js
@description:
@test_steps: 
    ^test case of home page Footer 
    - Visit to website.
    - Login to ucertify.com.
    - Click the home Page icon.
    - scroll down and click on Certifications

@test_data: n/a
@result: home page footer open
*/
import {
	Navbar,
	login_username,
	login_password,
	LoginPage,
} from '../../../../page-objects/pages/index'

describe('homepage footer testing', () => {
	it('Opening the Certifications', () => {
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
		cy.contains('a', /^\s*Certifications\s*$/i, { timeout: 30000 })
			.filter(':visible')
			.first()
			.click({ force: true })

		cy.location('href', { timeout: 30000 }).should(
			'match',
			/certification/i
		)
		cy.get('body').should('be.visible').and('not.be.empty')
	})
})
