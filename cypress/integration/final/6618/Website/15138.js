/*
@author: Anirudha Pratap
@master_project_id: 6618
@phase_id:
@story_id: 15138
@story_name: product_details_new
@path: final/Website
@test_case_name: product_details_new
@description: N/A
@test_steps:
^product details new
-Login to ucertify.com
-Open the following url:(https://www.ucertify.com/courses/?search_query=70-486-VT)

@test_data: n/a
@result: It will Open the product details new page.
*/

describe('Product search page', () => {
	beforeEach(() => cy.websiteLogin())

	it('opens the current page', () => {
		cy.visit('/courses/?search_query=70-486-VT')
		cy.location('pathname', { timeout: 30000 }).should('match', /^\/(courses\/|p\/catalog\.html)$/i)
		cy.get('body').should('be.visible').and('not.be.empty')
	})
})
