/*
@author: Anirudha Pratap
@master_project_id: 6618
@phase_id:
@story_id: 15101
@story_name: howto_course
@path: final/Website
@test_case_name: howto_course
@description: N/A
@test_steps:
^How to page
-Login to ucertify.com.
-Open the following url:(https://www.ucertify.com/products/course/videos.html)

@test_data: n/a
@result: It will open the how to course help videos
*/

describe('How-to course videos page', () => {
	beforeEach(() => cy.websiteLogin())

	it('opens the current page', () => {
		cy.visit('/products/course/videos.html')
		cy.location('pathname', { timeout: 30000 }).should('eq', '/products/course/videos.html')
		cy.get('body').should('be.visible').and('not.be.empty')
	})
})
