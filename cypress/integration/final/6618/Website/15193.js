/*
@author:Anirudha Pratap
@master_project_id: 6618
@phase_id: n/a
@story_id:15193
@story_name: homepage_social
@path: final/Website
@test_case_name: homepage_social
@description: N/A
@test_steps: 
    ^homepage_social facebook 
    - Visit to website.
    - Login to ucertify.com.
    - Click the home Page icon.
    - scroll down and click on facebook

    ^homepage_social twitter
    - Visit to website.
    - Login to ucertify.com.
    - Click the home Page icon.
    - scroll down and click on twitter

    ^homepage_social youtube
    - Visit to website.
    - Login to ucertify.com.
    - Click the home Page icon.
    - scroll down and click on youtube
    
    ^homepage_social instragram
    - Visit to website.
    - Login to ucertify.com.
    - Click the home Page icon.
    - scroll down and click on instragram

    ^homepage_social linkedin
    - Visit to website.
    - Login to ucertify.com.
    - Click the home Page icon.
    - scroll down and click on linkedin
    
@test_data: n/a
@result: home page footer open
*/
import {
	Navbar,
	login_username,
	login_password,
	LoginPage,
} from '../../../../page-objects/pages/index'

const socialLinks = [
	{ label: 'Facebook', destination: /facebook\.com/i },
	{ label: /Twitter|X/i, destination: /(?:twitter|x)\.com/i },
	{ label: /YouTube/i, destination: /youtube\.com/i },
	{ label: /Instagram/i, destination: /instagram\.com/i },
	{ label: /LinkedIn/i, destination: /linkedin\.com/i },
]

describe('homepage social links', () => {
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

	socialLinks.forEach(social => {
		it(`has the ${String(social.label)} link`, () => {
			cy.contains('a', social.label, { timeout: 30000 })
				.filter(':visible')
				.first()
				.should('have.attr', 'href')
				.and('match', social.destination)
		})
	})
})
