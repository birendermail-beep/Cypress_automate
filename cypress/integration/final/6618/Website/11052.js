/*
@author:Anirudha Pratap
@master_project_id: 6618
@phase_id: n/a
@story_id: 11052
@story_name: about us
@path: final/Website
@test_case_name: about us
@description:N/A
@test_steps: 

^About us
- Visit to website.
- Login to ucertify.com.
- Click the home Page icon.
- scroll down and click on about us

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
	it('Opening the About us', () => {
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
		cy.contains('a', /^\s*About Us\s*$/i, { timeout: 30000 })
			.filter(':visible')
			.first()
			.click({ force: true })

		cy.location('href', { timeout: 30000 }).should('match', /about/i)
		cy.get('body').should('be.visible').and('not.be.empty')
	})
})
