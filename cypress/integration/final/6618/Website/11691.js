/*
@author:Anirudha Pratap
@master_project_id: 6618
@phase_id: n/a
@story_id:11691
@story_name: browse_titles
@path: final/6607/Student
@test_case_name: browse_titles
@description:
@Test Steps: 
^test case of Browse Title
- Visit to website.
- Login to ucertify.com.
- Click the Previous Page icon.
- Click Browse Titles.
- Go to the each option one by one to open the pages.

^test case of course categories
- Visit to website.
- Login to ucertify.com.
- Click the Previous Page icon.
- Click course categories
- Go to the each option one by one to open the pages. 

@test_data: n/a
@result: Course page of each option will open.
*/
import {
	Navbar,
	login_username,
	login_password,
	LoginPage,
} from '../../../../page-objects/pages/index'

const vendors = [
	{ name: 'Adobe', slug: 'Adobe', destination: /\/p\/Adobe\.html$/i },
	{ name: 'Amazon', slug: 'Amazon', destination: /\/p\/Amazon\.html$/i },
	{
		name: 'Axelos',
		slug: 'Axelos',
		destination: /\/p\/(Axelos|catalog)\.html$/i,
	},
	{ name: 'CWNP', slug: 'CWNP', destination: /\/p\/CWNP\.html$/i },
	{
		name: 'CertNexus',
		slug: 'CertNexus',
		destination: /\/p\/CertNexus\.html$/i,
	},
	{
		name: 'Certiport',
		slug: 'Certiport',
		destination: /\/p\/Certiport\.html$/i,
	},
	{ name: 'Cisco', slug: 'Cisco', destination: /\/p\/Cisco\.html$/i },
	{
		name: 'Microsoft',
		slug: 'Microsoft',
		destination: /\/p\/Microsoft\.html$/i,
	},
	{ name: 'Oracle', slug: 'Oracle', destination: /\/p\/Oracle\.html$/i },
	{ name: 'RedHat', slug: 'RedHat', destination: /\/p\/RedHat\.html$/i },
	{ name: 'ISC2', slug: 'ISC2', destination: /\/p\/ISC2\.html$/i },
	{ name: 'CIW', slug: 'CIW', destination: /\/p\/CIW\.html$/i },
	{ name: 'CompTIA', slug: 'CompTIA', destination: /\/p\/CompTIA\.html$/i },
	{ name: 'Google', slug: 'Google', destination: /\/p\/Google\.html$/i },
	{ name: 'HRCI', slug: 'HRCI', destination: /\/p\/HRCI\.html$/i },
	{ name: 'IIBA', slug: 'IIBA', destination: /\/p\/IIBA\.html$/i },
	{ name: 'PMI', slug: 'PMI', destination: /\/p\/PMI\.html$/i },
	{ name: 'LPI', slug: 'LPI', destination: /\/p\/LPI\.html$/i },
	{ name: 'ISACA', slug: 'ISACA', destination: /\/p\/ISACA\.html$/i },
	{ name: 'VMware', slug: 'VMware', destination: /\/p\/VMware\.html$/i },
]

Cypress.on('uncaught:exception', err => {
	const knownWebsiteErrors = [
		"Cannot read properties of null (reading 'style')",
		"Cannot read properties of null (reading 'postMessage')",
		"Unexpected token ';'",
	]

	if (knownWebsiteErrors.some(message => err.message.includes(message))) {
		return false
	}
})

describe('Current vendor pages', () => {
	beforeEach(() => {
		cy.session('browse-vendor-login', () => {
			cy.visit('/')
			Navbar.clickOnLogin()
			LoginPage.loginPage(login_username, login_password)

			cy.contains('button, a', /^\s*Continue\s*$/i, {
				timeout: 30000,
			})
				.filter(':visible')
				.first()
				.click({ force: true })

			cy.location('href', { timeout: 30000 }).should(
				'not.include',
				'func=welcome'
			)
		})

		cy.visit('/p/vendors.html')
	})

	vendors.forEach(vendor => {
		it(`Opening the ${vendor.name} vendor page`, () => {
			cy.get(`a[href$="/p/${vendor.slug}.html"]`, { timeout: 30000 })
				.filter(':visible')
				.first()
				.click({ force: true })

			cy.location('pathname', { timeout: 30000 }).should(
				'match',
				vendor.destination
			)
			cy.get('body').should('be.visible').and('not.be.empty')
		})
	})
})
