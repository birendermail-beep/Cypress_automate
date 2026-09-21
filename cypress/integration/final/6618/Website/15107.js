/*
@author: Anirudha Pratap
@master_project_id: 6618
@phase_id:
@story_id: 15107
@story_name: learn_screenshot
@path: final/Website
@test_case_name: learn_screenshot
@description: N/A
@test_steps:
^Screenshots page
-Login to ucertify.com.
-Open the following url:(https://www.ucertify.com/products/learn/screenshots.html)

@test_data: n/a
@result: It will open the learn screenshot page
*/

describe('Learn screenshots page', () => {
	beforeEach(() => cy.websiteLogin())

	it('opens the current page', () => {
		cy.visit('/products/learn/screenshots.html')
		cy.location('pathname', { timeout: 30000 }).should('eq', '/products/learn/screenshots.html')
		cy.get('body').should('be.visible').and('not.be.empty')
	})
})
