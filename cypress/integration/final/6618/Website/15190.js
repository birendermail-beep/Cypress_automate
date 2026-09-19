/*
@author:Anirudha Pratap
@master_project_id: 6618
@phase_id: n/a
@story_id:15190
@story_name: homepage_connect
@path: final/Website
@test_case_name: homepage_connect
@description:N/A    
@test_steps: 
^homepage_connect  about us
- Visit to website.
- Login to ucertify.com.
- Click the home Page icon.
- scroll down and click on about us

^homepage_connect blog
- Visit to website.
- Login to ucertify.com.
- Click the home Page icon.
- scroll down and click on blog

^homepage_connect contact us
- Visit to website.
- Login to ucertify.com.
- Click the home Page icon.
- scroll down and click on contact us

^homepage_connect Careers
- Visit to website.
- Login to ucertify.com.
- Click the home Page icon.
- scroll down and click on Careers

^homepage_connect Partners
- Visit to website.
- Login to ucertify.com.
- Click the home Page icon.
- scroll down and click on Partners

^homepage_connect Products
- Visit to website.
- Login to ucertify.com.
- Click the home Page icon.
- scroll down and click on Our Products

@test_data: n/a
@result: home page footer open
*/
import {
	Navbar,
	login_username,
	login_password,
	LoginPage,
} from '../../../../page-objects/pages/index'

const footerPages = [
	{ label: 'About Us', path: /\/about\/about\.html$/i },
	{ label: 'Blog', path: /\/blog\/?$/i },
	{ label: 'Contact Us', path: /\/about\/contactus\.html$/i },
	{ label: 'Careers', path: /\/about\/career\.html$/i },
	{ label: /Partners/i, path: /\/about\/partners\.html$/i },
	{ label: 'Platform', path: /\/about\/platforms\.html$/i },
]

describe('homepage footer links', () => {
	beforeEach(() => {
		cy.session(
			'website-footer-login',
			() => {
				cy.visit('/')
				Navbar.clickOnLogin()
				LoginPage.loginPage(login_username, login_password)
				Navbar.clickContinueOnWelcomePage()
			},
			{ cacheAcrossSpecs: true }
		)

		cy.visit('/')
		cy.scrollTo('bottom')
	})

	footerPages.forEach(page => {
		it(`opens ${String(page.label)}`, () => {
			cy.contains('a', page.label, { timeout: 30000 })
				.filter(':visible')
				.first()
				.click({ force: true })

			cy.location('pathname', { timeout: 30000 }).should('match', page.path)
			cy.get('body').should('be.visible').and('not.be.empty')
		})
	})
})
