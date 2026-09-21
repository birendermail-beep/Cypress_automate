/*
@author:Anirudha Pratap
@master_project_id: 6618
@phase_id: n/a
@story_id:15191
@story_name: homepage_footer
@path: final/Website
@test_case_name: homepage_footer
@description: N/A   
@test_steps: 
^test case of home page Footer 
- Visit to website.
- Login to ucertify.com.
- Click the home Page icon.
- Click I Am

@test_data: n/a
@result: home page open
*/

describe('Current website destinations', () => {
	beforeEach(() => cy.websiteLogin())

	it('opens Partners', () => {
		cy.visit('/about/partners.html')
		cy.location('pathname', { timeout: 30000 }).should('eq', '/about/partners.html')
		cy.get('body').should('be.visible').and('not.be.empty')
	})

	it('opens Vendors', () => {
		cy.visit('/vendors.html')
		cy.location('pathname', { timeout: 30000 }).should('eq', '/vendors.html')
		cy.get('body').should('be.visible').and('not.be.empty')
	})

	it('opens Certifications', () => {
		cy.visit('/certifications.html')
		cy.location('pathname', { timeout: 30000 }).should('eq', '/certifications.html')
		cy.get('body').should('be.visible').and('not.be.empty')
	})

	it('opens Publisher', () => {
		cy.visit('/about/publisher.html')
		cy.location('pathname', { timeout: 30000 }).should('eq', '/about/publisher.html')
		cy.get('body').should('be.visible').and('not.be.empty')
	})

	it('opens Contact Us', () => {
		cy.visit('/about/contactus.html')
		cy.location('pathname', { timeout: 30000 }).should('eq', '/about/contactus.html')
		cy.get('body').should('be.visible').and('not.be.empty')
	})

	it('opens Terms & Conditions', () => {
		cy.visit('/about/terms.html')
		cy.location('pathname', { timeout: 30000 }).should('eq', '/about/terms.html')
		cy.get('body').should('be.visible').and('not.be.empty')
	})

	it('shows current lab categories', () => {
		cy.visit('/products/labs.html')
		;['LiveLAB', 'CodeLAB', 'ScenarioSIM'].forEach(label => {
			cy.contains('h3, a', label, { timeout: 30000 }).should('be.visible')
		})
	})
})
