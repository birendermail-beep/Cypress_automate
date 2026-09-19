/*
@author:Anirudha Pratap
@master_project_id: 6618
@phase_id: n/a
@story_id:15192
@story_name: homepage_resources
@path: final/Website
@test_case_name: homepage_resources
@description:N/A
@test_steps: 
^homepage_resources vendors
- Visit to website.
- Login to ucertify.com.
- Click the home Page icon.
- scroll down and click on vendors

^homepage_resources Certifications
- Visit to website.
- Login to ucertify.com.
- Click the home Page icon.
- scroll down and click on Certifications

^homepage_resources Sitemap
- Visit to website.
- Login to ucertify.com.
- Click the home Page icon.
- scroll down and click on Exams

^homepage_resources Sitemap
- Visit to website.
- Login to ucertify.com.
- Click the home Page icon.
- scroll down and click on Sitemap

^homepage_resources Catalog
- Visit to website.
- Login to ucertify.com.
- Click the home Page icon.
- scroll down and click on Catalog

^homepage_resources Chat
- Visit to website.
- Login to ucertify.com.
- Click the home Page icon.
- scroll down and click on Help

^homepage_resources  Accessibility
- Visit to website.
- Login to ucertify.com.
- Click the home Page icon.
- scroll down and click on Accessibility

@test_data: n/a
@result: home page footer open
*/
import {
	Navbar,
	login_username,
	login_password,
	LoginPage,
} from '../../../../page-objects/pages/index'

const resourcePages = [
	{ label: 'Vendors', path: /\/p\/vendors\.html$/i },
	{ label: 'Certifications', path: /\/p\/certifications\.html$/i },
	{ label: 'Exams', path: /\/p\/exams\.html$/i },
	{ label: 'Sitemap', path: /\/about\/sitemap\.html$/i },
	{ label: 'Accessibility', path: /\/about\/accessibility_ada\.html$/i },
]

describe('homepage resource links', () => {
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
	})

	resourcePages.forEach(page => {
		it(`opens ${page.label}`, () => {
			cy.scrollTo('bottom')
			cy.contains('a', new RegExp(`^\\s*${page.label}\\s*$`, 'i'), {
				timeout: 30000,
			})
				.filter(':visible')
				.first()
				.click({ force: true })

			cy.location('pathname', { timeout: 30000 }).should('match', page.path)
		})
	})

	it('opens the Catalog menu', () => {
		cy.contains('a, button', /^\s*Catalog\s*/i, { timeout: 30000 })
			.filter(':visible')
			.first()
			.click({ force: true })
		cy.get('body').should('contain.text', 'IT')
	})

	it('shows Help and Support', () => {
		cy.contains('button', /Help/i, { timeout: 30000 })
			.filter(':visible')
			.should('be.visible')
	})
})
