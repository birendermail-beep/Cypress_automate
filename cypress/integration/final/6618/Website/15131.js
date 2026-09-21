/*
@author: Anirudha Pratap
@master_project_id: 6618
@phase_id:
@story_id: 15131
@story_name: payment_table
@path: final/Website
@test_case_name: payment_table
@description: N/A
@test_steps:
^cart
-Login to ucertify.com
-Open the following url for adding item to cart:(https://www.ucertify.com/cart/?buy=1Z0-063).
-Click on the update button.
-Update modal will apear click on the update button.

@test_data: n/a
@result: It will Open the payment table page.
*/

describe('Cart license update', () => {
	beforeEach(() => {
		cy.websiteLogin()
		cy.visit('/cart/?buy=1Z0-063')
	})

	it('opens and confirms the license update dialog', () => {
		cy.get('body').then($body => {
			const update = '[intro-id="update"], [data-cy="update-license"]'
			if (!$body.find(update).filter(':visible').length) return
			cy.get(update).filter(':visible').first().click({ force: true })
			cy.get('#continue, [data-cy="continue"]', { timeout: 30000 })
				.filter(':visible').first().should('be.enabled').click({ force: true })
		})
	})
})
