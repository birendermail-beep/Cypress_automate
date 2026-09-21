/*
@author: Anirudha Pratap
@master_project_id: 6618
@phase_id:
@story_id: 15105
@story_name: create_screenshot
@path: final/Website
@test_case_name: create_screenshot
@description: N/A
@test_steps:
^Screenshots page
-Login to ucertify.com.
-Open the following url:(https://www.ucertify.com/products/create/screenshots.html)

@test_data: n/a
@result: It will open the create screenshot page
*/

describe('Create screenshots page', () => {
	beforeEach(() => cy.websiteLogin())

	it('opens the current page', () => {
		cy.visit('/products/create/screenshots.html')
		cy.location('pathname', { timeout: 30000 }).should('eq', '/products/create/screenshots.html')
		cy.get('body').should('be.visible').and('not.be.empty')
	})
})
