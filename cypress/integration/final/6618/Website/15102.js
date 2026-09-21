/*
@author: Anirudha Pratap
@master_project_id: 6618
@phase_id:
@story_id: 15102
@story_name: howto_labs
@path: final/Website
@test_case_name: howto_labs
@description: N/A
@test_steps:
^How to page
-Login to ucertify.com.
-Open the following url:(https://www.ucertify.com/products/labs/videos.html)

@test_data: n/a
@result: It will open the how to course help videos
*/

describe('How-to lab videos page', () => {
	beforeEach(() => cy.websiteLogin())

	it('opens the current page', () => {
		cy.visit('/products/labs/videos.html')
		cy.location('pathname', { timeout: 30000 }).should('eq', '/products/labs/videos.html')
		cy.get('body').should('be.visible').and('not.be.empty')
	})
})
