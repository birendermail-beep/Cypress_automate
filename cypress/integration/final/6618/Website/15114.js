/*
@author: Anirudha Pratap
@master_project_id: 6618
@phase_id:
@story_id: 15114
@story_name: wgu_screenshot
@path: final/Website
@test_case_name: wgu_screenshot
@description: N/A
@test_steps:
^Screenshots page
-Login to ucertify.com.
-Open the following url:(https://www.ucertify.com/products/wgu/screenshots.html)

@test_data: n/a
@result: It will open the wgu screenshot page
*/
describe('current application screenshots', () => {
	beforeEach(() => {
		cy.websiteLogin()
	})

	it('opens the current App screenshots page', () => {
		cy.visit('/products/app/screenshots.html')
		cy.location('pathname', { timeout: 30000 }).should(
			'eq',
			'/products/app/screenshots.html'
		)
		cy.get('img:visible', { timeout: 30000 }).should('have.length.at.least', 1)
		cy.get('body').should('be.visible').and('not.be.empty')
	})
})
