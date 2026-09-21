/*
@author: Anirudha Pratap
@master_project_id: 6618
@phase_id:
@story_id: 15117
@story_name: labs_screenshot
@path: final/Website
@test_case_name: labs_screenshot
@description: N/A
@test_steps:
^Screenshots page
-Login to ucertify.com.
-Open the following url:(https://www.ucertify.com/products/labs/screenshots.html)

@test_data: n/a
@result: It will open the labs screenshot page
*/

describe('Lab screenshots page', () => {
	beforeEach(() => cy.websiteLogin())

	it('opens the current page', () => {
		cy.visit('/products/labs/screenshots.html')
		cy.location('pathname', { timeout: 30000 }).should('eq', '/products/labs/screenshots.html')
		cy.get('body').should('be.visible').and('not.be.empty')
	})
})
