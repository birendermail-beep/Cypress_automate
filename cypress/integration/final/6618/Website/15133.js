/*
@author: Anirudha Pratap
@master_project_id: 6618
@phase_id:
@story_id: 15133
@story_name: shopping_options
@path: final/Website
@test_case_name: shopping_options
@description: N/A
@test_steps:
^cart
-Login to ucertify.com
-Open the following url for adding item to cart:(https://www.ucertify.com/courses/).
-Click on the Add to cart button of "CCNA Cyber Ops SECOPS 210-255 Official Cert Guide" course

@test_data: n/a
@result: It will Open the shopping options page.
*/

describe('Shopping options', () => {
	beforeEach(() => cy.websiteLogin())

	it('opens shopping options for the selected course', () => {
		cy.visit('/cart/?buy=1Z0-063')
		cy.location('pathname', { timeout: 30000 }).should('include', '/cart')
		cy.get('body').should('be.visible').and('not.be.empty')
	})
})
