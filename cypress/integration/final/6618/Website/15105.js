/*
@author: Anirudha Pratap
@master_project_id: 6618
@phase_id:
@story_id: 15105
@story_name: test_screenshot
@path: final/Website
@test_case_name: test_screenshot
@description: N/A
@test_steps:
^Screenshots page
-Login to ucertify.com.
-Open the following url:(https://www.ucertify.com/products/test/screenshots.html)

@test_data: n/a
@result: It will open the test screenshot page
*/

describe('Test screenshots page', () => {
	beforeEach(() => cy.websiteLogin())

	it('opens the current page', () => {
		cy.visit('/products/test/screenshots.html')
		cy.location('pathname', { timeout: 30000 }).should('eq', '/products/test/screenshots.html')
		cy.get('body').should('be.visible').and('not.be.empty')
		cy.contains('h1, h2, h3', "uCertify Test Screenshot", { timeout: 30000 }).should('be.visible')
	})
})
