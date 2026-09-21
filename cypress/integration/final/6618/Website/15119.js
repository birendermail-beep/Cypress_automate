/*
@author: Anirudha Pratap
@master_project_id: 6618
@phase_id:
@story_id: 15119
@story_name: course_screenshot
@path: final/Website
@test_case_name: course_screenshot
@description: N/A
@test_steps:
^Screenshots page
-Login to ucertify.com.
-Open the following url:(https://www.ucertify.com/products/course/screenshots.html)

@test_data: n/a
@result: It will open the course screenshot page
*/

describe('Course screenshots page', () => {
	beforeEach(() => cy.websiteLogin())

	it('opens the current page', () => {
		cy.visit('/products/course/screenshots.html')
		cy.location('pathname', { timeout: 30000 }).should('eq', '/products/course/screenshots.html')
		cy.get('body').should('be.visible').and('not.be.empty')
	})
})
