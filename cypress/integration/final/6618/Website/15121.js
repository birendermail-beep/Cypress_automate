/*
@author: Anirudha Pratap
@master_project_id: 6618
@phase_id:
@story_id: 15121
@story_name: wgu_course
@path: final/Website
@test_case_name: wgu_course
@description: N/A
@test_steps:
^wgu course page
-Login to ucertify.com.
-Open the following url:(https://www.ucertify.com/products/wgu_course.html)

@test_data: n/a
@result: It will open the wgu course page
*/

describe('WGU course page', () => {
	beforeEach(() => cy.websiteLogin())

	it('opens the current page', () => {
		cy.visit('/products/wgu_course.html')
		cy.location('pathname', { timeout: 30000 }).should('eq', '/products/wgu_course.html')
		cy.get('body').should('be.visible').and('not.be.empty')
	})
})
